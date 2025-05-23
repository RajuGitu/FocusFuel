const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    securityAnswer :{
        type:String
    },
    otpVerified:{
        type:Boolean
    },
    otp:{
        type:String
    }
}, { timestamps: true });


module.exports = mongoose.model('user',userSchema);