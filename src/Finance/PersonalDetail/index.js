import { db } from "../FirebaseConfig";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function PersonalDetail() {
  const userdata = useSelector((state) => state.regisLogin.userdata);
  const dispatch = useDispatch();
  const [usersData, setUsersData] = useState({});
  const [editData, setEditData] = useState(false);
  const [filterData, setFilterData] = useState({});
  const [spinner, setSpinner] = useState(true);
  const [editPersonalData, setEditPersonalData] = useState({});
  const [successEdit,setSuccessEdit]=useState(false)
  const Navigate = useNavigate()

  const uid = localStorage.getItem("loginUserId");

  const token = localStorage.getItem("Token");
  console.log(token);


useEffect(() => {
  getUserPersonalData();
  
}, []);


const getUserPersonalData = () => {
  const headers = { 'Authorization': `Bearer ${token}` };

  axios.get(`https://PreethiJP.pythonanywhere.com/personalDetail/${uid}`, { headers })
    .then(response => {
      setUsersData(response.data);
      alert("Success");
      console.log(response.data, 'usersData');
      alert("Success");
    })
    .catch(error => {
      alert("Error");
      console.error('Error fetching personal data:', error);
    });
};

const handleOnkeyup = (ele)=>{
  if(ele.target.value == "Select District"){
    alert("Please select others")
  }
  else{setUsersData({...usersData,[ele.target.name]:ele.target.value})
  console.log("usersdata",usersData)
}
        
       
 }      

 

  function handleExit() {
    Navigate("/category")

  }



  const handleUpdateDetail = () => {
    const headers = { Authorization: `Bearer ${token}` };
    let formData = new FormData();

  
    formData.append("first_name", usersData.first_name);
    formData.append("last_name", usersData.last_name);
    formData.append("father_name", usersData.father_name);
    formData.append("age", usersData.age);
    formData.append("gender", usersData.gender);
    formData.append("marital_status", usersData.marital_status);
    formData.append("district", usersData.district);
    formData.append("city", usersData.city);
    formData.append("pincode", usersData.pincode);
    formData.append("contact", usersData.contact);


    axios
      .put(
        `https://disondys.pythonanywhere.com/editPersonalData/${uid}`,
        formData,
        { headers }
      )
      .then(() => {
        console.log("Personal details updated successfully");
        console.log("personaldetail",usersData)
        setSuccessEdit(true)
        getUserPersonalData();
      })
      .catch((error) => {
        console.error("Error updating personal details:", error);
      });
  };



  return (
    <>
    { !successEdit?
    <>
    <div className="col-lg-9 mt-lg-0 mt-4 mx-auto">
      
      <div className="card card-body" id="profile">
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-auto col-4">
            {/* <div className="avatar avatar-xl position-relative">
              <img src="../../../assets/img/team-3.jpg" alt="bruce" className="w-100 border-radius-lg shadow-sm"/>
            </div> */}
          </div>
          <div className="col-sm-auto col-8 my-auto">
            <div className="h-100">
              <h5 className="mb-1 font-weight-bolder">
               {usersData.first_name} {usersData.last_name}
              </h5>b
              <p className="mb-0 font-weight-bold text-sm">
                { usersData.contact }
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="card mt-4" id="basic-info">
        <div className="card-header border-0">
          <h5>Personal Details</h5>
        </div>
        <div className="card-body pt-0">
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input id="firstName" name="first_name" className="form-control" type="text" required defaultValue={usersData.first_name} onChange={(e)=> handleOnkeyup(e)}/>
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input id="lastName" name="last_name" className="form-control" type="text" required defaultValue={usersData.last_name} onChange={(e)=> handleOnkeyup(e)}/>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Father Name</label>
              <input id="firstName" name="father_name" className="form-control" type="text" required defaultValue={usersData.father_name} onChange={(e)=> handleOnkeyup(e)}/>
            </div>
            <div className="col-md-6">
              <label className="form-label">Age</label>
              <input id="lastName" name="age" className="form-control" type="text" required defaultValue={usersData.age} onChange={(e)=> handleOnkeyup(e)}/>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Gender</label>
              <select className="form-control" name="gender" id="choices-gender" value={usersData.gender} onChange={(e)=> handleOnkeyup(e)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Marital Status</label>
              <select className="form-control" name="marital_status" id="choices-gender" value={usersData.marital_status} onChange={(e)=> handleOnkeyup(e)}>
                <option value="married">Married</option>
                <option value="unmarried">Unmarried</option>
              </select>
            </div>
            
          </div>
          <div className="row mb-3">
            <div className="col-6">
            <label className="form-label">District</label>
              <select className="form-control" name="district" id="choices-gender" value={usersData.district} onChange={(e)=> handleOnkeyup(e)}>
                  <option>Select District</option>
                  <option>Ariyalur</option>
                  <option>Chengalpattu</option>
                  <option>Chennai</option>
                  <option>Coimbatore</option>
                  <option>Cuddalore</option>
                  <option>Dharmapuri</option>
                  <option>Dindigul</option>
                  <option>Erode</option>
                  <option>Kallakurichi</option>
                  <option>Kanchipuram</option>
                  <option>Kanyakumari</option>
                  <option>Karur</option>
                  <option>Krishnagiri</option>
                  <option>Madurai</option>
                  <option>Nagapattinam</option>
                  <option>Namakkal</option>
                  <option>Nilgiris</option>
                  <option>Perambalur</option>
                  <option>Pudukkottai</option>
                  <option>Ramanathapuram</option>
                  <option>Ranipet</option>
                  <option>Salem</option>
                  <option>Sivaganga</option>
                  <option>Tenkasi</option>
                  <option>Thanjavur</option>
                  <option>Theni</option>
                  <option>Thoothukudi</option>
                  <option>Tiruchirappalli</option>
                  <option>Tirunelveli</option>
                  <option>Tirupathur</option>
                  <option>Tiruppur</option>
                  <option>Tiruvallur</option>
                  <option>Tiruvannamalai</option>
                  <option>Tiruvarur</option>
                  <option>Vellore</option>
                  <option>Viluppuram</option>
                  <option>Virudhunagar</option>
              </select>
            </div>
            <div className="col-6">
              <label className="form-label">City</label>
              <input id="confirmation" name="city" className="form-control" type="email" defaultValue={usersData.city} onChange={(e)=> handleOnkeyup(e)}/>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <label className="form-label">Pincode</label>
              <input id="location" name="pincode" className="form-control" type="text" defaultValue={usersData.pincode} onChange={(e)=> handleOnkeyup(e)}/>
            </div>
            <div className="col-6">
              <label className="form-label">Phone Number</label>
              <input id="phone" name="contact" className="form-control" type="number" defaultValue={usersData.contact} onChange={(e)=> handleOnkeyup(e)}/>
            </div>
          </div>
          <div className="row">
        <div className="col-10">
          <button type="button" className="btn btn-primary float-end" onClick={handleUpdateDetail}>Save Changes</button>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-warning float-end" onClick={handleExit}>Cancel</button>
        </div>
      </div>
          
        </div>
      </div>
    </div>
  </>
  :
  <>
  
  <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="holder.js/100px180" />
      </Card>
  </>
  }
  </>
)

}


  
