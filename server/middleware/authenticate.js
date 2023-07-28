const { google } = require('googleapis');
const config = require('../config');

const authenticate = async (req, res, next) => {
  try {
    const { id_token } = req.headers;

    if (!id_token) {
      return res.status(401).json({ message: 'No ID token provided' });
    }

    const client = new google.auth.OAuth2(config.google.clientId);
    const ticket = await client.verifyIdToken({ idToken: id_token });

    const { sub: googleId, email, given_name, family_name, picture } = ticket.getPayload();

    // You can perform additional checks or validations here

    req.user = { googleId, email, given_name, family_name, picture };

    next();
  } catch (error) {
    console.error('Authentication failed:', error);
    res.status(401).json({ message: 'Authentication failed' });
  }
};

module.exports = authenticate;
