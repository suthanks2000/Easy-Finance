import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setRegisterData,
  setuserdata,
  setIsLogin,
} from "../Redux-Toolkit/slices/RegLogCounter";
import { useNavigate, Link } from "react-router-dom";
import {Alert} from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import userImg from './userImg.png'
import emailImg from './email.png'
import passwordImg from './password.png'
import "./index.css";


export default function Register() {
  const userdata = useSelector((state) => state.regisLogin.userdata);
  const regData = useSelector((state) => state.regisLogin.registerData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [registerUserData, setRegisterUserData] = useState({});

 

  const handleCreate = async () => {
    
    setLoading(true);
    setError("");
    setFieldErrors({});
  
    const newFieldErrors = {};
    if (!regData.Name) newFieldErrors.Name = "Please fill out this field.";
    if (!regData.Email) newFieldErrors.Email = "Please fill out this field.";
    if (!regData.Password) newFieldErrors.Password = "Please fill out this field.";

    if (Object.keys(newFieldErrors).length > 0) {
      setFieldErrors(newFieldErrors);
      setLoading(false);
      return;
    }
  
      const requestData = new FormData();
      requestData.append('username', regData.Name);
      requestData.append('useremail', regData.Email);
      requestData.append('userpassword', regData.Password);


      await axios.post("https://PreethiJP.pythonanywhere.com/userRegister",requestData).then((res)=>{
        if(res.data.existing){
          alert(res.data.existing)
         
          setLoading(false);
    
        }
        else if(res.data.Added){
          alert(res.data.Added)
          navigate("/register/personaldetail")
        }
      }).catch(((error)=>{
        setLoading(false);
        setError(error.message);
      }))
    };


  return (
    <>
      <div className="register-container">
        <div className="header">
          <h2>Sign Up</h2>
        </div>
        {error && <Alert variant="danger" className="error">{error}</Alert>}
        <div className="inputs">
          <div className="input">
            <img src={userImg} alt="User"/>
            <input type="text" placeholder="Name" onChange={(e) => dispatch(setRegisterData({ ...regData, Name: e.target.value }))}/>
          </div>
          {fieldErrors.Name && <div className="error">{fieldErrors.Name}</div>}
          <div className="input">
            <img src={emailImg} alt="Email"/>
            <input type="email" placeholder="Email Id" onChange={(e) => dispatch(setRegisterData({ ...regData, Email: e.target.value }))}/>
          </div>
          {fieldErrors.Email && <div className="error">{fieldErrors.Email}</div>}
          <div className="input">
            <img src={passwordImg} alt="Password"/>
            <input type="password" placeholder="Password" onChange={(e) => dispatch(setRegisterData({ ...regData, Password: e.target.value }))}/>
          </div>
          {fieldErrors.Password && <div className="error">{fieldErrors.Password}</div>}
        </div>
        <div className="text-center">
          Already have an account? <Link to="/">Login Here!</Link>
        </div>
        <div className="submit-container">
          <button onClick={handleCreate}>Sign Up</button>
        </div>
      </div>
    </>
  );
}
