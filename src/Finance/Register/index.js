import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRegisterData, setuserdata, setIsLogin } from "../Redux-Toolkit/slices/RegLogCounter";
import { useNavigate, Link } from "react-router-dom";
import { Modal, Button, Form, Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import './index.css';
import InputDropdown from "./InputComponents/InputDropdown";
import InputRadio from "./InputComponents/InputRadio";
import InputText from "./InputComponents/InputText";
import axios from "axios";
import { TextField, Typography } from "@mui/material";


export default function Register() {
  const userdata = useSelector((state) => state.regisLogin.userdata);
  const regData = useSelector((state) => state.regisLogin.registerData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [personalDetailPopup, setPersonalDetailPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [ registerUserData,setRegisterUserData ] = useState({})

  const { personalInfo, inputInfo } = useSelector((state) => state.personalDetail);

  const personalDetailInput = inputInfo.map((ele) => {
    if (ele.inputType === "text" || ele.inputType === "number" ) {
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
          
              const response = await axios.post("https://disondys.pythonanywhere.com/userRegister", requestData);
              console.log(response.data);
              alert(response.data);
              
              dispatch(setIsLogin(true));
              setLoading(false);
              setPersonalDetailPopup(true);
              
              const uidGet = await axios.get(`https://PreethiJP.pythonanywhere.com/userRegister?useremail=${regData.Email}&userpassword=${regData.Password}`);

              setRegisterUserData(uidGet.data)

              localStorage.setItem("userId",JSON.stringify(uidGet.data.id))
              console.log(uidGet.data)
              alert(uidGet.data.id)
              

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
      <Container className="container-center">
        <Row className="row-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5} xxl={4} className="mx-auto">
            <h2 className="form-title">Register</h2>
          
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleCreate}>
        
              <div className="mt-5">
              <TextField className="input-box" id="outlined-basic" label="Name" variant="outlined" onKeyUp={(e) => dispatch(setRegisterData({ ...regData, Name: e.target.value }))}/>
              {fieldErrors.Name && <div className="text-danger">{fieldErrors.Name}</div>}
              </div>
      
               <div className="mt-4">
              <TextField className="input-box" id="outlined-basic" label="Email" variant="outlined" onKeyUp={(e) => dispatch(setRegisterData({ ...regData, Email: e.target.value }))}/>
              {fieldErrors.Email && <div className="text-danger">{fieldErrors.Email}</div>}
              </div>
             
              <div className="mt-4">
              <TextField className="input-box" id="outlined-basic" label="Password" variant="outlined" onKeyUp={(e) => dispatch(setRegisterData({ ...regData, Password: e.target.value }))}/>
              {fieldErrors.Password && <div className="text-danger">{fieldErrors.Password}</div>}
              </div>
              <Button className="btn-register" type="submit" disabled={loading}>
                {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Register"}
              </Button>
            </Form>
            <div className="text-center">
              Already have an account? <Link to="/">Login Here!</Link>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={personalDetailPopup} onHide={() => setPersonalDetailPopup(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Personal Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {personalDetailInput}
          {Object.keys(fieldErrors).map(key => (
            fieldErrors[key] && <div key={key} className="text-danger">{fieldErrors[key]}</div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-footer-btn" onClick={handlePersonalDetail}>Next</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
