import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BankerVerify = () => {
    const [checkEmail,setCheckEmail] = useState("")
    const [response,setresponse] = useState("")
    const [updateStatus,setUpdateStatus] = useState("verified")
    const [bankerVerified,setBankerVerified] = useState(false)
   
    const { token } = useParams()
    console.log(token)
    
  const checkCorrectEmail = async () => {
    try {
     
    console.log("tokenid",token)
    console.log("checkemail",checkEmail)
    let formData = new FormData();
    formData.append("statusUpdate", updateStatus);

   
    const res = await axios.put(
      `https://suthanks.pythonanywhere.com/updateStatus?bankerToken=${token}&bankerEmail=${checkEmail}`,
      formData
  ).then((response) => {
      console.log(response.data);
      if(response.data.unauthorized){
        alert("Unauthorized")
      }
      else if(response.data.existingemail){
        alert("Status is not unhold")
      }
      else if(response.data.Verified){
        alert("Verified Email")
        setBankerVerified(true);  
        changeStatusRegister();
      }
    
  });
} catch (error) {
  console.error("Error updating status:", error);
  alert("Failed to update status");
}
    
}


const changeStatusRegister = async () => {
   
    let formData = new FormData()
    formData.append("statusUpdate", updateStatus)
    
    try {
        const res = await axios.put(`https://suthanks.pythonanywhere.com/updateVerifiedBanker/${checkEmail}`, formData)
        console.log(res.data) 
        
    } catch (error) {
        console.error(error)
        alert("error")
       
    }
    
}
  
  return (

    <>
    { !bankerVerified ? (
      <div>
        <label>Type your Email</label>
        <input 
          type="email" 
          onChange={(e) => setCheckEmail(e.target.value)}
          
        />
        <button type="button" onClick={checkCorrectEmail}>Click verify your Email</button>
      </div>
    ) : (
      <h4>Verified successfully</h4>
    )}
  </>
);
};


export default BankerVerify