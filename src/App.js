import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Home from './pages/home';
import Message from "./pages/message";
import ForgetPassword from "./pages/forgetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/message" element={<Message />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </>
  );
}

export default App;
