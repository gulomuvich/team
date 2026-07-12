import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/icon/logo.png";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import SignIn from "../../page/SignIn/SignIn";
import SignUp from "../../page/SignUp/SignUp";

function Header() {
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <nav>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>

        <div className="right">
          <button>Get consultation</button>

          <CgProfile />
          <Link
            to={"/signin"}
            className="login"
            onClick={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
          >
            Log in
          </Link>
          {open && (
            <SignIn
              close={() => setOpen(false)}
              openSignUp={() => {
                setOpen(false);
                setOpens(true);
              }}
            />
          )}
          <span>/</span>
          <Link
            to={"/signup"}
            className="login"
            onClick={(e) => {
              e.preventDefault();
              setOpens(true);
            }}
          >
            Register
          </Link>
          {opens && (
            <SignUp
              closes={() => setOpens(false)}
              openSignIn={() => {
                setOpens(false);
                setOpen(true);
              }}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
