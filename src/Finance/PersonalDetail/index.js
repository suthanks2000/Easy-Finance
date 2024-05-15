import { useSelector, useDispatch } from "react-redux";
import { setPersonalInfo, setInputInfo } from "../Redux-Toolkit/slices/PersonalDetailCounter";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useEffect, useState } from "react";
import InputDropdown from "../Register/InputComponents/InputDropdown";
import InputRadio from "../Register/InputComponents/InputRadio";
import InputText from "../Register/InputComponents/InputText";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";


const Swal = require('sweetalert2')


export default function PersonalDetail() {


  const [personalDetailPopup , setPersonalDetailPopup] = useState(false)
  const  userdata  = useSelector((state) => state.regisLogin.userdata);
  const { personalInfo, inputInfo } = useSelector(
    (state) => state.personalDetail
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

const personalDetailInput = []

inputInfo.forEach((ele,i)=> {

  if(ele.inputType == "text" || ele.inputType == "number" || ele.inputType == "email"){
    personalDetailInput.push(<InputText ele={ele}/>)
        // personalDetailInput.push(<div key={i}>
        //   <label>{ele.inputLabel}</label>
        //   <input type={ele.inputType} name={ele.inputName} placeholder={ele.inputPlaceholder} onChange={(e)=>dispatch(setPersonalInfo({...personalInfo,[e.target.name]:e.target.value}))}/>
        // </div>)
  // }
  // if(ele.inputType == "email") {
  //   personalDetailInput.push(<InputText ele={ele}/>)
    // personalDetailInput.push(<div key={i}>
    //   <label>{ele.inputLabel}</label>
    //   <input type={ele.inputType} name={ele.inputName} placeholder={ele.inputPlaceholder} onChange={(e)=>dispatch(setPersonalInfo({...personalInfo,[e.target.name]:e.target.value}))}/>
    // </div>)
}
  if(ele.inputType == "dropdown"){
    personalDetailInput.push(<InputDropdown ele={ele}/>)
    // personalDetailInput.push(<div>
    //   <label>{ele.inputLabel}</label>
    //   <select name={ele.inputName} onChange={(e)=>dispatch(setPersonalInfo({...personalInfo,[e.target.name]:e.target.value}))}>
    //     {ele.dropValue.map((e)=><option>{e}</option>)}
    //     </select>
       
    // </div>
    
  }
  if(ele.inputType == "radio"){
    personalDetailInput.push(<InputRadio ele={ele}/>)
    // personalDetailInput.push(<div>
    // personalDetailInput.push(<div key={i} style={{display:"inline-block"}}>
    //   <label>{ele.inputLabel}</label>
    //   {<input type={ele.inputType} name={ele.inputName} value={ele.inputValue} onChange={(e)=>dispatch(setPersonalInfo({...personalInfo,[e.target.name]:e.target.value}))}/>}
    //   <label>{ele.inputValue}</label>
    // </div>)
  }
 
})



useEffect(()=>{
      dispatch(setPersonalInfo({}))
},[])


useEffect(()=>{
  setPersonalDetailPopup(true)
},[])


  const handlePersonalDetail = async () => {
    const requiredFields = ['firstName', 'lastName', 'fatherName', 'age', 'maritalStatus', 'gender', 'email', 'district', 'city', 'pincode', 'contact'];
     
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

  const handleSignout = async () =>{
    await localStorage.getItem("userToken")
    localStorage.removeItem("userToken")
     navigate("/login")
   }
  
  return (

    <>
      {/* <nav className="navbar sticky-top navbar-expand-lg  navbar-dark bg-dark">
  <Link className="navbar-brand fs-3" href="#">Easy Finance</Link>
  <button className="navbar-toggler shadow-none border-0" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="myNavbar">
    <ul className="navbar-nav justify-content-evenly flex-grow-1 pe-1">
    <li className="nav-item">
        <Link className="nav-link active " to={'/personaldetail'}>Personal Detail</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/category'}>category</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">EMI Calulator</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/personaldatas'}>Your Datas</Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Loan List
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link class="dropdown-item disabled">Personal Loan</Link>
          <Link class="dropdown-item disabled">Home  Loan</Link>
          <Link class="dropdown-item disabled">Vehicle Loan</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Help</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Enquiries</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">About</Link>
      </li>
      <li>
      <form className="d-flex">
    <input type="text" className="form-control me-2" placeholder="Search"/>
    <button type="button" className="btn btn-primary rounded-pill">Search</button>
  </form>
      </li>
    </ul>
  </div>
  
</nav> */}

{JSON.stringify(personalInfo)}

{ personalDetailPopup ? 

<Modal>
          <center>
            <Modal.Header>
              <Modal.Title>
               
              </Modal.Title>
              <Button className="btn-close" ></Button>
            </Modal.Header>
            <Modal.Body>

  {personalDetailInput}

              
          
           
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-info" onClick={handlePersonalDetail}>Next</Button>
              <Button className="btn btn-info" onClick={handleSignout}>Sign Out</Button>
            </Modal.Footer>
           
         
            </center>
            </Modal>
            :
            null
}
  {/* <h1>Basic Information</h1>
    {personalDetailInput}
      <div>
        <button type="button" onClick={handlePersonalDetail}>
          Next
        </button>

        <button type="button" onClick={handleSignout}>
         Sign Out
        </button>
      </div> */}


    </>
  );
}
