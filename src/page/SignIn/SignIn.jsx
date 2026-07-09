import { useState } from "react";
import "./signin.css";
import {
  FaFacebookF,
  FaGoogle,
  FaTwitter,
  FaLinkedinIn,
  FaEye,
} from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function SignIn({ close, openSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function checking(event) {
    event.preventDefault();

    const getData = JSON.parse(localStorage.getItem("user"));

    if (email == getData.email && password == getData.password) {
      setEmail("");
      setPassword("");

      alert("Siz hisobingizga muvaffaqiyatli kirdingiz")

      navigate("/");
    } else {
      alert("Bunday foydalanuvchi topilmadi");
    }
  }
  return (
    <div className="signin-modal-overlay">
      <div className="signin-modal-container">
        <button className="signin-close-button" onClick={close}>
          <IoCloseOutline />
        </button>

        <div className="signin-modal-content">
          <h2 className="signin-modal-title">Sign in</h2>

          <p className="signin-modal-description">
            Sign in to your account using email and password provided during
            registration.
          </p>

          <form className="signin-form" onSubmit={checking}>
            <div className="signin-form-group">
              <label className="signin-form-label">Email</label>

              <input
                type="email"
                value={email}
                placeholder="Your working email"
                className="signin-form-input"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="signin-form-group">
              <label className="signin-form-label">Password</label>

              <div className="signin-password-field">
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  className="signin-form-input"
                  onChange={(event) => setPassword(event.target.value)}
                />

                <FaEye className="signin-password-icon" />
              </div>
            </div>

            <div className="signin-form-options">
              <label className="signin-checkbox">
                <input type="checkbox" />
                <span>Keep me signed in</span>
              </label>

              <a href="#" className="signin-forgot-link">
                Forgot password?
              </a>
            </div>

            <button className="signin-submit-button" type="submit">Sign in</button>
          </form>

          <p className="signin-register-text">
            Don't have an account?{" "}
            <Link
              type="button"
              onClick={openSignUp}
              className="signin-register-link"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div className="signin-social-section">
          <p className="signin-social-title">Or sign in with</p>

          <div className="signin-social-icons">
            <FaFacebookF />
            <FaGoogle />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
