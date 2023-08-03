const express = require('express');
const {
    registerMentor,
    updateSkills,
    updateEducation,
    updateExperience,
    uploadProfilePicture
} = require('../../controllers/mentorControllers');
const router = express.Router();
const multer = require('multer');
const upload = multer();
// const { protect } = require("../middleware/authMiddleware");

router.post('/register-mentor', registerMentor);
router.post('/:id/experience', updateExperience);
router.post('/:id/skills', updateSkills);
router.post('/:id/education', updateEducation);
router.post('/upload-image', upload.single('profilePicture'), uploadProfilePicture);


module.exports = router
