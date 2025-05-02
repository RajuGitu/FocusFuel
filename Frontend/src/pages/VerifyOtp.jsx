import React from "react";
import { useOtpVerification } from "../hooks/authHooks";

const VerifyOtp = () => {
  const { otp, setOtp, message, handleOtpSubmit } = useOtpVerification();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Verify OTP</h2>
        <p className="text-center text-sm text-gray-600 mb-4">
          Please check your email and enter the OTP below:
        </p>

        {message && (
          <p className={`text-center mb-4 ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
