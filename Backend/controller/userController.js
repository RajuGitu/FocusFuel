const userModel = require("../models/userModel");
const JWT = require('jsonwebtoken');
const nodemailer = require("nodemailer");

const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).send({ message: "Please fill all detail" });
        }
        const user = await userModel.findOne({ email, password });
        if (!user) {
            return res.status(404).send({ message: "Incorrect Password or Username" });
        }
        //token
        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });

        return res.status(200).send({
            message: "User is login",
            userName: user.userName,
            token
        });
    } catch (error) {
        return res.status(500).send({ message: "Server side Problem" });
    }
}
const signupUserController = async (req, res) => {
    try {
        const { userName, password, email, phone, address, securityAnswer } = req.body;

        if (!userName || !password || !email || !phone || !address || !securityAnswer) {
            return res.status(401).send({ message: "Please fill all details" });
        }

        const existing = await userModel.findOne({ email });
        if (existing) {
            return res.status(403).send({ message: "User already exists" });
        }

        const otp = generateOTP();
        const user = await userModel.create({
            userName,
            email,
            password,
            phone,
            address,
            securityAnswer,
            otpVerified: false,
            otp
        });

        const transporter = nodemailer.createTransport({
            secure: true,
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: 'rajg05457@gmail.com',
                pass: 'idwucbletavahelg'
            }
        });

        const mailOptions = {
            from: 'rajg05457@gmail.com',
            to: email,
            subject: "Your OTP Code",
            html: `<p>Your OTP code is: <b>${otp}</b>. It is valid for 2 minutes.</p>`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Email send error:", error);
                return res.status(500).send({ message: "Failed to send OTP email", error });
            }

            console.log("OTP Email sent:", info.response);
            return res.status(201).send({
                message: "User registered. OTP sent to email.",
                userId: user._id,
            });
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server Error" });
    }
};

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

const verifyOtp = async (req, res) => {
    try {
        const { userId, otp } = req.body;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(400).send({ message: "User not found" });
        }

        if (user.otpVerified === true) {
            return res.status(400).send({ message: "Email is already verified" });
        }

        // Check if OTP is expired (OPTIONAL: if you store timestamp)
        // const isExpired = Date.now() - user.otpCreatedAt > 10 * 60 * 1000; // 10 min
        // if (isExpired) {
        //     await userModel.findByIdAndDelete(userId);
        //     return res.status(400).send({ message: "OTP expired. Please sign up again." });
        // }

        // Compare OTP
        if (otp !== user.otp) { // Delete user on incorrect OTP
            return res.status(400).send({ message: "Invalid OTP! User registration failed." });
        }

        // ✅ OTP is valid — mark verified and remove OTP
        user.otpVerified = true;
        user.otp = null;
        await user.save();

        // Generate token
        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.status(200).send({
            message: "OTP verified successfully! User saved.",
            token,
        });
    } catch (error) {
        console.error("OTP Verification Error:", error);
        res.status(500).send({ message: "Server Error" });
    }
};
const updateUserController = async (req, res) => {
    const { email, answer, newPassword } = req.body;

    if (!email || !answer || !newPassword) {
        return res.status(400).send({ message: "Please fill all details" });
    }

    // Validate the email and security answer
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    if (user.securityAnswer !== answer) {
        return res.status(400).json({ message: "Incorrect answer" });
    }
    user.password = newPassword;
    await user.save();

    // Optionally, send an email notification for the password change

    res.status(200).json({ message: "Password updated successfully" });
};

const getOtpStatus = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ otpVerified: user.otpVerified });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

const deleteUserIfUnverified = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        if (!user.otpVerified) {
            await userModel.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "Unverified user deleted" });
        }

        res.status(200).json({ message: "User is verified. No action taken." });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

const forgotPasswordController = async (req, res) => {
    try {
        const { email, answer, newPassword } = req.body;

        if (!email || !answer || !newPassword) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Find user with matching email and security answer
        const user = await userModel.findOne({ email, securityAnswer: answer });

        if (!user) {
            return res.status(404).json({ message: "User not found or incorrect security answer." });
        }

        // Update the password directly (plaintext — not secure for production)
        user.password = newPassword;
        await user.save();

        res.status(200).json({ message: "Password reset successfully." });
    } catch (error) {
        console.error("Error in forgotPasswordController:", error);
        res.status(500).json({ message: "Server error. Please try again." });
    }
};

module.exports = {
    loginUserController,
    signupUserController,
    updateUserController,
    verifyOtp,
    getOtpStatus,
    deleteUserIfUnverified,
    forgotPasswordController,
};
