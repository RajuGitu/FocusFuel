const express = require('express');
const { loginUserController, signupUserController, updateUserController, getUserNameController, getOtpStatus, deleteUserIfUnverified, forgotPasswordController } = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');
const verifyToken = require('../middleware/verifyMiddleware');
const { verifyOtp } = require('../controller/userController');
const router = express.Router();

router.post('/login', loginUserController);
router.post('/signup', signupUserController);
router.put('/forgotpassword', updateUserController);
router.post('/verifyOtp', verifyOtp);
router.get("/verify-otp-status/:id", getOtpStatus);
router.delete("/delete-unverified-user/:id", deleteUserIfUnverified);
router.put("/forgotpassword", forgotPasswordController);


module.exports = router;