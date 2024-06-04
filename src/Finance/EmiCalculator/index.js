import './EmiCal.css'

import { useState } from "react";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";
ChartJS.register(ArcElement, Tooltip, Legend);


export default function EmiCalculator() {
  const [emiData, setEmiData] = useState({});
  const intr = emiData.interest / 1200;
  const TenureYear =emiData.tenureMonth? emiData.tenureMonth / 12 : null;

  const emiValue = emiData.tenureMonth
    ? Math.round(
        (emiData.loanAmount * intr) /
          (1 - Math.pow(1 / (1 + intr), emiData.tenureMonth))
      )
    : null;

  const totalAmt = emiValue? emiData.tenureMonth * emiValue :null ;

  const TotalInterest = emiValue? totalAmt - emiData.loanAmount :null;

  const handleChange = (ele) => {
    setEmiData({ ...emiData, [ele.target.name]: ele.target.value })
  }

  return (
    <>
      <div className="GrandParent row" >
        {/* <div className="grandparent1">
          <header>
            <nav className="navbar sticky-top navbar-expand-lg  navbar-dark bg-dark">
              <Link className="navbar-brand fs-3" href="#">
                Easy Finance
              </Link>
              <button
                className="navbar-toggler shadow-none border-0"
                type="button"
                data-toggle="collapse"
                data-target="#myNavbar"
                aria-controls="myNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="navbar-nav justify-content-evenly flex-grow-1 pe-1">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/personaldetail"}>
                      Personal Detail
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/category"}>
                      category
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" href="#">
                      EMI Calulator
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Loan List
                    </Link>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <Link class="dropdown-item" to={"/personalloandetail"}>
                        Personal Loan
                      </Link>
                      <Link class="dropdown-item" to={"/personalloandetail"}>
                        Home Loan
                      </Link>
                      <Link class="dropdown-item" to={"/personalloandetail"}>
                        Vehicle Loan
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Help
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      Enquiries
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <form className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Search"
                />
                <button type="button" className="btn btn-primary rounded-pill">
                  Search
                </button>
              </form>
            </nav>
          </header>
        </div> */}
        <div>
          <h1>Welcome to EmiCalculator</h1>
        </div>
{/* grandparent1 */}
        <div className="col-4">
          <div>
            <label>loanAmount</label>
            <input
              type="number"
              placeholder="Enter your loan amount"
              name="loanAmount"
              required
              max={200000}
              min={99999}
              onKeyUp={(e) =>handleChange(e)}
            />
          </div>

          <div>
            <label>interest</label>
            <input
              type="number"
              value={emiData.interest}
              placeholder="Your interest"
              name="interest"
              required
              onKeyUp={(e) =>handleChange(e)}
              disabled
            />
            <input
              type="range"
              min="10"
              name="interest"
              max="24"
              step="1"
              onChange={(e) =>handleChange(e)}
            />
          </div>

          <div>
            <label> Tenure</label>

            <input
              type="number"
              placeholder="EMI in months"
              name="tenureMonth"
              required
              onKeyUp={(e) =>handleChange(e)}
            />

            <input
              type="number"
              placeholder="EMI in years"
              value={TenureYear }
              name="tenureYears"
              required
              onKeyUp={(e) =>handleChange(e)}
              disabled
            />
          </div>

          <div>
            <label>EMI</label>
            <input type="number" placeholder="Monthly EMI" value={emiValue} disabled />
          </div>

          <div>
            <label>TotalAmount</label>
            <input type="number" placeholder="EMI Total Amount" value={totalAmt} disabled/>
          </div>

          <div>
            <label>TotalInterest</label>
            <input type="number" placeholder="EMI Total Interest" value={TotalInterest} disabled/>
          </div>
        </div>

{/* Grandparent2 */}
        <div className="col-4">
          
        
            <div className="Parent2Child"> 
                
                   <label>loanAmount</label><h5>Rs.{emiData.loanAmount}</h5>
                   <label>Interest</label><h5>{emiData.interest}%</h5>
                   <label>Emi</label><h5>₹{emiValue}</h5>
                   <label>ToatalAmount</label><h5>{totalAmt}</h5>
                   <label>ToatalInterest</label><h5>{TotalInterest}</h5>
                
              
                  </div> 
                  
              
          
          </div>
 {/* Grandparent3          */}


          <div className="col-4">
            <Pie
              data={{
                labels: ["Total Interest", "Total Amount"],
                datasets: [
                  {
                    data: [TotalInterest, totalAmt],
                    backgroundColor: ["red", "green"],
                  },
                ],
              }}
             
            />
          </div>      
      </div>
    </>
  );
}
