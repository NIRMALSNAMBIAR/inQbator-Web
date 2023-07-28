const Feedback = require('../models/feedbackModel')
const User = require('../models/userModel')
const { OAuth2Client } = require('google-auth-library');
const jwt = require("jsonwebtoken");


// Route to fetch user info based on the user ID from the access token
const userInfo = (req, res) => {
  // Fetch user info from the database based on req.userId
  const userInfo = {
    name: "John Doe",
    email: "john@example.com",
    picture: "https://example.com/profile-pic.jpg",
  };
  res.json(userInfo);
};

const refreshToken = (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ error: "Refresh token missing" });
  }

  jwt.verify(refreshToken, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid refresh token" });
    }

    const newAccessToken = generateAccessToken(decoded.userId);
    res.json({ accessToken: newAccessToken });
  });
};


// Google credentials verification
const client = new OAuth2Client(process.env.CLIENT_ID, process.env.CLIENT_SECRET)

const googleLogin = async (req, res) => {
  try {
    const { idToken } = req.body;

    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    // Check if the user exists in the database based on their email
    let user = await User.findOne({ email });

    if (!user) {
      // If the user does not exist, create a new user in the database
      user = new User({
        email,
        name,
        picture,
      });
      await user.save();
    }

    // Generate the access token and refresh token
    const accessToken = jwt.sign({ userId: user._id }, process.env.CLIENT_ID, { expiresIn: "7d" });
    // const refreshToken = jwt.sign({ userId: user._id }, process.env.CLIENT_SECRET, { expiresIn: "7d" });

    // res.cookie("refreshToken", refreshToken, {
    //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    //   httpOnly: true,
    //   secure: true, // Set to true in production if using HTTPS
    //   sameSite: "strict",
    // });

    // Store the refresh token in the user document in the database if desired
    // user.refreshToken = refreshToken;
    // await user.save();

    // Send the access token and refresh token back to the frontend for authentication
    res.json({
      success: true,
      accessToken: accessToken,
      // refreshToken: refreshToken,
    });

  } catch (error) {
    console.error('Google authentication error:', error);
    res.status(500).json({ error: 'Error during Google authentication' });
  }
};

// API endpoint to save feedback
const feedback = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const feedback = new Feedback({ name, email, message });
    await feedback.save();
    res.json({ success: true, message: 'Feedback submitted successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error saving feedback' });
  }
};

module.exports = {
  feedback,
  googleLogin,
  userInfo,
  refreshToken
};