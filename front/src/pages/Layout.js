import { Outlet, Link } from "react-router-dom";
import '../assets/css/style.css';

const Layout = () => {
  return (
    <>    
      <nav className="">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Anime">Anime</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;