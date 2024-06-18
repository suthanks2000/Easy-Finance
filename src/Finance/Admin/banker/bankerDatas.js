import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { Container, Table } from 'react-bootstrap';

const BankerDatas = () => {
    const [bankerReg, setBankerReg] = useState([])
    const [verifyToken,setVerifyToken] = useState({})
    const [updateStatus,setUpdateStatus] = useState("verified")
    const navigate = useNavigate()

    useEffect(() => {
      getRegBankerData();
  }, [])

    const getRegBankerData = async () => {
        try {

            const response = await axios.get("https://disondys.pythonanywhere.com/getBankerData")

            setBankerReg(response.data)
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching banker data:', error)
        }
    }
  

    const tokenGenerate = async (bankerData) => {

      let formData = new FormData();
      
      formData.append("email", bankerData.Email);
     
   
     await axios.post("https://disondys.pythonanywhere.com/tokenGenerate",formData).then((res)=>{

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
        const getTokenData = await axios.get(`https://disondys.pythonanywhere.com/getToken/${bankerData.Email}`);

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
    //   to_email: tokenData.email,

      to_email: tokenData.email,

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


    await axios.post('https://disondys.pythonanywhere.com/approveplan',planData).then((res)=>{

        console.log(res.data)
        alert(res.data)
    }).catch((err)=>{
        alert(err)
        console.log(err)
    })
}  

    return (
        <Container>
            <center>
                <Table striped bordered hover size="sm" variant="dark" responsive="sm" style={{width:'80%'}} >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Email Verify</th>
                            <th>plan Approvel Buttons</th>
                            <th>request plan</th>
                            <th>Assign plan</th>
                            <th>plan Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bankerReg.map(data => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.Name}</td>
                                <td>{data.Email}</td>
                                <td>
                                    <button className={data.Action=="approve"?'btn btn-warning btn-sm':'btn btn-success btn-sm'} disabled={data.Action === "verified"} onClick={()=>tokenGenerate(data)}>{data.Action}</button>
                                </td>
                                <td>
                                    <button className='btn btn-success btn-sm' disabled={data.request_plan ===null} onClick={()=>handleplanApproval(data)}>Accept</button><span> Or </span>
                                    <button className='btn btn-danger btn-sm'>Reject</button>
                                </td>
                                <td>{data.request_plan}</td>
                                <td>{data.assign_plan}</td>
                                <td>{data.plan_id}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </center>
        </Container>
    );
}

export default BankerDatas
