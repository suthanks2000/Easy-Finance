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
import { collection, getDocs } from "firebase/firestore";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  setLoginData,
  setuserdata,
  setIsLogin,
} from "../Redux-Toolkit/slices/RegLogCounter";
import "./index.css"; // Import your custom styles if any
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Login() {
  const [adminData, setAdminData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const logData = useSelector((state) => state.regisLogin.loginData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchAdminData();
  //   dispatch(setLoginData({}));
  // }, []);

  const fetchAdminData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "AdminId"));
      const adData = [];
      querySnapshot.forEach((doc) => {
        adData.push(doc.data());
      });
      setAdminData(adData);
    } catch (error) {
      console.error("Error fetching admin data: ", error);
    }
  };

  const handleLogin = async (e) => {
    // e.preventDefault();
    setLoading(true);
    setError("");
    if (!logData.Email || !logData.Password) {
      setLoading(false);
      setError("Please fill in all fields");
    } 
    else {
    
      await axios.get(`https://PreethiJP.pythonanywhere.com/userRegister?useremail=${logData.Email}&userpassword=${logData.Password}`)
   .then((res) => { 
       console.log(res.data);
       if(res.data.message){
        alert(res.data.message)
        setLoading(false);
       }
       else{
        alert("your are the authenticate user")
        localStorage.setItem("loginUserId", JSON.stringify(res.data.id));
       setLoading(false);
       navigate("/category");
       }
       
   })
  }
    }

  return (

    <div className="2">
      <div>
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
                      to="/banker/register"
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
      <Container
        className="d-flex justify-content-center align-items-center bg-white"
        style={{ minHeight: "100vh" }}
      >
        <Row className="w-100">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="bg-white p-4">
              <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form>
                  <Form.Group className="mb-3 form-floating">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      required
                      onChange={(e) =>
                        dispatch(
                          setLoginData({ ...logData, Email: e.target.value })
                        )
                      }
                      isInvalid={!!error}
                    />
                    <Form.Label>Email</Form.Label>
                    <Form.Control.Feedback type="invalid">
                      {error && "Please provide a valid email."}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3 form-floating">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                      onChange={(e) =>
                        dispatch(
                          setLoginData({ ...logData, Password: e.target.value })
                        )
                      }
                      isInvalid={!!error}
                    />
                    <Form.Label>Password</Form.Label>
                    <Form.Control.Feedback type="invalid">
                      {error && "Please provide a valid password."}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button
                    className="w-100 mt-3 col-sm-8 col-md-6 col-lg-4"
                    type="submit"
                    disabled={loading}
                    onClick={() => {
                      handleLogin();
                    }}
                  >
                    {loading ? (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      "Login"
                    )}
                  </Button>
                </Form>
                <div className="w-100 text-center mt-2">
                  Don't have an account?{" "}
                  <Link to="/register">Register here!</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
