const Mentor = require('../models/mentor');
const Skill = require('../models/skills');
const Education = require('../models/education');
const Experience = require('../models/experience');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');


let registerMentorBody = {
    "profilePicture": "https://example.com/profile.jpg",
    "about": "I am a mentor with 10 years of experience in software development.",
    "fullName": "John Doe",
    "companyName": "Acme Inc.",
    "roleInCompany": "Software Engineer",
    "locationOfCompany": "San Francisco, CA",
    "sessionPerWeek": "2",
    "taskAndFollowUp": "I will provide weekly assignments and follow up with mentees.",
    "totalExperience": "10",
    "areaOfMentorship": "Software Development",
    "targetSectorInMentorship": "Web Development",
    "skills": [
        {
            "skillName": "JavaScript"
        },
        {
            "skillName": "React"
        }
    ],
    "education": [
        {
            "schoolName": "University of California, Berkeley",
            "degree": "Bachelor of Science",
            "fieldOfStudy": "Computer Science",
            "startDate": "2010",
            "endDate": "2014"
        }
    ],
    "experience": [
        {
            "title": "Software Engineer",
            "employmentType": "Full Time",
            "companyName": "Acme Inc.",
            "location": "San Francisco, CA",
            "description": "Developed web applications using React and Node.js.",
            "currentlyWorking": true,
            "startDate": "2018",
            "endDate": "present"
        }
    ]
}

let updateSkillsBody = [
    {
        "_id": "id",
        "skillName": "React Native",
    },
]

let updateEducationBody = [
    {
        "_id": "id",
        "schoolName": "University of California, Berkeley",
        "degree": "Master of Science",
        "fieldOfStudy": "Computer Science",
        "startDate": "2014",
        "endDate": "2016"
    },
    {
        "_id": "id",
        "schoolName": "Stanford University",
        "degree": "Bachelor of Science",
        "fieldOfStudy": "Computer Engineering",
        "startDate": "2010",
        "endDate": "2014"
    }
]

let updateExperienceBody = [
    {
        "_id": "id",
        "title": "Senior Software Engineer",
        "employmentType": "Full Time",
        "companyName": "Acme Inc.",
        "location": "San Francisco, CA",
        "description": "Developed web applications using React and Node.js.",
        "currentlyWorking": true,
        "startDate": "2018",
        "endDate": "present"
    },
    {
        "_id": "id",
        "title": "Software Engineer",
        "employmentType": "Full Time",
        "companyName": "XYZ Inc.",
        "location": "San Francisco, CA",
        "description": "Developed mobile applications using React Native.",
        "currentlyWorking": false,
        "startDate": "2016",
        "endDate": "2018"
    }
]

// Register mentor
const registerMentor = async (req, res) => {
    try {
        const {
            profilePicture,
            about,
            fullName,
            companyName,
            roleInCompany,
            locationOfCompany,
            sessionPerWeek,
            taskAndFollowUp,
            totalExperience,
            areaOfMentorship,
            targetSectorInMentorship,
            skills,
            education,
            experience,
        } = req.body;
        // Create new skill documents
        const skillDocs = await Skill.create(skills);
        // Create new education documents
        const educationDocs = await Education.create(education);
        // Create new experience documents
        const experienceDocs = await Experience.create(experience);
        // Create new mentor document
        const mentor = new Mentor({
            profilePicture,
            about,
            fullName,
            companyName,
            roleInCompany,
            locationOfCompany,
            sessionPerWeek,
            taskAndFollowUp,
            totalExperience,
            areaOfMentorship,
            targetSectorInMentorship,
            skills: skillDocs.map((doc) => doc._id),
            education: educationDocs.map((doc) => doc._id),
            experience: experienceDocs.map((doc) => doc._id),
        });
        const createdMentor = await mentor.save();
        res.status(201).json(createdMentor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

// Update skills
const updateSkills = async (req, res) => {
    try {
        const mentorId = req.params.id;
        const skills = req.body;

        // Update skill documents
        const updatedSkills = await Promise.all(
            skills.map(async (skill) => {
                const { _id, ...rest } = skill;
                const updatedSkill = await Skill.findByIdAndUpdate(
                    _id,
                    { $set: rest },
                    { new: true }
                );
                return updatedSkill;
            })
        );

        // Update mentor document
        const mentor = await Mentor.findByIdAndUpdate(
            mentorId,
            { $set: { skills: updatedSkills.map((skill) => skill._id) } },
            { new: true }
        );

        res.status(200).json(mentor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update education
const updateEducation = async (req, res) => {
    try {
        const mentorId = req.params.id;
        const education = req.body;

        // Update education documents
        const updatedEducation = await Promise.all(
            education.map(async (edu) => {
                const { _id, ...rest } = edu;
                const updatedEdu = await Education.findByIdAndUpdate(
                    _id,
                    { $set: rest },
                    { new: true }
                );
                return updatedEdu;
            })
        );

        // Update mentor document
        const mentor = await Mentor.findByIdAndUpdate(
            mentorId,
            { $set: { education: updatedEducation.map((edu) => edu._id) } },
            { new: true }
        );

        res.status(200).json(mentor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update experience
const updateExperience = async (req, res) => {
    try {
        const mentorId = req.params.id;
        const experience = req.body;

        // Update experience documents
        const updatedExperience = await Promise.all(
            experience.map(async (exp) => {
                const { _id, ...rest } = exp;
                const updatedExp = await Experience.findByIdAndUpdate(
                    _id,
                    { $set: rest },
                    { new: true }
                );
                return updatedExp;
            })
        );

        // Update mentor document
        const mentor = await Mentor.findByIdAndUpdate(
            mentorId,
            { $set: { experience: updatedExperience.map((exp) => exp._id) } },
            { new: true }
        );

        res.status(200).json(mentor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

// Upload profile picture
// Key of form-data should be profilePicture
// content-type should be multipart/form-data
const uploadProfilePicture = async (req, res) => {
    let streamUpload = (req) => {
        return new Promise((resolve, reject) => {
            let stream = cloudinary.uploader.upload_stream(
                (error, result) => {
                    if (result) {
                        resolve(result)
                    } else {
                        reject(error)
                    }
                }
            );
            streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
    };
    async function upload(req) {
        let result = await streamUpload(req);
        return result
    }
    upload(req).then((uploaded) => {
        req.body.featureImage = uploaded.url
        res.json({
            message: 'success',
            url: uploaded.url
        });
    }).catch(function (err) {
        res.json({ message: err });
    });
}

module.exports = {
    registerMentor,
    updateSkills,
    updateEducation,
    updateExperience,
    uploadProfilePicture
};