import React, { useState } from "react";
import { TextField, Alert, Button } from "@mui/material";
import "./bankerReg.css";
import axios from "axios";

const BankerReg = () => {
 

  const[bankerRegData,setBankerRegData]=useState({})
  const[errors,setErrors]=useState({})

  const handleOnChange=(e)=>{
    setBankerRegData({...bankerRegData,[e.target.name]:e.target.value})
  }

  const validate=()=>{
    let tempErrors={}
    tempErrors.name=bankerRegData.name? "" : "This field is required";
    tempErrors.email=bankerRegData.email?"":"This field is required";
        tempErrors.company=bankerRegData.company?"":"This field is required";
            tempErrors.district=bankerRegData.district?"":"This field is required";
                tempErrors.city=bankerRegData.city?"":"This field is required";
                    tempErrors.pincode=bankerRegData.pincode?"":"This field is required";
                        tempErrors.contact=bankerRegData.contact?"":"This field is required";
                        tempErrors.password=bankerRegData.password?"":"This field is required";

                        setErrors(tempErrors)

                  return Object.values(tempErrors).every(x => x === "");
                     

  }

  const handleSubmit= async()=>{

if(validate()){

    const requestData=new FormData();
    requestData.append('bankername',bankerRegData.name)
    requestData.append('bankeremail',bankerRegData.email)
    requestData.append('bankercompany',bankerRegData.company)
    requestData.append('bankerdistrict',bankerRegData.district)
    requestData.append('bankercity',bankerRegData.city)
    requestData.append('bankerpincode',bankerRegData.pincode)
    requestData.append('bankercontact',bankerRegData.contact)
    requestData.append('bankerpassword',bankerRegData.password)

try{
   const response= await axios.post("https://PreethiJP.pythonanywhere.com/bankerRegister",requestData);
    console.log(response.data)
    alert(response.data)
    }
    catch(error){
      console.errror(error)
    }
}
  }



  return (
    <div className="container-mt-4">
      {JSON.stringify(bankerRegData)}

      <h4>Banker Register</h4>
      <div className="text-field-container">
        <TextField
          label="Name"
          id="outlined-size-small"
          size="small"
          name="name"
          onChange={handleOnChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />
      </div>
      <div className="text-field-container">
        <TextField
          name="company"
          label="Company/Bank Name"
          id="outlined-size-small"
          size="small"
          onChange={handleOnChange}
          error={Boolean(errors.company)}
          helperText={errors.company}
        />
      </div>
      <div className="text-field-container">
        <TextField
          label="Email Address"
          id="outlined-size-small"
          size="small"
          name="email"
          onChange={handleOnChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
      </div>

      <div className="text-field-container">
        <TextField
          label="password"
          id="outlined-size-small"
          size="small"
          name="password"
          onChange={handleOnChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />
      </div>

      <div className="text-field-container">
        {/* <TextField
          label="District"
          id="outlined-size-small"
          size="small"
          name="district"
          onChange={handleOnChange}
          error={Boolean(errors.district)}
          helperText={errors.district}
        /> */}<label>District</label>
                <select name="district" onChange={handleOnChange}>
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
      <div className="text-field-container">
        <TextField
          label="City"
          id="outlined-size-small"
          size="small"
          name="city"
          onChange={handleOnChange}
          error={Boolean(errors.city)}
          helperText={errors.city}
        />
      </div>
      <div className="text-field-container">
        <TextField
          label="Pincode"
          id="outlined-size-small"
          size="small"
          name="pincode"
          onChange={handleOnChange}
          error={Boolean(errors.pincode)}
          helperText={errors.pincode}
        />
      </div>
      <div className="text-field-container">
        <TextField
          label="Contact"
          id="outlined-size-small"
          size="small"
          name="contact"
          onChange={handleOnChange}
          error={Boolean(errors.contact)}
          helperText={errors.contact}
        />
      </div>
      <Button varient="contained" colour="sucess" onClick={handleSubmit}>
        Register
      </Button>
    </div>
  );
};

export default BankerReg;
