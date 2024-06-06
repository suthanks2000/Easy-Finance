import React, { useState } from 'react';
import { TextField, Alert } from '@mui/material';
import './bankerReg.css'; 

const BankerReg = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [contact, setContact] = useState('');
  const [alertField, setAlertField] = useState('');

  const handleBlur = (inputValue, fieldName) => {
    if (inputValue.trim() === '') {
      setAlertField(fieldName)
    } else {
      setAlertField('');
    }
  };

  return (
    <div className='container-mt-4'>
      <h4>Banker Register</h4>
      <div className="text-field-container">
        <TextField
          label="Name"
          id="outlined-size-small"
          size="small"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur(name, 'name')}
        />
        {alertField === '' && <Alert severity="error">Please fill this field</Alert>}
      </div>
      <div className="text-field-container">
        <TextField
          label="Company/Bank Name"
          id="outlined-size-small"
          size="small"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          onBlur={() => handleBlur(company, 'company')}
        />
        {alertField === 'company' && <Alert severity="error">Please fill this field</Alert>}
      </div>
      <div className="text-field-container">
        <TextField
          label="Email Address"
          id="outlined-size-small"
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur(email, 'email')}
        />
        {alertField === 'email' && <Alert severity="error">Please fill this field</Alert>}
      </div>
      <div className="text-field-container">
        <TextField
          label="District"
          id="outlined-size-small"
          size="small"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          onBlur={() => handleBlur(district, 'district')}
        />
        {alertField === 'district' && <Alert severity="error">Please fill this field</Alert>}
      </div>
      <div className="text-field-container">
        <TextField
          label="City"
          id="outlined-size-small"
          size="small"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onBlur={() => handleBlur(city, 'city')}
        />
        {alertField === 'city' && <Alert severity="error">Please fill this field</Alert>}
      </div>
      <div className="text-field-container">
        <TextField
          label="Pincode"
          id="outlined-size-small"
          size="small"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          onBlur={() => handleBlur(pincode, 'pincode')}
        />
        {alertField === 'pincode' && <Alert severity="error">Please fill this field</Alert>}
      </div>
      <div className="text-field-container">
        <TextField
          label="Contact"
          id="outlined-size-small"
          size="small"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          onBlur={() => handleBlur(contact, 'contact')}
        />
        {alertField === 'contact' && <Alert severity="error">Please fill this field</Alert>}
      </div>
    </div>
  );
};

export default BankerReg;
