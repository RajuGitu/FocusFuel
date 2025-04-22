import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const userId = location.state?.userId;

    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");

    // Auto-delete if not verified in 2 minutes
    useEffect(() => {
        const timer = setTimeout(async () => {
            try {
                const res = await fetch(`http://localhost:5000/basic/verify-otp-status/${userId}`);
                const data = await res.json();

                if (!data.otpVerified) {
                    await fetch(`http://localhost:5000/basic/delete-unverified-user/${userId}`, {
                        method: 'DELETE',
                    });

                    alert("OTP not verified in time. Account deleted.");
                    navigate("/signup");
                }
            } catch (error) {
                console.error("Error checking OTP status:", error);
            }
        }, 2 * 60 * 1000); // 2 minutes

        return () => clearTimeout(timer);
    }, [userId, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/basic/verifyotp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, otp })
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setMessage("OTP verified successfully!");
                navigate("/dashboard");
            } else {
                setMessage(data.message || "Invalid OTP.");
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            setMessage("Something went wrong.");
        }
    };

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

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
