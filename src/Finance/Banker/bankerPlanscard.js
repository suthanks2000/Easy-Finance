import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "./bankerPlanscard.css"; 
import BankerRegNavbar from './bankerRegNavbar';
// import pricingHeaderBg from '../../../public/assets/img/pricing-header-bg.jpg'

const BankerPlansCard = () => {
    const [plan, setplan] = useState([])
    const pricingHeaderBg="url('../../../public/assets/img/pricing-header-bg.jpg')"
    useEffect(()=>{
        fetchData()
    },[])
   async function fetchData () {
        await axios.get("https://suthanks.pythonanywhere.com/getbankerplans").then((res)=>{
            setplan(res.data) 
           console.log(res.data)
        }).catch((err)=>{
            alert(err)
            console.log(err)
        })
    }
    return (
      <>
      <BankerRegNavbar />
      <div className="page-header position-relative" style={{
        backgroundImage: `url(${pricingHeaderBg})`,
        backgroundSize: 'cover'
      }}>
        <span className="mask bg-gradient-primary opacity-6"></span>
        <div className="container pb-lg-9 pb-10 pt-7 position-relative z-index-2">
          <div className="row mt-4">
            <div className="col-md-6 mx-auto text-center">
              <h3 className="text-white">See our Package</h3>
              <p className="text-white">You have Updates and Premium Support on each package. Refer for subscription</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-7 mx-auto text-center">
              <div className="nav-wrapper mt-5 position-relative z-index-2">
                <ul className="nav nav-pills nav-fill flex-row p-1" id="tabs-pricing" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link mb-0" id="tabs-iconpricing-tab-2" data-bs-toggle="tab" href="#annual" role="tab" aria-controls="annual" aria-selected="false">
                      Monthly
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-n8">
        <div className="container">
          <div className="tab-content tab-space">
            <div className="tab-pane active" id="monthly">
              <div className="row">
                {plan.map((eachPlan) => (
                  <div key={eachPlan.plan_id} className="col-lg-4 mb-lg-0 mb-4">
                    <Card className="text-center">
                      <Card.Header className="bg-white text-center pt-4 pb-3 border-0">
                        <h2 className="font-weight-bold mt-2">
                          <small>{eachPlan.plan_name.replace(/_/g, ' ').toUpperCase()}</small>
                        </h2>
                      </Card.Header>
                      <Card.Body className="text-lg-start text-center pt-0">
                        <div className="d-flex align-items-center p-2">
                        <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                          <i className="fas fa-check opacity-10"></i>
                        </div>
                        <div>
                          <span className="ps-3">Provide {eachPlan.count} only</span>
                        </div>
                      </div>
                        <div className="d-flex align-items-center p-2">
                          <div className="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                            <i className="fas fa-check opacity-10"></i>
                          </div>
                          <div className="ps-3">
                            <span>Personal details and contact information</span>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-7">
  <p className="fs-5">
    Want to be a Banker with EasyFinance? <Link to="/banker/register">Register Here</Link>
  </p>
</div>
        </div>
      </div>
    </>
  
    );
  };
  


export default BankerPlansCard