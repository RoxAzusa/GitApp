import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anime from "./pages/Anime";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Layout/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="anime" element={<Anime />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
