const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
}
);

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
