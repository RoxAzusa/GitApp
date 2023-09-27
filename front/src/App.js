import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anime from "./pages/Anime";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />}/>
            <Route path="anime" element={<Anime />}/>
            <Route path="login" element={<Login />}/>
            <Route path="signup" element={<SignUp />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
