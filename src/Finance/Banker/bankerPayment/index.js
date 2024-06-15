import React, { useEffect, useMemo, useState } from 'react'
import { Autocomplete, Button, MenuItem, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import BankerNavbar from '../bankerNavbar';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';


const BankerPayment = () => {
  
  const [grade, setgrade] = useState("");
  const loanName =["personal Loan","homeLoan","bikeLoan","businessLoan"];
  const LoanGrade =["A","B","C","D"];
  const [bankerPlans, setbankerPlans] = useState([])

    useEffect(()=>{
        fetchData()
    },[])
   async function fetchData () {
        await axios.get("https://suthanks.pythonanywhere.com/getbankerplans").then((res)=>{
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
      await axios.post("https://suthanks.pythonanywhere.com/bankerRequestplan",planData).then((res)=>{
        alert(res.data)
        console.log(res.data)
      }).catch((err)=>{
        alert(err)
        console.log(err)
      })
    }
  const Navigate=useNavigate();
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
    {/* <form>
        <div>
            <TextField
          id="outlined-select-currency"
          select
          label="LoanGrade"
          name='LoanGrade'
          value={grade}
          helperText="Please select your Loan"
          size="small"
          margin="normal"
          onChange={(e)=>{setgrade(e.target.value)
            console.log(e.target.value)}}

        >
          {LoanGrade.map((option,i) => (
            <MenuItem key={i} value={option} >
              {option}
            </MenuItem>
          ))}
        </TextField>
            </div> 
            <div>
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={()=>Handlesent()}
            >
              Request
            </Button>
          </div>
        </form> */}
    </>
    
  )
}

export default BankerPayment