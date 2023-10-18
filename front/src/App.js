import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeCard from "./components/AnimeCard";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import AddAnime from './pages/AddAnime';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Layout/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/add" element={<AddAnime />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
