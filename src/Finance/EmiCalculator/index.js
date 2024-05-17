import { useState } from "react";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function EmiCalculator() {
  const [emiDATA, setEmiData] = useState({
    loanAmount: null,
    interest: null,
    tenure: {
      years: null,
      months: null,
    },
  });
  const intr = emiDATA.interest / 1200;
  const TenureYear = emiDATA.tenure.months / 12;

  const emiValue = emiDATA.tenure.months
    ? Math.round(
        (emiDATA.loanAmount * intr) /
          (1 - Math.pow(1 / (1 + intr), emiDATA.tenure.months))
      )
    : 0;

  const totalAmt = emiDATA.tenure.months * emiValue;

  const TotalInterest = totalAmt - emiDATA.loanAmount;

  return (
    <>
      <div className="Grandparent">
        <div className="grandparent1">
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
        </div>
        <div>
          <h1>Welcome to EmiCalculator</h1>
        </div>
        <div className="grandparent2">
          <div>
            <label>loanAmount</label>
            <input
              type="number"
              placeholder="Enter your loan amount"
              required
              max={200000}
              min={99999}
              onKeyUp={(e) =>
                setEmiData({ ...emiDATA, loanAmount: e.target.value })
              }
            />
          </div>

          <div>
            <label>interest</label>
            <input
              type="text"
              value={emiDATA.interest}
              placeholder="Enter your interest"
              required
              onKeyUp={(e) =>
                setEmiData({ ...emiDATA, interest: e.target.value })
              }
            />
            <input
              type="range"
              min="10"
              max="24"
              step="1"
              onChange={(e) =>
                setEmiData({ ...emiDATA, interest: e.target.value })
              }
            />
          </div>

          <div>
            <label> Tenure</label>

            <input
              type="number"
              placeholder="Enter in months"
              required
              onKeyUp={(e) =>
                setEmiData({
                  ...emiDATA,
                  tenure: { ...emiDATA.tenure, months: e.target.value },
                })
              }
            />

            <input
              type="number"
              placeholder="Enter in years"
              value={TenureYear}
              required
              onKeyUp={(e) =>
                setEmiData({
                  ...emiDATA,
                  tenure: { ...emiDATA.tenure, years: e.target.value },
                })
              }
            />
          </div>

          <div>
            <label>EMI</label>
            <input type="number" value={emiValue} />
          </div>

          <div>
            <label>TotalAmount</label>
            <input type="number" value={totalAmt} />
          </div>

          <div>
            <label>TotalInterest</label>
            <input type="number" value={TotalInterest} />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <table border={12}>
              <thead>
                <th>loanAmount</th>
                <th>Interest</th>
                <th>Emi</th>
                <th>ToatalAmount</th>
                <th>ToatalInterest</th>
              </thead>
              <tbody border={2}>
                <tr>
                  <td>{emiDATA.loanAmount}</td>
                  <td>{emiDATA.interest}</td>
                  <td>{emiValue}</td>
                  <td>{totalAmt}</td>
                  <td>{TotalInterest}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-6">
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
              // width={200}
              // height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
}
