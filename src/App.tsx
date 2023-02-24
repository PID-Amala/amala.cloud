import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home"
import SignUp from "./pages/home/SignUp";
import Individual from "./pages/individual/index";
import Provider from "./pages/provider/index";
import PageNotFound from "./pages/home/PageNotFoundColored";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/individual/*" element={<Individual/>} />
        <Route path="/provider/*" element={<Provider/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
