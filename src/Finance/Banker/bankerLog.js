import { db } from "../FirebaseConfig";
import Spinner from 'react-bootstrap/Spinner';
import { collection,getDocs } from "firebase/firestore";
import { auth } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { setBankLogin } from "../Redux-Toolkit/slices/BankerReg&LogCounter";


export default function BankerLog() {
//   const[adminData,setAdminData]=useState([])
  const[spinner,setSpinner]=useState(false)

  const {bankLogin,bankRegister} = useSelector((state) => state.bankerRegLog);
  const dispatch = useDispatch(); 
  const Navigate = useNavigate();
  // console.log(adminData)

  useEffect(()=>{

    // adminFbData()
    dispatch(setBankLogin({}))
    // setSpinner(false)
  },[])

const handleOnChange = (ele) => {
    dispatch(setBankLogin({ ...bankLogin, [ele.target.name]: ele.target.value }))
}

const handleBankerLogin = () => {
    alert(1)
}

  return (
    <>
    {/* {
    spinner? */}
     <>   
      <p>{JSON.stringify(bankLogin)}</p>
      <h1>Welcome to Login Pages</h1>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="Email"
          placeholder="Enter Your Email"
          onKeyUp={(e) =>handleOnChange(e)}
          required
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="Password"
          placeholder="Enter Your Password"
          onKeyUp={(e) =>handleOnChange(e)}
          required
        />
      </div>
      <div>
        <button type="button" onClick={handleBankerLogin}>
          Login
        </button>
      </div>
      </>
        {/* :
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
        } */}

    </>
  );
}
