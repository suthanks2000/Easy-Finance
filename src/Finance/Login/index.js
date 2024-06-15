import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  Alert,
  Spinner,
} from "react-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  setLoginData,
  setuserdata,
  setIsLogin,
} from "../Redux-Toolkit/slices/RegLogCounter";
import "./index.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { db } from "../FirebaseConfig";
import emailImg from "./email.png";
import passwordImg from "./password.png";

export default function Login() {
  const [adminData, setAdminData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const logData = useSelector((state) => state.regisLogin.loginData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true);
    setError("");
    setFieldErrors({});

    if (!logData.Email || !logData.Password) {
      setLoading(false);
      setError("Please fill in all fields");
    } else {
      const formData = new FormData();
      formData.append("email", logData.Email);
      formData.append("password", logData.Password);

    
      axios.post("https://PreethiJP.pythonanywhere.com/loginUser", formData)
        .then(response => {
          if (response.data.message) {
            alert(response.data.message);
            if (response.data.message === "Incomplete personal detail") {
             
              localStorage.setItem("Token", response.data.token);
              localStorage.setItem("loginUserId", JSON.stringify(response.data.uid));
              navigate("/register/personaldetail");
            }
            setLoading(false)
          } else {
            alert("You are authenticated!");
            alert(`Token: ${response.data.token}`);
            alert(`UID: ${response.data.uid}`);

            
            
            localStorage.setItem("Token", response.data.token);
            localStorage.setItem("loginUserId", JSON.stringify(response.data.uid));
            
            setLoading(false);
            navigate("/category");
          }
        })
        .catch(err => {
          console.error("Login error:", err);
          setLoading(false);
        });
    }
};

  return (
    <>
      <div className="2">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <Link className="navbar-brand fs-3" to="/">
            Easy Finance
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-1 mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Invite
                </Link>
                <ul
                  className="dropdown-menu bg-dark"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item text-capitalize text-white bg-dark"
                      to="/banker/referplan"
                    >
                      Request from banker
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {/* <button type="button" className="button mt-1 " onClick={()=>navigate('/register')}>signUp</button> */}
                <Link className="nav-link " to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="login-container">
        <div className="header">
          <h2>Sign In</h2>
        </div>
        {error && (
          <Alert variant="danger" className="error">
            {error}
          </Alert>
        )}
        <div className="inputs">
          <div className="input">
            <img src={emailImg} alt="Email" />
            <input
              type="email"
              placeholder="Email Id"
              onChange={(e) =>
                dispatch(setLoginData({ ...logData, Email: e.target.value }))
              }
            />
          </div>
          {fieldErrors.Email && (
            <div className="error">{fieldErrors.Email}</div>
          )}
          <div className="input">
            <img src={passwordImg} alt="Password" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                dispatch(setLoginData({ ...logData, Password: e.target.value }))
              }
            />
          </div>
          {fieldErrors.Password && (
            <div className="error">{fieldErrors.Password}</div>
          )}
        </div>
        <div className="text-center">
          Don't have an account? <Link to="/register">Register Here!</Link>
        </div>
        <div className="submit-container">
          <button onClick={handleLogin} disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </button>
        </div>
      </div>
    </>
  );
}
