import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/icon/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-box">
          <img src={Logo} alt="logo" className="logo" />

          <p>
            Createx Online School is a leader in online studying.
            We have lots of courses and programs from the best tutors.
          </p>
        </div>

        <div className="footer-box">
          <h3>SITE MAP</h3>
          <Link to="/">About Us</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/events">Events</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contacts">Contacts</Link>
        </div>

        <div className="footer-box">
          <h3>COURSES</h3>
          <Link to="/">Marketing</Link>
          <Link to="/">Management</Link>
          <Link to="/">HR & Recruiting</Link>
          <Link to="/">Design</Link>
          <Link to="/">Development</Link>
        </div>

        <div className="footer-box">
          <h3>CONTACT US</h3>
          <p>(405) 555-0128</p>
          <p>hello@createx.com</p>
        </div>

        <div className="footer-box">
          <h3>SIGN UP TO OUR NEWSLETTER</h3>

          <div className="input-box">
            <input type="email" placeholder="Email address" />
            <button>➜</button>
          </div>

          <small>
            Subscribe to our newsletter to receive communications and early
            updates.
          </small>
        </div>

      </div>

      <div className="footer-bottom container">
        <p>© All rights reserved. Made with ❤ by Createx Studio</p>
        <a href="#">GO TO TOP</a>
      </div>
    </footer>
  );
}

export default Footer;