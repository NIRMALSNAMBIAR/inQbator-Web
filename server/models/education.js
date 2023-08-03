const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    schoolName: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    fieldOfStudy: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
});

const Education = mongoose.model('Education', educationSchema);
module.exports = Education;
