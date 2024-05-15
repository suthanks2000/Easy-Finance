import { db } from "../FirebaseConfig";
import { collection,getDocs } from "firebase/firestore";
import { auth } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoginData,
  setuserdata,
  setIsLogin,
} from "../Redux-Toolkit/slices/RegLogCounter";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Login() {
  const[getRegister,setGetRegister]=useState([])
  const logData = useSelector((state) => state.regisLogin.loginData);
  const dispatch = useDispatch(); 
  const Navigate = useNavigate();
 console.log(logData)
  const handleLogin = () => {

  
    if(checkEmail && logData.Email!=="" && logData.Password!==""){
              Navigate("/userdetails")

 }else{
      signInWithEmailAndPassword(auth, logData.Email, logData.Password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("userToken", user.accessToken);
        dispatch(setuserdata(user));
        dispatch(setIsLogin(true));
        console.log(user); 
        alert("login success");
        Navigate("/category");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Please Enter the correct details");
      });
      
    }
 
   
  };

  return (
    <>
      <h1>Welcome to Login Pages</h1>

      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          onKeyUp={(e) =>
            dispatch(setLoginData({ ...logData, Email: e.target.value }))
          }
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          onKeyUp={(e) =>
            dispatch(setLoginData({ ...logData, Password: e.target.value }))
          }
        />
      </div>
      <div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </div>

      <div>
        Dont have an account?<Link to={"/register"}>RegisterHere!</Link>
      </div>
    </>
  );
}
