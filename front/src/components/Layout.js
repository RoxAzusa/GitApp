import { Outlet, Link } from "react-router-dom";
import '../assets/css/style.css';

const Layout = () => {
  return (
    <>    
      <nav className="nav">
        <ul className="nav-item">
          <li className="nav-button">
            <Link className="nav-link" to="/">🏠 Home</Link>
          </li>
          <li className="nav-button">
            <Link className="nav-link" to="/add">📺 Ajouter un animé</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;