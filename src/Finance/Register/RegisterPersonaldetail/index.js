import React, { useState } from 'react';
import { Box, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setPersonalInfo } from '../../Redux-Toolkit/slices/PersonalDetailCounter';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPersonalDetail = () => {
    const { personalInfo } = useSelector((state) => state.personalDetail);
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const [errors, setErrors] = useState({});
  

    const validate = () => {
        const newErrors = {};

        if (!personalInfo.firstName) {
            newErrors.firstName = "First name is required";
        }

        if (!personalInfo.lastName) {
            newErrors.lastName = "Last name is required";
        }

        if (!personalInfo.fatherName) {
            newErrors.fatherName = "Father's name is required";
        }

        if (!personalInfo.Age) {
            newErrors.Age = "Age is required";

        } else if (isNaN(personalInfo.Age) || personalInfo.Age <= 0) {
            newErrors.Age = "Invalid age";
        }

        if (!personalInfo.City) {
            newErrors.City = "City is required";
        }

        if (!personalInfo.pinCode) {
            newErrors.pinCode = "Pin code is required";
        } else if (isNaN(personalInfo.pinCode)) {
            newErrors.pinCode = "Invalid pin code";
        }

        if (!personalInfo.Contact) {
            newErrors.Contact = "Contact number is required";
        } else if (isNaN(personalInfo.Contact)) {
            newErrors.Contact = "Invalid contact number";
        }

        if (!personalInfo.District || personalInfo.District === "Select District") {
            newErrors.District = "District is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    
    const handleSubmit =async (e) => {
        const uid = localStorage.getItem("loginUserId")
        const token = localStorage.getItem("Token")
        // console.log("uidd",uid)
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted successfully:", personalInfo); 
            const requestData = new FormData();
            requestData.append('uid',uid);
            requestData.append('first_name', personalInfo.firstName);
            requestData.append('last_name', personalInfo.lastName);
            requestData.append('father_name', personalInfo.fatherName);
            requestData.append('age', personalInfo.Age);
            requestData.append('gender', personalInfo.Gender);
            requestData.append('marital_status', personalInfo.MaritalStatus);
            requestData.append('district', personalInfo.District); 
            requestData.append('city', personalInfo.City);
            requestData.append('pincode', personalInfo.pinCode);
            requestData.append('contact', personalInfo.Contact);

        
                const headers ={'Authorization':`Bearer ${token}`}
                await axios.post("https://disondys.pythonanywhere.com/userPersonalDetail", requestData, { headers }).then((res)=>{
                    console.log(res.data)
                    if(res.data.notFill){
                        alert(res.data.notFill)
                    }
                    else if(res.data.alreadyFill){
                        alert(res.data.alreadyFill)
                    }
                    else if(res.data.message){
                        alert(res.data.message)
                        navigate('/category')
                    }
                }).catch((error)=>{
                    console.log(error)
                    alert(error)
                })
               
            
        }
    };


    return (
        <>
            {JSON.stringify(personalInfo)}
            <form onSubmit={handleSubmit}>
                <div>RegisterPersonalDetail</div>

                <div>
                    <TextField
                        label='First Name'
                        name='firstName'
                        type='text'
                        onChange={(e) => dispatch(setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value }))}
                        error={Boolean(errors.firstName)}
                        helperText={errors.firstName}
                    />
                </div>

                <div>
                    <TextField
                        label='Last Name'
                        name='lastName'
                        type='text'
                        onChange={(e) => dispatch(setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value }))}
                        error={Boolean(errors.lastName)}
                        helperText={errors.lastName}
                    />
                </div>

                <div>
                    <TextField
                        label='Father Name'
                        name='fatherName'
                        type='text'
                        onChange={(e) => dispatch(setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value }))}
                        error={Boolean(errors.fatherName)}
                        helperText={errors.fatherName}
                    />
                </div>

                <div>
                    <TextField
                        label='Age'
                        name='Age'
                        type='number'
                        onChange={(e) => dispatch(setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value }))}
                        error={Boolean(errors.Age)}
                        helperText={errors.Age}
                    />
                </div>

                <div>
                    <TextField
                        label='City'
                        name='City'
                        type='text'
                        onChange={(e) => dispatch(setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value }))}
                        error={Boolean(errors.City)}
                        helperText={errors.City}
                    />
                </div>

                <div>
                    <TextField
                        label='Pin Code'
                        name='pinCode'
                        type='number'
                        onChange={(e) => dispatch(setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value }))}
                        error={Boolean(errors.pinCode)}
                        helperText={errors.pinCode}
                    />
                </div>

                <div>
                    <TextField
                        label='Contact Number'
                        name='Contact'
                        type='number'
                        onChange={(e) => dispatch(setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value }))}
                        error={Boolean(errors.Contact)}
                        helperText={errors.Contact}
                    />
                </div>

                <FormControl>
                    <FormLabel id="gender-radio-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="gender-radio-group-label"
                        name="Gender"
                        value={personalInfo.Gender || ""}
                        onChange={(e) => dispatch(setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value }))}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>

                <FormControl>
                    <FormLabel id="marital-status-radio-group-label">Marital Status</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="marital-status-radio-group-label"
                        name="MaritalStatus"
                        value={personalInfo.MaritalStatus || ""}
                        onChange={(e) => dispatch(setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value }))}
                    >
                        <FormControlLabel value="married" control={<Radio />} label="Married" />
                        <FormControlLabel value="unmarried" control={<Radio />} label="Unmarried" />
                    </RadioGroup>
                </FormControl>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth error={Boolean(errors.District)}>
                        <InputLabel id="district-select-label">District</InputLabel>
                        <Select
                            labelId="district-select-label"
                            id="district-select"
                            value={personalInfo.District || ""}
                            name="District"
                            label="District"
                            onChange={(e) => dispatch(setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value }))}
                        >
                            <MenuItem value="Select District">Select District</MenuItem>
                            <MenuItem value="Ariyalur">Ariyalur</MenuItem>
                            <MenuItem value="Chennai">Chennai</MenuItem>
                            <MenuItem value="Coimbatore">Coimbatore</MenuItem>
                            <MenuItem value="Cuddalore">Cuddalore</MenuItem>
                            <MenuItem value="Dharmapuri">Dharmapuri</MenuItem>
                            <MenuItem value="Dindigul">Dindigul</MenuItem>
                            <MenuItem value="Erode">Erode</MenuItem>
                            <MenuItem value="Kallakurichi">Kallakurichi</MenuItem>
                            <MenuItem value="Kanchipuram">Kanchipuram</MenuItem>
                            <MenuItem value="Kanyakumari">Kanyakumari</MenuItem>
                            <MenuItem value="Karur">Karur</MenuItem>
                            <MenuItem value="Krishnagiri">Krishnagiri</MenuItem>
                            <MenuItem value="Madurai">Madurai</MenuItem>
                            <MenuItem value="Nagapattinam">Nagapattinam</MenuItem>
                            <MenuItem value="Namakkal">Namakkal</MenuItem>
                            <MenuItem value="Nilgiris">Nilgiris</MenuItem>
                            <MenuItem value="Perambalur">Perambalur</MenuItem>
                            <MenuItem value="Pudukkottai">Pudukkottai</MenuItem>
                            <MenuItem value="Ramanathapuram">Ramanathapuram</MenuItem>
                            <MenuItem value="Ranipet">Ranipet</MenuItem>
                            <MenuItem value="Salem">Salem</MenuItem>
                            <MenuItem value="Sivaganga">Sivaganga</MenuItem>
                            <MenuItem value="Tenkasi">Tenkasi</MenuItem>
                            <MenuItem value="Thanjavur">Thanjavur</MenuItem>
                            <MenuItem value="Theni">Theni</MenuItem>
                            <MenuItem value="Thoothukudi">Thoothukudi</MenuItem>
                            <MenuItem value="Tiruchirappalli">Tiruchirappalli</MenuItem>
                            <MenuItem value="Tirunelveli">Tirunelveli</MenuItem>
                            <MenuItem value="Tirupathur">Tirupathur</MenuItem>
                            <MenuItem value="Tiruppur">Tiruppur</MenuItem>
                            <MenuItem value="Tiruvallur">Tiruvallur</MenuItem>
                            <MenuItem value="Tiruvannamalai">Tiruvannamalai</MenuItem>
                            <MenuItem value="Tiruvarur">Tiruvarur</MenuItem>
                            <MenuItem value="Vellore">Vellore</MenuItem>
                            <MenuItem value="Viluppuram">Viluppuram</MenuItem>
                            <MenuItem value="Virudhunagar">Virudhunagar</MenuItem>
                        </Select>
                        {errors.District && <div style={{ color: 'red', marginTop: '5px' }}>{errors.District}</div>}
                    </FormControl>
                </Box>

                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </>
    );
};

export default RegisterPersonalDetail;
