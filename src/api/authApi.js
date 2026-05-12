import axiosInstance from "./axiosInstance";

// User signup
export const signup = async (data) => {
  const res = await axiosInstance.post("/auth/signup", data);
  return res.data;
};

// User login
export const login = async (username, password, role) => {
  const res = await axiosInstance.post("/auth/login", {
    username,
    password,
    role,
  });
  return res.data;
};

// Verify email OTP
export const verifyEmailOtp = async (email, otp) => {
  const res = await axiosInstance.post("/auth/verify-email", {
    email,
    otp,
  });
  return res.data;
};

// Send mobile OTP
export const sendMobileOtp = async (mobile) => {
  const res = await axiosInstance.post("/auth/send-mobile-otp", {
    mobile,
  });
  return res.data;
};

// Verify mobile OTP
export const verifyMobileOtp = async (mobile, otp) => {
  const res = await axiosInstance.post("/auth/verify-mobile", {
    mobile,
    otp,
  });
  return res.data;
};

// User logout
export const logout = async () => {
  const res = await axiosInstance.get("/auth/logout");
  return res.data;
};
