import authServices, { getAuthenticatedUser } from "../services/authServices";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyOtp, checkOtpStatus, deleteUnverifiedUser, forgotPassword } from "../services/authServices";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    setLoading(true);
    setError("");
    try {
      const data = await authServices.loginUser(email, password);
      localStorage.setItem("userId", data.userId);
      navigate("/FocusFuel/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, error };
};

const useSignUp = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (formData) => {
    try {
      const data = await authServices.signUpService(formData);
      setMessage("Signup successful! OTP sent to email.");
      localStorage.setItem("userId", data.userId);
      navigate("/verify-otp");
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Error signing up. Please try again."
      );
    }
  };

  return { handleSignUp, message };
};

export const useOtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const status = await checkOtpStatus(userId);
        if (!status.otpVerified) {
          await deleteUnverifiedUser(userId);
          localStorage.removeItem("userId");
          alert("OTP not verified in time. Account deleted.");
          navigate("/signup");
        }
      } catch (error) {
        console.error("Error during OTP timeout check:", error);
      }
    }, 2 * 60 * 1000); // 2 mins

    return () => clearTimeout(timer);
  }, [userId, navigate]);

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await verifyOtp(userId, otp);
      if (data.token) {
        setMessage("OTP verified successfully!");
        navigate("/FocusFuel/dashboard");
      } else {
        setMessage(data.message || "Invalid OTP.");
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setMessage("Something went wrong.");
    }
  };

  return {
    otp,
    setOtp,
    message,
    handleOtpSubmit
  };
};

export const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await forgotPassword({ email, answer, newPassword });
      setMessage(data.message);
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return {
    email,
    setEmail,
    answer,
    setAnswer,
    newPassword,
    setNewPassword,
    message,
    handleSubmit
  };
};

const useUserName = () => {
  const [user, setUser] = useState("/0");
  const [fetching, setFetching] = useState(true);

  const fetchUserName = async () => {
    try {
      setFetching(true);
      const data= await getAuthenticatedUser();
      setUser(data.userName);
    } catch (err) {
      console.error("Error fetching username:", err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchUserName();
  }, []);

  return { user, setUser, fetching, setFetching,fetchUserName };
};

export default useUserName;

export { useLogin, useSignUp };
