import { db } from "../FirebaseConfig";
import Spinner from 'react-bootstrap/Spinner';
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
  const[adminData,setAdminData]=useState([])
  const[spinner,setSpinner]=useState(false)

  const logData = useSelector((state) => state.regisLogin.loginData);
  const dispatch = useDispatch(); 
  const Navigate = useNavigate();
  // console.log(adminData)

  useEffect(()=>{

    adminFbData()
    dispatch(setLoginData({}))
  },[])




   const adminFbData=async()=>{
    const querySnapShot=await getDocs(collection(db,"AdminId"))
    const adData=[]
    querySnapShot.forEach((e)=>{
      adData.push(e.data())

    })
    setAdminData(adData)
    setSpinner(true)
   }
   console.log(adminData)
   const checkAdminData=adminData.filter((e)=>e.Email==logData.Email && e.Password==logData.Password)[0]

   console.log(checkAdminData)

   


  const handleLogin = () => {

    if(checkAdminData){
        Navigate("/admin")
        alert("login sucess")
              
    }

   else if(logData.Email==="" || logData.Password===""){
      alert("please fill input fields")
      
      
  }
    
    else{  
    

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
    {
    spinner?
     <>   
      <p>{JSON.stringify(logData)}</p>
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
      : <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    }

    </>
  );
}
