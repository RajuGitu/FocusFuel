import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgetPassword";
import VerifyOtp from "./pages/VerifyOtp";
import Dashboard from "./pages/Dashboard";
import FocusFuel from "./pages/FocusFuel";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/FocusFuel" element={<FocusFuel/>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
