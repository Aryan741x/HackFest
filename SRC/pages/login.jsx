import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function LoginForm() {
  const [formData, setFormData] = React.useState({ email: "", password: "" });
  const [err, setErr] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  function handleformchange(event) {
    setFormData((prevFormData) => ({ ...prevFormData, [event.target.name]: event.target.value }));
  }

  async function handleLogin(event) {
    event.preventDefault();

    const email = formData.email;
    const password = formData.password;

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/home");
    } catch (err) {
      setErr(true);
      console.error("Login failed:", err.message);
    }
  }

  function togglePasswordVisibility() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <div className="formpage">
      <div className="formbox">
        <div className="pageinfo">
          <span className="logo">SneekyChats</span>
          <span className="info">Welcome to Chatting with full privacy</span>
        </div>
        <form className="form" onSubmit={handleLogin}>
          <input type="email" onChange={handleformchange} name="email" placeholder="Your Email" />
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              onChange={handleformchange}
              name="password"
              placeholder="Your Password"
            />
            {/* FontAwesome eye icon for password visibility toggle */}
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="password-toggle-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="alreadylogin">
            <div>
              Do not have an account?<Link to="/">Register-Here</Link>
            </div>
          </div>
          {err && <span>No account detected</span>}
          <button className="registerbutton">Login</button>
        </form>
      </div>
    </div>
  );
}
