import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/icon/logo.png"
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <header className="header">
      <div className="container">

        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <nav>
          <ul className="menu">
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </nav>

        <div className="right">
          <button>Get consultation</button>

          <Link to="/login" className="login">
            <CgProfile /> Login / Register
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Header;