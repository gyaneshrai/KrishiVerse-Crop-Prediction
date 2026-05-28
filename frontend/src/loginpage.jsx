import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    console.log('Send OTP to:', phoneNumber);
    // Call backend API to send OTP
    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log('Verify OTP:', otp);
    // Call backend API to verify OTP
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-400">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {step === 1 ? 'Login with Phone' : 'Enter OTP'}
        </h2>

        {step === 1 ? (
          <form onSubmit={handlePhoneSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. +91XXXXXXXXXX"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-2xl hover:bg-blue-700 transition-all"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the OTP received"
                required
              />
            </div>
            <Link
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-2xl hover:bg-blue-700 transition-all"  to="/"
            >
              Verify OTP
            </Link>
          </form>
        )}

        {/* Create Account Link */}
        <div className="text-center mt-6">
          <Link
            to="/signup" // Change this to your actual register route
            className="text-blue-600 hover:underline"
          >
            Create New Account
          </Link>
        </div>

      </div>
    </div>
  );
}
