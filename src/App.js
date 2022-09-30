import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/login";
import Registration from "./components/pages/registration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
