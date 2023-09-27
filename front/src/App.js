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
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<HomePage />}/>
            <Route path="anime" element={<Anime />}/>
            </Route>            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
