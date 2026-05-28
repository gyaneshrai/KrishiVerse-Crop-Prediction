const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const farmRoutes = require('./routes/farm'); // Add this line

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Add a route handler for the root path
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// OTP Store (temporary, in-memory)
const otpStore = {}; // { phoneNumber: otp }

// Generate random 6-digit OTP
const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Send OTP Endpoint
app.post('/send-otp', (req, res) => {
  const { phoneNumber } = req.body;

  if (!phoneNumber) {
    return res.status(400).json({ message: 'Phone number is required' });
  }

  const otp = generateOtp();
  otpStore[phoneNumber] = otp;

  console.log(`OTP for ${phoneNumber}: ${otp}`); // In production, send via SMS

  res.json({ message: 'OTP sent successfully!' });
});

// Verify OTP Endpoint
app.post('/verify-otp', (req, res) => {
  const { phoneNumber, otp } = req.body;

  if (!phoneNumber || !otp) {
    return res.status(400).json({ message: 'Phone number and OTP are required' });
  }

  if (otpStore[phoneNumber] === otp) {
    delete otpStore[phoneNumber];
    return res.json({ message: 'OTP verified successfully!' });
  } else {
    return res.status(400).json({ message: 'Invalid OTP' });
  }
});

// Auth routes (e.g., signup)
app.use('/api', authRoutes);
app.use('/api', farmRoutes); // Add this line

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/signupdb')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));
