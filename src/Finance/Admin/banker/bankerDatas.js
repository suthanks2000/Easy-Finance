import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { Container, Table } from 'react-bootstrap';
import AdminNavbar from '../adminNavbar';

const BankerDatas = () => {
    const [bankerReg, setBankerReg] = useState([])
    const [verifyToken,setVerifyToken] = useState({})
    const pricingHeaderBg="url('../../../public/assets/img/pricing-header-bg.jpg')"

    const navigate = useNavigate()

    useEffect(() => {
      getRegBankerData();
  }, [])

    const getRegBankerData = async () => {
        try {

            const response = await axios.get("https://suthanks.pythonanywhere.com/getBankerData")


            setBankerReg(response.data)
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching banker data:', error)
        }
    }
  

    const tokenGenerate = async (bankerData) => {

      let formData = new FormData();
      
      formData.append("email", bankerData.Email);
     
   
     await axios.post("https://suthanks.pythonanywhere.com/tokenGenerate",formData).then((res)=>{


        console.log("res",res)
        alert(res.data)
        getToken(bankerData)
    
    }).catch((err)=>{
        console.log(err)
        alert(err)
    })
    console.log("id",bankerData.id)
    setVerifyToken(bankerData)
    console.log("bankerData",bankerData)
    
  }


  const getToken = async (bankerData) => {
 
    try {
        const getTokenData = await axios.get(`https://suthanks.pythonanywhere.com/getToken/${bankerData.Email}`);

        console.log("getToken", getTokenData.data);
        alert(JSON.stringify(getTokenData.data, null, 2));

        sendEmail(getTokenData.data)

        
    } catch (error) {
        console.error("Error fetching tokens:", error);
        alert("Failed to fetch tokens");
    } 

}


const sendEmail = (tokenData) => {
    // console.log("tokenData",tokenData)
    const data = {
      to_name: tokenData.email,
      from_name: "Easy Finance Official Website",
      message: `http://localhost:3000/verifiedEmail/${tokenData.token_id}`,
      to_email: 'suthanks2000@gmail.com',


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

const handleplanApproval = async (plan) => {
    const planData = new FormData();
    planData.append('requestBanker',plan.id)

    await axios.post('https://suthanks.pythonanywhere.com/approveplan',planData).then((res)=>{


        console.log(res.data)
        alert(res.data)
    }).catch((err)=>{
        alert(err)
        console.log(err)
    })
}  

    return (
        <>
        <AdminNavbar />
      <div className="page-header position-relative" style={{
        backgroundImage: `url(${pricingHeaderBg})`,
        backgroundSize: 'cover'
      }}>
        </div>
        <span className="mask bg-gradient-primary opacity-6 height-200"></span>
            <div className=' container-fluid mt-7'>
            <h2 className='text-center'>User Datas by Admin Control</h2>
<div className="card">
  <div className="table-responsive">
    <table className="table align-items-center mb-0">
      <thead>
        <tr>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">id</th>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Email</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Email Verify</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">plan Approvel Buttons</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">request plan</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Assign plan</th>
        
        </tr>
                    
      </thead>
      <tbody>
        {bankerReg.map((data, i) => (
          <tr key={i}>
            <td>
              <div className="d-flex px-2 py-1">
                <div className="d-flex flex-column justify-content-center">
                  <p className="text-xs text-secondary mb-0">{data.id}</p>
                </div>
              </div>
            </td>
            <td>
              <p className="text-xs text-secondary mb-0">{data.Name}</p>
            </td>
            <td className="align-middle text-center text-sm">
              <span className="text-secondary text-xs font-weight-bold">{data.Email}</span>
            </td>
            <td className="align-middle text-center">
                <button className={data.Action=="approve"?'btn btn-warning btn-sm':'btn btn-success btn-sm'} disabled={data.Action === "verified"} onClick={()=>tokenGenerate(data)}>{data.Action}</button>
            </td>
            <td className="align-middle text-center">
                <button className='btn btn-success btn-sm' disabled={data.request_plan ===null} onClick={()=>handleplanApproval(data)}>Accept</button><span> Or </span>
                <button className='btn btn-danger btn-sm'>Reject</button>
            </td>
            <td className="align-middle text-center">
              <span className="badge badge-sm badge-danger">{data.request_plan}</span>
            </td>
            <td className="align-middle text-center">
              <span className="badge badge-sm badge-danger">{data.assign_plan}</span>
            </td>
            <td className="align-middle text-center">
              <span className="badge badge-sm badge-danger">{data.plan_id}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        </div>
        </>
    );
}

export default BankerDatas
