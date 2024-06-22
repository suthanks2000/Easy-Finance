import "./EmiCal.css";
import { useState } from "react";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import CategoryNavbar from "../Category/categoryNavbar";
const pricingHeaderBg="url('../../../public/assets/img/pricing-header-bg.jpg')"

ChartJS.register(ArcElement, Tooltip, Legend);

export default function EmiCalculator() {
  const [emiData, setEmiData] = useState({});
  const intr = emiData.interest / 1200;
  const TenureYear = emiData.tenureMonth ? emiData.tenureMonth / 12 : null;

  const emiValue = emiData.tenureMonth && emiData.interest
    ? Math.round(
        (emiData.loanAmount * intr) /
          (1 - Math.pow(1 / (1 + intr), emiData.tenureMonth))
      )
    : null;

  const totalAmt = emiValue ? emiData.tenureMonth * emiValue : null;

  const TotalInterest = emiValue ? totalAmt - emiData.loanAmount : null;

  const handleChange = (ele) => {
    setEmiData({ ...emiData, [ele.target.name]: ele.target.value });
  };

  return (
    <>
    <CategoryNavbar />
      <div className="page-header position-relative" style={{
        backgroundImage: `url(${pricingHeaderBg})`,
        backgroundSize: 'cover'
      }}>
        </div>
        <span className="mask bg-gradient-primary opacity-6 height-200"></span>

      <div className="container mt-7">
        <h3 className="text-center ">EMI CALCULATOR</h3>

        <div className="row">
          <div className="col-md-4 mb-3 mb-md-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title mb-3">Enter Loan Details</h3>
                <form className="d-flex flex-column flex-grow-1">
                  <div className="form-group">
                    <label>Loan Amount₹</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter loan amount"
                      name="loanAmount"
                      value={emiData.loanAmount || ""}
                      onChange={handleChange}
                      min="99999"
                    />
                  </div>

                  <div className="form-group">
                    <label>Interest Rate%</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter interest rate"
                      name="interest"
                      value={emiData.interest || ""}
                      onChange={handleChange}
                      min="5"
                      max="25"
                    />
                  </div>

                  <div className="form-group">
                    <label>Tenure (Months)</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter tenure in months"
                      name="tenureMonth"
                      value={emiData.tenureMonth || ""}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Tenure (Years)</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Tenure in years"
                      value={TenureYear || ""}
                      disabled
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title mb-5">Your EMI DETAILS</h3>
                <div className="mb-2 flex-grow-1"><h4>Loan EMI: ₹{emiValue}</h4></div>
                <div className="mb-2 flex-grow-1">
                  <h4>Total Interest Payable: ₹{TotalInterest}</h4>
                </div>
                <div className="flex-grow-1"><h4>Total Payment: ₹{totalAmt}</h4></div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="doughnutchart flex-grow-1">
                  <Doughnut
                    data={{
                      labels: ["Total Interest", "Total Amount"],
                      datasets: [
                        {
                          data: [TotalInterest, totalAmt],
                          backgroundColor: ["blue", "lightblue"],
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
