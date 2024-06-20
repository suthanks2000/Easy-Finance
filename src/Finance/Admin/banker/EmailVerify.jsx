import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export const EmailVerify = ({emailVerify,setEmailVerify}) => {
  const { token} = useParams()
//   const navigate = useNavigate 

//   useEffect(()=>{
//   console.log("getTokenData",getTokenData)
// },[])
  // const form = useRef();





  const sendEmail = () => {
    const data = {
      to_name: "preethi",
      from_name: "Easy Finance Official Website",
      message: "http://localhost:3000/verifiedEmail",
      to_email: "suthanks2000@gmail.com",
    };

    emailjs.send('service_kh6ub9f', 'template_vnbstvb', data, 'GNwyY4-I6aDBWSefP')
      .then(
        (result) => {
          alert('Email sent successfully!');
          console.log('SUCCESS!', result.text);
        },
        (error) => {
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <div>
       <button type='button' onClick={sendEmail}>Send Verification Email</button> 
      </div>
    </>
  );
};

export default EmailVerify;
