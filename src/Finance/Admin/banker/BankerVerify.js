import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';

const BankerVerify = () => {
    const [checkEmail,setCheckEmail] = useState("")
    const [updateStatus,setUpdateStatus] = useState("verified")
    const [bankerVerified,setBankerVerified] = useState(false)
    const [error,setError] = useState(false)
    // const [verified,alreadyVerified] = useState(false)
   
    const { token } = useParams()
    console.log(token)
    
  const checkCorrectEmail = async () => {
    try {
     
    console.log("tokenid",token)
    console.log("checkemail",checkEmail)
    let formData = new FormData();
    formData.append("statusUpdate", updateStatus);

   
    const res = await axios.put(

      `https://PreethiJP.pythonanywhere.com/updateStatus?bankerToken=${token}&bankerEmail=${checkEmail}`,

      formData
  ).then((response) => {
      console.log(response.data);
      if(response.data.unauthorized){
        alert("Unauthorized")
        // setBankerVerified(true)
        setError("unauthorized")
      }
      else if(response.data.existingemail){
        alert("Status is not unhold")
        setError("status is not onhold")
        // alreadyVerified(true)
      }
      else if(response.data.Verified){
        alert("Verified Email")
        setBankerVerified(true);  
        changeStatusRegister();
      }
     else {
      setError("Unexpected response");
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
    
    try {const res = await axios.put(`https://PreethiJP.pythonanywhere.com/updateVerifiedBanker/${checkEmail}`, formData)

        console.log(res.data) 
        
    } catch (error) {
        console.error(error)
        alert("error")
       
    }
    
}
  
return (


  <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            {!error && (
                <div>
                    {!bankerVerified ? (
                        <div className="d-flex flex-column justify-content-between text-center shadow p-5 bg-white rounded" style={{ width: '500px', height: '400px' }}>
                            <div>
                                <label className='fs-5'>Type your Email</label>
                                <input 
                                    type="email" 
                                    value={checkEmail}
                                    onChange={(e) => setCheckEmail(e.target.value)}
                                    className="form-control my-3"
                                />
                            </div>
                            <button type="button" onClick={checkCorrectEmail} className="btn btn-primary align-self-end">Click to verify your Email</button>
                        </div>
                    ) : (
                        <div className="d-flex flex-column justify-content-between text-center shadow p-5 bg-white rounded" style={{ width: '500px', height: '400px' }}>
                            <div>
                                <h4>Verified successfully</h4>
                                <h5>Verified Email</h5>
                                <p>You are verified for Banker Login</p>
                            </div>
                            <Link to="/banker/login" className="btn btn-primary align-self-end">OK LOGIN</Link>
                        </div>
                    )}
                </div>
            )}
        </div>
);
};


export default BankerVerify