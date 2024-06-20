// import "./EmiCal.css";

// import { useState } from "react";
// import React from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut} from "react-chartjs-2";
// import { Link } from "react-router-dom";
// import {
//   TextField,
//   Slider,
//   Typography,
//   Box,
//   Container,
//   Grid,
//   Paper,
//   Button,
//   Divider,
// } from "@mui/material";
// import Navbar from "../Navbar";
// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function EmiCalculator() {
//   const [emiData, setEmiData] = useState({});
//   const intr = emiData.interest / 1200;
//   const TenureYear = emiData.tenureMonth ? emiData.tenureMonth / 12 : null;

//   const emiValue = emiData.tenureMonth
//     ? Math.round(
//         (emiData.loanAmount * intr) /
//           (1 - Math.pow(1 / (1 + intr), emiData.tenureMonth))
//       )
//     : null;

//   const totalAmt = emiValue ? emiData.tenureMonth * emiValue : null;

//   const TotalInterest = emiValue ? totalAmt - emiData.loanAmount : null;

//   const handleChange = (ele) => {
//     setEmiData({ ...emiData, [ele.target.name]: ele.target.value });
//   };

//   return (
//     <div className="GrandParent row">
//       <div className="grandparent1">
//         <header>
//           <Navbar />
//         </header>
//       </div>

//       <Container className="container">
//         {/* grandparent1 */}
//         <Typography variant="h5" className="h5" gutterBottom>
//           EMI Calculator
//         </Typography>

//         <Grid container spacing={4} className="gridContainer">
//           <Grid item xs={6} sm={6} md={4}>
//             <Paper className="paper">
//               <Typography variant="h6" className="Typography">
//                 Enter Loan Details
//               </Typography>
//               <Divider />

//               <Box className="formControl">
//                 <TextField
//                   fullWidth
//                   label="Loan Amount"
//                   variant="outlined"
//                   type="number"
//                   size="small"
//                   name="loanAmount"
//                   value={emiData.loanAmount}
//                   onChange={handleChange}
//                   inputProps={{ min: 100000, max: 200000 }}
//                 />
//               </Box>
//               <Box className="formControl">
//                 <Typography className="Typography">Interest Rate</Typography>

//                 <Slider
//                   className="slider"
//                   value={emiData.interest}
//                   size="small"
//                   name="interest"
//                   onChange={(e, value) =>
//                     handleChange({ target: { name: "interest", value } })
//                   }
//                   aria-labelledby="continuous-slider"
//                   valueLabelDisplay="auto"
//                   min={10}
//                   max={24}
//                   step={0.1}
//                 />
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   type="number"
//                   size="small"
//                   label="INTEREST"
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   name="interest"
//                   value={emiData.interest}
//                   onChange={handleChange}
//                   inputProps={{ min: 10, max: 24, step: 0.1 }}
//                 />
//               </Box>

//               <Box>
//                 <TextField
//                   fullWidth
//                   label="Tenure (Months)"
//                   variant="outlined"
//                   type="number"
//                   size="small"
//                   name="tenureMonth"
//                   value={emiData.tenureMonth}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Tenure (Years)"
//                   id="outlined-number"
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   variant="outlined"
//                   size="small"
//                   type="number"
//                   value={TenureYear}
//                   disabled
//                 />
//               </Box>
//             </Paper>
//           </Grid>

//           {/* Grandparent2 */}
//           <Grid item xs={6} sm={6} md={4}>
//             <Paper className="paper">
//               <Typography variant="h6" className="Typography">
//                 {" "}
//                 Your EMI DETAILS
//               </Typography>

//               <Divider />

//               <Box className="formControl">
//                 <Typography variant="h5">Loan EMI: ₹{emiValue}</Typography>
//               </Box>

//               <Box className="formControl">
//                 <Typography variant="h5">
//                   Total Interest Payable: ₹{TotalInterest}
//                 </Typography>
//               </Box>

//               <Box className="formControl">
//                 <Typography variant="h5">Total Payment:₹{totalAmt}</Typography>
//               </Box>

//             </Paper>
//           </Grid>
//           {/* Grandparent3          */}

//               <Grid item xs={12} sm={12} md={4}>
//       <Paper className="paper">
//         <div className="doughnutchart">
//           <Doughnut
//             data={{
//               labels: ["Total Interest", "Total Amount"],
//               datasets: [
//                 {
//                   data: [TotalInterest, totalAmt],
//                   backgroundColor: ["blue", "lightblue"],
//                 },
//               ],
//             }}
//           />
//         </div>
//       </Paper>
//     </Grid>

//         </Grid>
//       </Container>

//     </div>

//   );
// }


import "./EmiCal.css";
import { useState } from "react";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Navbar from "../Navbar";

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
    <div className="GrandParent row">
      <div className="grandparent1">
        <header>
          <Navbar />
        </header>
      </div>

      <div className="container mt-5">
        <h3>EMI CALCULATOR</h3>

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
    </div>
  );
}
