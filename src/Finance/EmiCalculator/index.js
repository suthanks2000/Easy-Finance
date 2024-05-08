import { useState } from "react";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
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
      <div>
        <h1>Welcome to EmiCalculator</h1>
      </div>
      <div>
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
            placeholder="Enter in years"
            required
            onKeyUp={(e) =>
              setEmiData({
                ...emiDATA,
                tenure: { ...emiDATA.tenure, years: e.target.value },
              })
            }
          />

          <input
            type="number"
            min={11}
            max={84}
            placeholder="Enter in months"
            required
            onKeyUp={(e) =>
              setEmiData({
                ...emiDATA,
                tenure: { ...emiDATA.tenure, months: e.target.value },
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
          width={200}
          height={200}
        />
      </div>
    </>
  );
}
