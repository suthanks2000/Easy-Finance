import React, { useEffect, useState } from 'react'
import BankerNavbar from '../bankerNavbar';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';


const BankerPayment = () => {
  
  const [bankerPlans, setbankerPlans] = useState([])

    useEffect(()=>{
        fetchData()
    },[])
   async function fetchData () {
        await axios.get("https://disondys.pythonanywhere.com/getbankerplans").then((res)=>{

           setbankerPlans(res.data) 
           alert("fetch data success")
           console.log(res.data)
        }).catch((err)=>{
            alert(err)
            console.log(err)
        })
    }
    const handleRequest = async (plan) => {
      const planData = new FormData();
      
      planData.append('plan',plan.id)

      await axios.post("https://disondys.pythonanywhere.com/bankerRequestplan",planData).then((res)=>{
        alert(res.data)
        console.log(res.data)
      }).catch((err)=>{
        alert(err)
        console.log(err)
      })
    }

  return (
    <>
    <BankerNavbar/>
    <div>BankerPayment</div>
    <center>
                <Container>
                <Table striped bordered hover size="sm" variant="dark" responsive="sm">
                    <thead>
                        <tr>
                            <th>Plan Name</th>
                            <th>datas you get</th>
                            <th>Request Plan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bankerPlans.map((data,i) => (
                            <tr key={i}>
                                <td>{data.plan_name}</td>
                                <td>datas you get is <b>{data.count}</b></td>
                                <td>
                                    <button type='button' className='btn btn-info btn-sm' onClick={()=>handleRequest(data)}>Request plan</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                </Container>
            </center>
    
    </>
    
  )
}

export default BankerPayment