import React, { useState } from 'react';

export default function LoginPage() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send OTP');
      }

      console.log(data.message);
      setStep(2);
    } catch (error) {
      console.error('Error sending OTP:', error.message);
      alert('Failed to send OTP. Please try again.');
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber, otp }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'OTP verification failed');
      }

      console.log(data.message);
      alert('Login successful!');
      // TODO: Redirect user to dashboard/home page here
    } catch (error) {
      console.error('Error verifying OTP:', error.message);
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-2xl hover:bg-blue-700 transition-all"
            >
              Verify OTP
            </button>
          </form>
        )}

        {/* Create Account Link */}
        <div className="text-center mt-6">
          <a 
            href="/signup"
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Create New Account
          </a>
        </div>
      </div>
    </div>
  );
}
