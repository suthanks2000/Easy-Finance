// import Spinner from 'react-bootstrap/Spinner';

import { Form, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { setBankLogin } from "../Redux-Toolkit/slices/BankerReg&LogCounter";
import { Button, TextField } from "@mui/material";
import axios from "axios";

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
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

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

  const data = useRef();
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



  const handleBankerLogin = async (ele) => {
    ele.preventDefault();
    let valid = true;

    if (!bankLogin.Email) {
        setEmailError("Email is required");
        valid = false;
    }

    if (!bankLogin.Password) {
        setPasswordError("Password is required");
        valid = false;
    }

    if (valid) {
        const data = new FormData();

        data.append("bankeremail", bankLogin.Email)
        data.append("bankerpassword", bankLogin.Password)

        await axios.post("https://PreethiJP.pythonanywhere.com/allowBankerLogin", data)
            .then((res) => {
                if (res.data.notfound) {
                    alert("Banker not found")
                } else if (res.data.notverify) {
                    alert("Your account is not verified")
                } else {
                    alert("Verified successfully. Logging in...")
                    console.log(res.data) 
                    console.log(res.data.token)
                    localStorage.setItem("bankerToken",res.data.token)
                    localStorage.setItem("bankerId",res.data.uid)
                    Navigate('/banker/home')
                }
            })
            .catch((error) => {
                console.error("Error during login:", error)
                alert(error)
            })
    }
}

  
  return (
    <>
      {/* {
    spinner? */}
      <>
        <h1>Welcome to Login Pages</h1>

        <form handleBankerLogin>
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
