import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgetPassword";
import VerifyOtp from "./pages/VerifyOtp";
import Dashboard from "./pages/Dashboard";
import Study from "./pages/Study";
import FocusFuel from "./pages/FocusFuel";
import Mood from "./pages/Mood";
import Analytics from "./pages/Analytics";
import Planner from "./pages/Planner";
import Wellness from "./pages/Wellness";
import AiAssistant from "./pages/AiAssistant";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/FocusFuel" element={<FocusFuel />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="study" element={<Study />} />
          <Route path="mood" element={<Mood />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="planner" element={<Planner />} />
          <Route path="wellness" element={<Wellness />} />
          <Route path="aiassistant" element={<AiAssistant />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
