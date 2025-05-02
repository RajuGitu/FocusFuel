import axios from "axios";
const BASE_URL = "http://localhost:5000/basic";

const loginUser = async (email, password) => {
  const response = await axios.post(
    "http://localhost:5000/basic/login",
    { email, password },
    { withCredentials: true }
  );
  return response.data;
};

const signUpService = async (userData) => {
  const response = await axios.post(
    "http://localhost:5000/basic/signup",
    userData,
    { withCredentials: true }
  );
  return response.data;
};

export const verifyOtp = async (userId, otp) => {
  const res = await axios.post(`${BASE_URL}/verifyotp`, { userId, otp });
  return res.data;
};

export const checkOtpStatus = async (userId) => {
  const res = await axios.get(`${BASE_URL}/verify-otp-status/${userId}`);
  return res.data;
};

export const deleteUnverifiedUser = async (userId) => {
  const res = await axios.delete(
    `${BASE_URL}/delete-unverified-user/${userId}`,
    { withCredentials: true }
  );
  return res.data;
};

export const forgotPassword = async ({ email, answer, newPassword }) => {
  const response = await axios.put(`${BASE_URL}/forgotpassword`, {
    email,
    answer,
    newPassword,
  });
  return response.data;
};

export const getAuthenticatedUser = async () => {
  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : null;
  };

  const token = getCookie("token");
  if (!token) throw new Error("No token found");

  const res = await axios.get("http://localhost:5000/basic/getauthenticate", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

export default {
  loginUser,
  signUpService,
};
