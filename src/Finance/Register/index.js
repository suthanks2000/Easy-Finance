import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setRegisterData,
  setuserdata,
  setIsLogin,
} from "../Redux-Toolkit/slices/RegLogCounter";
import { useNavigate, Link } from "react-router-dom";
import {
  Modal,
  Button,
  Form,
  Container,
  Row,
  Col,
  Alert,
  Spinner,
} from "react-bootstrap";
import Swal from "sweetalert2";
import "./index.css";
import InputDropdown from "./InputComponents/InputDropdown";
import InputRadio from "./InputComponents/InputRadio";
import InputText from "./InputComponents/InputText";
import axios from "axios";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography, VisibilityOff, Visibility } from "@mui/material";
import userImg from './userImg.png'
import emailImg from './email.png'
import passwordImg from './password.png'

export default function Register() {
  const userdata = useSelector((state) => state.regisLogin.userdata);
  const regData = useSelector((state) => state.regisLogin.registerData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [personalDetailPopup, setPersonalDetailPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [registerUserData, setRegisterUserData] = useState({});


  const { personalInfo, inputInfo } = useSelector((state) => state.personalDetail);




  const personalDetailInput = inputInfo.map((ele) => {
    if (ele.inputType === "text" || ele.inputType === "number") {
      return <InputText key={ele.id} ele={ele} />;
    }
    if (ele.inputType === "dropdown") {
      return <InputDropdown key={ele.id} ele={ele} />;
    }
    if (ele.inputType === "radio") {
      return <InputRadio key={ele.id} ele={ele} />;
    }
    return null;
  });

  const handleCreate = async (e) => {
    e.preventDefault();
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
  
    try {
      const requestData = new FormData();
      requestData.append('username', regData.Name);
      requestData.append('useremail', regData.Email);
      requestData.append('userpassword', regData.Password);
  
      const response = await axios.post("https://PreethiJP.pythonanywhere.com/userRegister", requestData);
      console.log(response.data);
      alert(response.data);

      dispatch(setIsLogin(true));
      setLoading(false);
      setPersonalDetailPopup(true);

      const uidGet = await axios.get(`https://PreethiJP.pythonanywhere.com/userPersonalDetail?useremail=${regData.Email}`);
      localStorage.setItem("loginUserId",JSON.stringify(uidGet.data.id));
      setPersonalDetailPopup(true);
      alert(uidGet.data.id);

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handlePersonalDetail = async () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "fatherName",
      "Age",
      "maritalStatus",
      "Gender",
      "District",
      "City",
      "pinCode",
      "Contact"
    ];
  
    const missingFields = requiredFields.filter(field => !personalInfo[field]);
    if (missingFields.length > 0) {
      const errorMessage = `Please fill out the following fields: ${missingFields.join(", ")}`;

      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: errorMessage,
      });
      return;
    }

    
    const personalData = new FormData();
    personalData.append('userid', registerUserData.id);
    personalData.append('first_name', personalInfo.firstName);
    personalData.append('last_name', personalInfo.lastName);
    personalData.append('father_name', personalInfo.fatherName);
    personalData.append('age', personalInfo.Age);
    personalData.append('gender', personalInfo.Gender);
    personalData.append('marital_status', personalInfo.maritalStatus);
    personalData.append('district', personalInfo.District);
    personalData.append('city', personalInfo.City);
    personalData.append('pincode', personalInfo.pinCode);
    personalData.append('contact', personalInfo.Contact);
    
    try {
      const response = await axios.post("https://PreethiJP.pythonanywhere.com/userPersonalDetail", personalData);
      console.log(response.data);
      alert(response.data);
      
      Swal.fire({
        title: "Success",
        text: "Personal details submitted successfully",
        icon: "success",
      });
      navigate("/category");
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: "Error",
        text: "An error occurred. Please try again later.",
        icon: "error",
      });
    }
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

      <Modal
        show={personalDetailPopup}
        onHide={() => setPersonalDetailPopup(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Personal Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {personalDetailInput}
          {Object.keys(fieldErrors).map(key => (
            fieldErrors[key] && <div key={key} className="error">{fieldErrors[key]}</div>
          ))}

        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-footer-btn" onClick={handlePersonalDetail}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
