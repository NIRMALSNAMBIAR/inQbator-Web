const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    employmentType: {
        type: String,
        enum: ['Full Time', 'Part Time'],
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    currentlyWorking: {
        type: Boolean,
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

const Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;