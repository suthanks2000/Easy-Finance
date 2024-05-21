
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
// import { Form, Button, Card, Container, Row, Col, Alert, Spinner } from "react-bootstrap";
// import { collection, getDocs } from "firebase/firestore";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { db, auth } from "../FirebaseConfig";
// import { setLoginData, setuserdata, setIsLogin } from "../Redux-Toolkit/slices/RegLogCounter";
// import "./index.css"; // Import your custom styles

// export default function Login() {
//   const [adminData, setAdminData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const logData = useSelector((state) => state.regisLogin.loginData);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchAdminData();
//     dispatch(setLoginData({}));
//   }, []);

//   const fetchAdminData = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "AdminId"));
//       const adData = [];
//       querySnapshot.forEach((doc) => {
//         adData.push(doc.data());
//       });
//       setAdminData(adData);
//     } catch (error) {
//       console.error("Error fetching admin data: ", error);
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     const checkAdminData = adminData.find(
//       (e) => e.Email === logData.Email && e.Password === logData.Password
//     );

//     if (checkAdminData) {
//       setLoading(false);
//       navigate("/admin");
//       alert("Login success");
//     } else if (!logData.Email || !logData.Password) {
//       setLoading(false);
//       setError("Please fill in all fields");
//     } else {
//       try {
//         const userCredential = await signInWithEmailAndPassword(auth, logData.Email, logData.Password);
//         const user = userCredential.user;
//         localStorage.setItem("userToken", user.accessToken);
//         dispatch(setuserdata(user));
//         dispatch(setIsLogin(true));
//         setLoading(false);
//         alert("Login success");
//         navigate("/category");
//       } catch (error) {
//         setLoading(false);
//         console.error("Error during login: ", error.code, error.message);
//         setError("Invalid login credentials");
//       }
//     }
//   };

//   return (
//     <Container className="login-container">
//       <Row className="w-100">
//         <Col md={{ span: 6, offset: 3 }}>
//           <Card className="login-card">
//             <Card.Body>
//               <h2 className="text-center mb-4">Login</h2>
//               {error && <Alert variant="danger">{error}</Alert>}
//               <Form onSubmit={handleLogin}>
//                 <Form.Group id="email" className="mb-3">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     required
//                     onChange={(e) => dispatch(setLoginData({ ...logData, Email: e.target.value }))}
//                     isInvalid={!!error}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {error && "Please provide a valid email."}
//                   </Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group id="password" className="mb-3">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     required
//                     onChange={(e) => dispatch(setLoginData({ ...logData, Password: e.target.value }))}
//                     isInvalid={!!error}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {error && "Please provide a valid password."}
//                   </Form.Control.Feedback>
//                 </Form.Group>
//                 <Button className="w-100 mt-3" type="submit" disabled={loading}>
//                   {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Login"}
//                 </Button>
//               </Form>
//               <div className="w-100 text-center mt-3">
//                 <Link to="/forgot-password">Forgot Password?</Link>
//               </div>
//               <div className="w-100 text-center mt-2">
//                 Don't have an account? <Link to="/register">Register here!</Link>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }




import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Card, Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../FirebaseConfig";
import { setLoginData, setuserdata, setIsLogin } from "../Redux-Toolkit/slices/RegLogCounter";
import "./index.css"; // Import your custom styles if any

export default function Login() {
  const [adminData, setAdminData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const logData = useSelector((state) => state.regisLogin.loginData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAdminData();
    dispatch(setLoginData({}));
  }, []);

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
    e.preventDefault();
    setLoading(true);
    setError("");

    const checkAdminData = adminData.find(
      (e) => e.Email === logData.Email && e.Password === logData.Password
    );

    if (checkAdminData) {
      setLoading(false);
      navigate("/admin");
      alert("Login success");
    } else if (!logData.Email || !logData.Password) {
      setLoading(false);
      setError("Please fill in all fields");
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, logData.Email, logData.Password);
        const user = userCredential.user;
        localStorage.setItem("userToken", user.accessToken);
        dispatch(setuserdata(user));
        dispatch(setIsLogin(true));
        setLoading(false);
        alert("Login success");
        navigate("/category");
      } catch (error) {
        setLoading(false);
        console.error("Error during login: ", error.code, error.message);
        setError("Invalid login credentials");
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center bg-light" style={{ minHeight: "100vh" }}>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="bg-white p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3 form-floating">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => dispatch(setLoginData({ ...logData, Email: e.target.value }))}
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
                    onChange={(e) => dispatch(setLoginData({ ...logData, Password: e.target.value }))}
                    isInvalid={!!error}
                  />
                  <Form.Label>Password</Form.Label>
                  <Form.Control.Feedback type="invalid">
                    {error && "Please provide a valid password."}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button className="w-100 mt-3" type="submit" disabled={loading}>
                  {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Login"}
                </Button>
              </Form>
              <div className="w-100 text-center mt-2">
                Don't have an account? <Link to="/register">Register here!</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
