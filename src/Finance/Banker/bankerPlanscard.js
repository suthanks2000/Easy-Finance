import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const BankerPlansCard = () => {
    const [plan, setplan] = useState([])
    useEffect(()=>{
        fetchData()
    },[])
   async function fetchData () {
        await axios.get("https://suthanks.pythonanywhere.com/getbankerplans").then((res)=>{
            setplan(res.data) 
           alert("fetch data success")
           console.log(res.data)
        }).catch((err)=>{
            alert(err)
            console.log(err)
        })
    }
  return (
    <>
    <p>refer's for subcription</p>
        <div className='d-flex justify-content-evenly'>
        {plan.map((each) => (
        <Card 
          bg='info'
          // key={each}
          text='dark'
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>{each.plan_name}</Card.Header>
          <Card.Body>
            <Card.Title>provide {each.count} Only</Card.Title>
            <Card.Text>
              
            </Card.Text>
          </Card.Body>
        </Card>
        
      ))}
      </div>
      <div>
        <p>You Want To Be a Banker As EasyFinance ! <Link to='/banker/register'>Register Here</Link></p>
      </div>
    </>
  )
}

export default BankerPlansCard