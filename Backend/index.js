const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const connectDb = require('./config/db');
const cookieParser = require('cookie-parser');


const nodemailer = require("nodemailer");
dotenv.config();
connectDb();
app.use(cookieParser());
// With this specific configuration:
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend's exact origin
    credentials: true
}));

app.use(express.json());
app.use(morgan("dev"));

app.use('/basic', require('./routes/userRoutes'));

app.listen(PORT, (req, res) => {
    console.log("Server is Running");
})