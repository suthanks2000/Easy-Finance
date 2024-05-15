import { useSelector, useDispatch } from "react-redux";
import {
  setRegisterData,
  setuserdata,
  setIsLogin,
} from "../Redux-Toolkit/slices/RegLogCounter";
import { auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { db } from "../FirebaseConfig";
import { collection,addDoc } from "firebase/firestore";



export default function Register() {
  const regData = useSelector((state) => state.regisLogin.registerData);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  
  const registerFb=async()=>{
    await addDoc(collection(db,"RegisterData"),{  
        Email:regData.Email,
        Password:regData.Password,
        Name:regData.Name,
        SecretKey:regData.SecretKey,
        UserType:regData.UserType
      
    })
  }

  const handleCreate = async () => {
    if(regData.UserType=="Admin" && regData.SecretKey=="Agaram" && regData.UserType=="User"
     && regData.Email!== ""&&
      regData.Password!== ""&&
      regData.Name!==""
    ){  
      registerFb()
      // Navigate("/userdetails")  
      
    }else if(regData.UserType=="Admin" && regData.SecretKey!=="Agaram"){
            alert("please fill the correct details")
    }   
    else{
    await createUserWithEmailAndPassword(auth, regData.Email, regData.Password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("userToken",user.accessToken)
        dispatch(setuserdata(user));
        console.log(user);
        dispatch(setIsLogin(true));
        alert("User Added");
        Navigate("/personalDetail");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Please Enter the correct details");
      })}
  };

  return (
    <>
      <h1>Welcome to Register Page</h1>
      <div>
        Register As
        <input type="radio" name="UserType" value="User" onChange={(e)=>dispatch(setRegisterData({...regData,UserType:e.target.value}))}/>User
        <input type="radio" name="UserType" value="Admin" onChange={(e)=>dispatch(setRegisterData({...regData,UserType:e.target.value}))}/>Admin

      </div>

      {regData.UserType=="Admin"?(
      <div>
        <label>Secret Key</label>
        <input
          type="text"
          placeholder="Enter your SecretKey"
          onKeyUp={(e) =>
            dispatch(setRegisterData({ ...regData, SecretKey: e.target.value }))
          }
        />
      </div>):null}

      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          onKeyUp={(e) =>
            dispatch(setRegisterData({ ...regData, Name: e.target.value }))
          }
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          onKeyUp={(e) =>
            dispatch(setRegisterData({ ...regData, Email: e.target.value }))
          }
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          onKeyUp={(e) =>
            dispatch(setRegisterData({ ...regData, Password: e.target.value }))
          }
        />
      </div>

      <div>
        <button type="button" onClick={handleCreate}>
          Register
        </button>
      </div>

      <div>
        Already have an account?<Link to={"/login"}>LoginHere!</Link>
      </div>
    </>
  );
}
