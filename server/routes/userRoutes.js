const express = require('express');
const { feedback, googleLogin, userInfo , refreshToken} = require('../controllers/userControllers');
const { verifyAccessToken } = require('../middleware/verify');
const router = express.Router();
// const { protect } = require("../middleware/authMiddleware");

router.post('/google-login', googleLogin);
router.get('/user-info', verifyAccessToken, userInfo);
router.post('/api/refresh-token', refreshToken );
router.post('/feedback', feedback);
// router.get('/protected', verify, async(req, res, next)=>{
//     res.send({message: 'Awesome it works for protected route'})
// });

// router.get('/profile',protect,userProfile)
// router.put('/follow/:userId', protect,followUser)

module.exports = router
