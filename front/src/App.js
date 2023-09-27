import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anime from "./pages/Anime";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import AddAnime from './pages/AddAnime';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Layout/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="anime" element={<Anime />}/>
            <Route path="/add" element={<AddAnime />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
