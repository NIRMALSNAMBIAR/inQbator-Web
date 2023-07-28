const jwt = require("jsonwebtoken");

const generateToken = (id, name, email, picture) => {
  return jwt.sign({ id, name, email, picture }, 'sdskdjskdjslkdjlskdj', {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
