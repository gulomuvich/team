import "./signup.css";
import { FaFacebookF, FaGoogle, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp({ closes, openSignIn }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const user = {
      userName,
      email,
      password,
    };

    if (userName !== "" && email !== "" && password !== "") {
      localStorage.setItem("user", JSON.stringify(user));

      alert("Siz muvoffaqiyatli ro'yxatdan o'tdingiz");
      
      setUserName("");
      setEmail("");
      setPassword("");
      
      closes()
      navigate("/");
    } else {
      alert("Bo'sh qolgan joylarni to'ldiring");
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-modal-overlay">
      <div className="signup-modal-container">
        <button className="signup-close-button" onClick={closes}>
          <IoCloseOutline />
        </button>

        <div className="signup-modal-content">
          <h2 className="signup-modal-title">Sign up</h2>

          <p className="signup-modal-description">
            Registration takes less than a minute but gives you full control
            over your studying.
          </p>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-form-group">
              <label className="signup-form-label">Full Name</label>

              <input
                type="text"
                value={userName}
                placeholder="Your full name"
                className="signup-form-input"
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>

            <div className="signup-form-group">
              <label className="signup-form-label">Email</label>

              <input
                type="email"
                value={email}
                placeholder="Your working email"
                className="signup-form-input"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="signup-form-group">
              <label className="signup-form-label">Password</label>

              <div className="signup-password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="Password"
                  className="signup-form-input"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="signup-form-options">
              <label className="signup-checkbox">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
            </div>

            <button className="signup-submit-button" type="submit">
              Sign up
            </button>
          </form>

          <p className="signup-register-text">
            Already have an account?{" "}
            <Link
              type="button"
              onClick={openSignIn}
              className="signup-register-link"
            >
              Sign in
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

export default SignUp;
