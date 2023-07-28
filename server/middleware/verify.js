// const { OAuth2Client } = require('google-auth-library');

// const oAuth2Client = new OAuth2Client('120795696673-7jpr4mim17f10lh4i2j060q66u9ap5oh.apps.googleusercontent.com', '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')

// /*
// Bearer slkfhkgfjajdhgjkadshkg
// */


// async function verify(req, res, next) {
//     const authHeader = req.headers.authorization
//     if (!authHeader) {
//         console.log('unauthorized')
//         res.status('404').json('unauthorized invalid token')
// return
//     }
//     const token = authHeader.split(' ')[1]
//     const ticket = await oAuth2Client.verifyIdToken({
//         idToken: token,
//         audience: '120795696673-7jpr4mim17f10lh4i2j060q66u9ap5oh.apps.googleusercontent.com',
//     })
//     const payload = ticket.getPayload()
//     if (payload) {
//         req.userId = payload['sub']
//         next()
//         return
//     }
//     console.log('unauthorized')
//     next()
// }



const jwt = require("jsonwebtoken");


// Middleware to verify the access token
const verifyAccessToken = (req, res, next) => {
    const accessToken = req.headers.authorization?.split(" ")[1];
    if (!accessToken) {
      return res.status(401).json({ error: "Access token missing" });
    }
  
    jwt.verify(accessToken, process.env.CLIENT_ID, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid access token" });
      }
      req.userId = decoded.userId;
      next();
    });
  };
  
  // Middleware to verify the refresh token from the HTTP-only cookie
  const verifyRefreshToken = (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ error: "Refresh token missing" });
    }
  
    jwt.verify(refreshToken, process.env.CLIENT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid refresh token" });
      }
      req.userId = decoded.userId;
      next();
    });
  };

  module.exports = {
    verifyAccessToken,
    verifyRefreshToken
};
