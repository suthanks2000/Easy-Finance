import React, { useEffect, useState } from 'react'
import BankerNavbar from '../bankerNavbar';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import { Card } from 'react-bootstrap';


const BankerPayment = () => {
  const pricingHeaderBg="url('../../../public/assets/img/pricing-header-bg.jpg')"

  const [bankerPlans, setbankerPlans] = useState([])

    useEffect(()=>{
        fetchData()
    },[])
   async function fetchData () {
        await axios.get("https://PreethiJP.pythonanywhere.com/getbankerplans").then((res)=>{

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

      await axios.post("https://PreethiJP.pythonanywhere.com/bankerRequestplan",planData).then((res)=>{
        alert(res.data)
        console.log(res.data)
      }).catch((err)=>{
        alert(err)
        console.log(err)
      })
    }

  return (
    <>
      <BankerNavbar />
      <div className="page-header position-relative" style={{
        backgroundImage: `url(${pricingHeaderBg})`,
        backgroundSize: 'cover'
      }}>
        <span className="mask bg-gradient-primary opacity-6"></span>
        <div className="container pb-lg-9 pb-10 pt-7 position-relative z-index-2">
          <div className="row mt-4">
            <div className="col-md-6 mx-auto text-center">
              <h3 className="text-white">Banker Payment Page</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-n8">
        <div className="container">
          <div className="tab-content tab-space">
            <div className="tab-pane active" id="monthly">
              <div className="row">
                {bankerPlans.map((data, i) => (
                  <div key={i} className="col-lg-4 mb-lg-0 mb-4">
                    <Card className="text-center">
                      <Card.Header className="bg-white text-center pt-4 pb-3 border-0">
                        <h2 className="font-weight-bold mt-2">
                          <small>{data.plan_name.replace(/_/g, ' ').toUpperCase()}</small>
                        </h2>
                      </Card.Header>
                      <Card.Body className="text-lg-start text-center pt-0">
                        <div className="d-flex align-items-center p-2">
                          <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                            <i className="fas fa-check opacity-10"></i>
                          </div>
                          <div>
                            <span className="ps-3">Datas you get is {data.count}</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center p-4">
                          {/* <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                            <i className="fas fa-check opacity-10"></i>
                          </div> */}
                          <div className="ps-3">
                            <button
                              type="button"
                              className="btn btn-skyblue"
                              onClick={() => handleRequest(data)}
                            >
                              Request plan
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
    
  )
}

export default BankerPayment