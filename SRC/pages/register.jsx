import React from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Registerform() {
  const [formData, setFormData] = React.useState({ name: "", email: "", password: "" });
  const [err, setErr] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  function handleformchange(event) {
    setFormData((prevFormData) => ({ ...prevFormData, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const { name, email, password } = formData;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);

      await updateProfile(res.user, { displayName: name });

      navigate("/login");
    } catch (err) {
      setErr(true);
    }
  }

  function togglePasswordVisibility() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <div className="formpage">
      <img className="docimg" src="pic.jpeg" alt="Profile" />
      <div className="formbox">
        <div className="pageinfo">
          <span className="logo">Register</span>
          <span className="info">Welcome to Chatting with full privacy</span>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" onChange={handleformchange} name="name" placeholder="Name" />
          <input type="email" onChange={handleformchange} name="email" placeholder="Email" />
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              onChange={handleformchange}
              name="password"
              placeholder="Password"
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
              Already have an account?<Link to="/login">Login-Here</Link>
            </div>
          </div>
          <button className="registerbutton">Register</button>
          {err && <span>Something went wrong</span>}
        </form>
      </div>
    </div>
  );
}
