const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    profilePicture: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    roleInCompany: {
        type: String,
        required: true,
    },
    locationOfCompany: {
        type: String,
        required: true,
    },
    sessionPerWeek: {
        type: String,
        required: true,
    },
    taskAndFollowUp: {
        type: String,
        required: true,
    },
    totalExperience: {
        type: String,
        required: true,
    },
    areaOfMentorship: {
        type: String,
        required: true,
    },
    targetSectorInMentorship: {
        type: String,
        required: true,
    },
    skills: [{
        ref: 'Skill',
        type: mongoose.Schema.Types.ObjectId
    }],
    education: [{
        ref: 'Education',
        type: mongoose.Schema.Types.ObjectId
    }],
    experience: [{
        ref: 'Experience',
        type: mongoose.Schema.Types.ObjectId
    }],
})


const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;