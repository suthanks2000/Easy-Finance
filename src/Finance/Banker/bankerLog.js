// import Spinner from 'react-bootstrap/Spinner';

import { Form, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { setBankLogin } from "../Redux-Toolkit/slices/BankerReg&LogCounter";
import { Button, TextField } from "@mui/material";

export default function BankerLog() {
  //   const[adminData,setAdminData]=useState([])
  const [spinner, setSpinner] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { bankLogin, bankRegister } = useSelector(
    (state) => state.bankerRegLog
  );
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  // console.log(adminData)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

  const validateEmail = (email) => {
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return passwordRegex.test(password);
  };

  useEffect(() => {
    // adminFbData()
    dispatch(setBankLogin({}));
    // setSpinner(false)
  }, []);

  const data=useRef();
  const handleOnChange = (ele) => {
    dispatch(
      setBankLogin({ ...bankLogin, [ele.target.name]: ele.target.value })
    );
    if (ele.target.name === "Email") {
      setEmailError("");
    } else if (ele.target.name === "Password") {
      setPasswordError("");
    }
  };

  const handleBankerLogin = (ele) => {
    ele.preventDefault();
    let valid = true;
    // console.log("ref",data.current.value)
    if (!bankLogin.Email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!validateEmail(bankLogin.Email)) {
      setEmailError("Invalid email format");
      valid = false;
    }

    if (!bankLogin.Password) {
      setPasswordError("password is required");
      valid = false;
    } else if (!validatePassword(bankLogin.Password)) {
      setPasswordError(
        "Password at least 6 characters"
      );
      valid = false;
    }

    if (valid) {
      alert("Form is valid");
    }
  };

  return (
    <>
      {/* {
    spinner? */}
      <>
        <p>{JSON.stringify(bankLogin)}</p>
        <h1>Welcome to Login Pages</h1>

        <form  handleBankerLogin >
          <div>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="Email"
              // value={emiData.tenureMonth}
              onChange={handleOnChange}
              error={Boolean(emailError)}
              helperText={emailError}
            />
          </div>

          <div>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="Password"
              onChange={handleOnChange}
              error={Boolean(passwordError)}
              helperText={passwordError}
            />
          </div>

          <div>
            <Button
              variant="contained"
              color="success"
              onClick={handleBankerLogin}
            >
              lOGIN
            </Button>
          </div>
        </form>
      </>
      {/* :
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
        } */}
    </>
  );
}
