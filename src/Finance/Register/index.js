import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRegisterData, setuserdata, setIsLogin } from "../Redux-Toolkit/slices/RegLogCounter";
import { auth, db } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { Modal, Button, Form, Container, Row, Col, Alert, Card, Spinner } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

 import InputDropdown from "./InputComponents/InputDropdown";
 import InputRadio from "./InputComponents/InputRadio";
 import InputText from "./InputComponents/InputText";

export default function Register() {
  const userdata = useSelector((state) => state.regisLogin.userdata);
  const regData = useSelector((state) => state.regisLogin.registerData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [personalDetailPopup, setPersonalDetailPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, regData.Email, regData.Password);
      const user = userCredential.user;
      localStorage.setItem("userToken", user.accessToken);
      dispatch(setuserdata(user));
      dispatch(setIsLogin(true));
      setLoading(false);
      setPersonalDetailPopup(true);
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
      "Email",
      "District",
      "City",
      "pinCode",
      "Contact"
    ];

    if (requiredFields.some((field) => !personalInfo[field])) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: "Please Fill Empty Fields",
      });
    } else {
      await addDoc(collection(db, "personalDetails"), {
        ...personalInfo,
        uid: userdata.uid,
      });

      Swal.fire({
        title: "Good job!",
        text: "Successfully submitted Personal Details",
        icon: "success",
      });

      navigate("/category");
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center bg-light" style={{ minHeight: "100vh" }}>
        <Row className="w-100">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="bg-white p-4">
              <Card.Body>
                <h2 className="text-center mb-4">Register</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleCreate}>
                  <Form.Group className="mb-3 form-floating">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      required
                      onChange={(e) => dispatch(setRegisterData({ ...regData, Name: e.target.value }))}
                      isInvalid={!!error}
                    />
                    <Form.Label>Name</Form.Label>
                    <Form.Control.Feedback type="invalid">{error && "Please provide a valid name."}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3 form-floating">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      required
                      onChange={(e) => dispatch(setRegisterData({ ...regData, Email: e.target.value }))}
                      isInvalid={!!error}
                    />
                    <Form.Label>Email</Form.Label>
                    <Form.Control.Feedback type="invalid">{error && "Please provide a valid email."}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3 form-floating">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                      onChange={(e) => dispatch(setRegisterData({ ...regData, Password: e.target.value }))}
                      isInvalid={!!error}
                    />
                    <Form.Label>Password</Form.Label>
                    <Form.Control.Feedback type="invalid">{error && "Please provide a valid password."}</Form.Control.Feedback>
                  </Form.Group>
                  <Button className="w-100 mt-3" type="submit" disabled={loading}>
                    {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Register"}
                  </Button>
                </Form>
                <div className="w-100 text-center mt-3">
                  Already have an account? <Link to="/">Login Here!</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={personalDetailPopup}>
        <Modal.Header>
          <Modal.Title>Personal Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {personalDetailInput}
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-info" onClick={handlePersonalDetail}>Next</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
