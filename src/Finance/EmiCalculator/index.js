import "./EmiCal.css";

import { useState } from "react";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut} from "react-chartjs-2";
import { Link } from "react-router-dom";
import {
  TextField,
  Slider,
  Typography,
  Box,
  Container,
  Grid,
  Paper,
  Button,
  Divider,
} from "@mui/material";
import Navbar from "../Navbar";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function EmiCalculator() {
  const [emiData, setEmiData] = useState({});
  const intr = emiData.interest / 1200;
  const TenureYear = emiData.tenureMonth ? emiData.tenureMonth / 12 : null;

  const emiValue = emiData.tenureMonth
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

      <Container className="container">
        {/* grandparent1 */}
        <Typography variant="h5" className="h5" gutterBottom>
          EMI Calculator
        </Typography>

        <Grid container spacing={4} className="gridContainer">
          <Grid item xs={6} sm={6} md={4}>
            <Paper className="paper">
              <Typography variant="h6" className="Typography">
                Enter Loan Details
              </Typography>
              <Divider />

              <Box className="formControl">
                <TextField
                  fullWidth
                  label="Loan Amount"
                  variant="outlined"
                  type="number"
                  size="small"
                  name="loanAmount"
                  value={emiData.loanAmount}
                  onChange={handleChange}
                  inputProps={{ min: 100000, max: 200000 }}
                />
              </Box>
              <Box className="formControl">
                <Typography className="Typography">Interest Rate</Typography>

                <Slider
                  className="slider"
                  value={emiData.interest}
                  size="small"
                  name="interest"
                  onChange={(e, value) =>
                    handleChange({ target: { name: "interest", value } })
                  }
                  aria-labelledby="continuous-slider"
                  valueLabelDisplay="auto"
                  min={10}
                  max={24}
                  step={0.1}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  type="number"
                  size="small"
                  label="INTEREST"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="interest"
                  value={emiData.interest}
                  onChange={handleChange}
                  inputProps={{ min: 10, max: 24, step: 0.1 }}
                />
              </Box>

              <Box>
                <TextField
                  fullWidth
                  label="Tenure (Months)"
                  variant="outlined"
                  type="number"
                  size="small"
                  name="tenureMonth"
                  value={emiData.tenureMonth}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Tenure (Years)"
                  id="outlined-number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  size="small"
                  type="number"
                  value={TenureYear}
                  disabled
                />
              </Box>
            </Paper>
          </Grid>

          {/* Grandparent2 */}
          <Grid item xs={6} sm={6} md={4}>
            <Paper className="paper">
              <Typography variant="h6" className="Typography">
                {" "}
                Your EMI DETAILS
              </Typography>

              <Divider />

              <Box className="formControl">
                <Typography variant="h5">Loan EMI: ₹{emiValue}</Typography>
              </Box>

              <Box className="formControl">
                <Typography variant="h5">
                  Total Interest Payable: ₹{TotalInterest}
                </Typography>
              </Box>
             

              <Box className="formControl">
                <Typography variant="h5">Total Payment:₹{totalAmt}</Typography>
              </Box>
             
            </Paper>
          </Grid>
          {/* Grandparent3          */}

              <Grid item xs={12} sm={12} md={4}>
      <Paper className="paper">
        <div className="doughnutchart">
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
      </Paper>
    </Grid>
          
        </Grid>
      </Container>
      
    </div>

  );
}
