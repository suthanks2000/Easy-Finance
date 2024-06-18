import React, { useState } from 'react';
import { Box, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
// import { setPersonalInfo } from '../../Redux-Toolkit/slices/PersonalDetailCounter';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPersonalDetail = () => {
    // const { personalInfo } = useSelector((state) => state.personalDetail);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    // const [personalInfo,setPersonalInfo] = useState({})

    const [errors, setErrors] = useState({});
    const [personalInfo, setPersonalInfo] = useState({
      first_name: '',
      last_name: '',
      father_name: '',
      age: '',
      gender: '',
      marital_status: '',
      district: '',
      city: '',
      pincode: '',
      contact: ''
    });
  
  



       const handleOnChange = (e) => {
        setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
      };
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        const uid = localStorage.getItem("loginUserId");
        const token = localStorage.getItem("Token");
      
        const requestData = new FormData();
        requestData.append('uid', uid);
        Object.keys(personalInfo).forEach(key => {
          requestData.append(key, personalInfo[key]);
        });
      
        const headers = { 'Authorization': `Bearer ${token}` };
      
        axios.post("https://disondys.pythonanywhere.com/userPersonalDetail", requestData, { headers })
          .then((res) => {
            console.log(res.data);
            if (res.data.notFill) {
              alert(res.data.notFill);
            } else if (res.data.alreadyFill) {
              alert(res.data.alreadyFill);
            } else if (res.data.message) {
              alert(res.data.message);
              navigate('/category');
            }
          })
          .catch((error) => {
            console.log(error);
            alert('An error occurred while submitting the form.');
          });
      };
      



    return (


<div className="col-lg-9 mt-lg-0 mt-4 mx-auto">
<div className="card card-body" id="profile">
  <div className="row justify-content-center align-items-center">
    <div className="col-sm-auto col-8 my-auto">
      <div className="h-100">
        <h1 className="mb-1 font-weight-bolder">
          Personal Detail
        </h1>
        {/* <p className="mb-0 font-weight-bold text-sm">
          Personal Detail
        </p> */}
      </div>
    </div>
  </div>
</div>
<div className="card mt-4" id="basic-info">
  <div className="card-header border-0 bg-white">
    <h5>Personal Details</h5>
  </div>
  <div className="card-body pt-0">
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">First Name</label>
          <input id="firstName" name="first_name" className="form-control" type="text" required placeholder="eg. Harish" onChange={handleOnChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Last Name</label>
          <input id="lastName" name="last_name" className="form-control" type="text" required placeholder="eg. Kumar" onChange={handleOnChange} />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Father Name</label>
          <input id="fatherName" name="father_name" className="form-control" type="text" placeholder="eg. Rajan" required onChange={handleOnChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Age</label>
          <input id="age" name="age" className="form-control" type="number" required placeholder="eg. 25" onChange={handleOnChange} />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Gender</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="male" value="male" onChange={handleOnChange} />
            <label className="form-check-label" htmlFor="male">Male</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="female" value="female" onChange={handleOnChange} />
            <label className="form-check-label" htmlFor="female">Female</label>
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">Marital Status</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="marital_status" id="married" value="married" onChange={handleOnChange} />
            <label className="form-check-label" htmlFor="married">Married</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="marital_status" id="unmarried" value="unmarried" onChange={handleOnChange} />
            <label className="form-check-label" htmlFor="unmarried">Unmarried</label>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-6">
          <label className="form-label">District</label>
          <select className="form-control" name="district" onChange={handleOnChange} required>
            <option value="">Select District</option>
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
          <input id="city" name="city" className="form-control" type="text" required onChange={handleOnChange} placeholder="eg. Nagercoil"/>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-6">
          <label className="form-label">Pincode</label>
          <input id="pincode" name="pincode" className="form-control" type="text" required onChange={handleOnChange} placeholder="eg. 6000 006"/>
        </div>
        <div className="col-6">
          <label className="form-label">Phone Number</label>
          <input id="contact" name="contact" className="form-control" type="text" required onChange={handleOnChange} placeholder="eg. 123456789"/>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button type="submit" className="btn btn-primary float-end">Save</button>
        </div>
      </div>
    </form>
  </div>
</div>
</div> 
    )}



export default RegisterPersonalDetail;