import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home"
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Individual from "./pages/individual/index";
import Provider from "./pages/provider/index";
import PageNotFound from "./pages/home/PageNotFoundColored";
import ForgotPassInst from "./pages/auth/ForgotPassInst";
import ResetPassword from "./pages/auth/ResetPassword";
import PasswordReset from "./pages/auth/PasswordReset";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/login/forgotpassword/mail" element={<ForgotPassInst/>} />
        <Route path="/login/forgotpassword/resetpassword" element={<ResetPassword/>} />
        <Route path="/login/forgotpassword/passwordreset" element={<PasswordReset/>} />
        <Route path="/individual/*" element={<Individual/>} />
        <Route path="/provider/*" element={<Provider/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
