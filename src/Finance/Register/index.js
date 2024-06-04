import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRegisterData, setuserdata, setIsLogin } from "../Redux-Toolkit/slices/RegLogCounter";
import { auth, db } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { Modal, Button, Form, Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import './index.css';
import InputDropdown from "./InputComponents/InputDropdown";
import InputRadio from "./InputComponents/InputRadio";
import InputText from "./InputComponents/InputText";
import axios from "axios";

export default function Register() {
  const userdata = useSelector((state) => state.regisLogin.userdata);
  const regData = useSelector((state) => state.regisLogin.registerData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [personalDetailPopup, setPersonalDetailPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const { personalInfo, inputInfo } = useSelector((state) => state.personalDetail);

  const personalDetailInput = inputInfo.map((ele) => {
    if (ele.inputType === "text" || ele.inputType === "number" || ele.inputType === "email") {
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

    let requestData=new FormData();
    requestData.append('username',regData.Name)
    requestData.append('useremail',regData.Email)
    requestData.append('userpassword',regData.Password)

    await axios.post("https://disondys.pythonanywhere.com/userRegister",requestData).then(
               (res) =>{
                   console.log(res.data)
                   alert(res.data)
               }
           )
  
    // try {
    //   const userCredential = await createUserWithEmailAndPassword(auth, regData.Email, regData.Password);
    //   const user = userCredential.user;
    //   localStorage.setItem("userToken", user.accessToken);
    //   dispatch(setuserdata(user));
    //   dispatch(setIsLogin(true));
    //   setLoading(false);
    //   setPersonalDetailPopup(true);
    // } catch (error) {
    //   setLoading(false);
    //   if (error.code === "auth/email-already-in-use") {
    //     setError("You are already a user. Please go and login.");
    //   } else {
    //     setError(error.message);
    //   }
    // }
  };

  const handlePersonalDetail = async () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "fatherName",
      "Age",
      "maritalStatus",
      "Gender",
      "Email",
      "District",
      "City",
      "pinCode",
      "Contact"
    ];

    const newFieldErrors = {};
    requiredFields.forEach(field => {
      if (!personalInfo[field]) {
        newFieldErrors[field] = "Please fill out this field.";
      }
    });

    if (Object.keys(newFieldErrors).length > 0) {
      setFieldErrors(newFieldErrors);
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: "Please fill out the highlighted fields.",
      });
      return;
    }

    // await addDoc(collection(db, "personalDetails"), {
    //   ...personalInfo,
    //   uid: userdata.uid,
    // });

    Swal.fire({
      title: "Good job!",
      text: "Successfully submitted Personal Details",
      icon: "success",
    });

    navigate("/category");
  };

  return (
    <>
      <Container className="container-center">
        <Row className="row-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5} xxl={4} className="mx-auto">
            <h2 className="form-title">Register</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleCreate}>
              <div className="col-lg-12 form-input">
              <label>Name:</label>
                <input
                  className="form-control p-lg-2"
                  type="text"
                  placeholder="Enter Your Name"
                  onKeyUp={(e) => dispatch(setRegisterData({ ...regData, Name: e.target.value }))}
                />
                {fieldErrors.Name && <div className="text-danger">{fieldErrors.Name}</div>}
              </div>
              <div className="col-lg-12 form-input">
              <label>Email:</label>
                <input
                  className="form-control p-lg-2"
                  type="email"
                  placeholder="Enter Your Email"
                  onKeyUp={(e) => dispatch(setRegisterData({ ...regData, Email: e.target.value }))}
                />
                {fieldErrors.Email && <div className="text-danger">{fieldErrors.Email}</div>}
              </div>
              <div className="col-lg-12 form-input">
              <label>Password:</label>
                <input
                  className="form-control p-lg-2"
                  type="password"
                  placeholder="Enter Your Password"
                  onKeyUp={(e) => dispatch(setRegisterData({ ...regData, Password: e.target.value }))}
                />
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
