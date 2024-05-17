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
import { useState } from "react";
import InputDropdown from "./InputComponents/InputDropdown";
import InputRadio from "./InputComponents/InputRadio";
import InputText from "./InputComponents/InputText";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";


import { db } from "../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Swal = require('sweetalert2')


export default function Register() {
  
  const  userdata  = useSelector((state) => state.regisLogin.userdata);
  const regData = useSelector((state) => state.regisLogin.registerData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ personalDetailPopup, setPersonalDetailPopup] = useState(false)
  const personalDetailInput = []
  const { personalInfo, inputInfo } = useSelector(
    (state) => state.personalDetail
  );


  
  inputInfo.forEach((ele)=> {

    if(ele.inputType == "text" || ele.inputType == "number" || ele.inputType == "email"){
      personalDetailInput.push(<InputText ele={ele}/>)
      
  }
    if(ele.inputType == "dropdown"){
      personalDetailInput.push(<InputDropdown ele={ele}/>)
     
      
    }
    if(ele.inputType == "radio"){
      personalDetailInput.push(<InputRadio ele={ele}/>)
     
    }
   
  })




  const handleCreate = async () => {

    await createUserWithEmailAndPassword(auth, regData.Email, regData.Password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("userToken",user.accessToken)
        dispatch(setuserdata(user));
        console.log(user);
        dispatch(setIsLogin(true));
        alert("User Added");
        setPersonalDetailPopup(true)
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Error");
      });
  };


  const handlePersonalDetail = async () => {
    const requiredFields = ['firstName', 'lastName', 'fatherName', 'Age', 'maritalStatus', 'Gender', 'Email', 'District', 'City', 'pinCode', 'Contact'];
     
    if (requiredFields.some(field => !personalInfo[field])) {
    
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: "Please Fill Empty Fields",
       
      });

      console.log(personalInfo)
     
    } else{
      await addDoc(collection(db, "personalDetails"), {
        ...personalInfo,
           uid: userdata.uid,
         });

      Swal.fire({
        title: "Good job!",
        text: "Successfully sumbitted Personal Details",
        icon: "success"
      });

       navigate("/category");
           
      console.log(personalInfo)
         
    }
  };

  function exitFromPersonalDetail(){
    setPersonalDetailPopup(false)
  }


   return (
    <>
    { !personalDetailPopup ? (
      <> 
      <h1>Welcome to Register Page</h1>

      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={(e) =>
            dispatch(setRegisterData({ ...regData, Name: e.target.value }))
          }
        />
      </div>
  
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) =>
            dispatch(setRegisterData({ ...regData, Email: e.target.value }))
          }
        />
      </div>
  
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          onChange={(e) =>
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
        Already have an account? <Link to={"/"}>Login Here!</Link>
      </div>
    </>) : null }
  
    
      <Modal show= { personalDetailPopup }>
        <center>
          <Modal.Header>
            <Modal.Title>Personal Details</Modal.Title>
            <Button className="btn-close" onClick={exitFromPersonalDetail}></Button>
          </Modal.Header>
          <Modal.Body>{personalDetailInput}</Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-info" onClick={handlePersonalDetail}>Next</Button>
            {/* <Button className="btn btn-info" onClick={handleSignout}>Sign Out</Button> */}
          </Modal.Footer>
        </center>
      </Modal>
      </>





    


   
  );
  
}

