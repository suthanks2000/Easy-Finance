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
import backgroundImg from "./backgroundImg.jpg"
import LoginNavbar from "./loginNavbar.js";


export default function Login() {
  const [adminData, setAdminData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const logData = useSelector((state) => state.regisLogin.loginData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const backgroundImage = "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg')";

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default 
    setLoading(true);
    setError("");
    setFieldErrors({});

    const newFieldErrors = {};
    if (!logData.Email) newFieldErrors.Email = "Please fill out this field.";
    if (!logData.Password) newFieldErrors.Password = "Please fill out this field.";

    if (Object.keys(newFieldErrors).length > 0) {
      setFieldErrors(newFieldErrors);
      setLoading(false);
      return;
    }

    
    const formData = new FormData();
    formData.append("email", logData.Email);
    formData.append("password", logData.Password);

   
      await axios.post("https://disondys.pythonanywhere.com/loginUser", formData)

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
    
};

  return (
    

    <>

     <div className="container position-sticky z-index-sticky mt-0 ">
    <div className="row">
      <div className="col-12">
    <LoginNavbar/>
    </div>
    </div>
    </div>

  
       <main className="main-content  mt-0">
    <section>
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto mb-lg-0 mb-5">
              <div className="card card-plain border-0 mb-5">
                <div className="card-header pb-0 text-start border-0">
                  <h4 className="font-weight-bolder">Sign In</h4>
                  <p className="mb-0">Enter your email and password to sign in</p>
                </div>
                <div className="card-body">
                  <form role="form">
                  {error && (
          <Alert variant="danger" className="error" style={{color:"white"}}>

            {error}
          </Alert>
        )}
                    <div className="mb-3">
                      <input type="email" className="form-control form-control-lg" placeholder="Email" aria-label="Email" onChange={(e) => dispatch(setLoginData({ ...logData, Email: e.target.value })) }/>
                    </div>
                    {fieldErrors.Email && (
            <div className="error">{fieldErrors.Email}</div>
          )}
                    <div className="mb-3">
                      <input type="password" className="form-control form-control-lg" placeholder="Password" aria-label="Password"  onChange={(e) => dispatch(setLoginData({ ...logData, Password: e.target.value })) }/>
                    </div>
                    {fieldErrors.Password && (
            <div className="error">{fieldErrors.Password}</div>
          )}
                   
                    <div className="text-center">
                      <button type="button" className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0" onClick={handleLogin}>Sign in</button>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-4 text-sm mx-auto">
                    Don't have an account?
                    <Link to="/register" className="text-primary text-gradient font-weight-bold">Sign up</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 d-lg-flex d-none h-100 my-auto pe-5 position-absolute top-0 end-0 text-center justify-content-center flex-column">
      <div
        className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: 'cover'
        }}
      >
        <span className="mask bg-gradient-primary opacity-6"></span>
        <h4 className="mt-5 text-white font-weight-bolder position-relative">"Attention is the new currency"</h4>
        <p className="text-white position-relative">The more effortless the writing looks, the more effort the writer actually put into the process.</p>
      </div>
    </div>
          </div>
        </div>
      </div>
    </section>
  </main>
 
    </>
  );
}
