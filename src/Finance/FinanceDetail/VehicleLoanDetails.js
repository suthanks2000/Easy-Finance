import { useSelector,useDispatch } from "react-redux";
import { setVehicleLoanDetail, setCarLoanView, setBikeLoanView, setCarTypeView } from "../Redux-Toolkit/slices/VehicleLoanDetailCounter";

import { useSelector, useDispatch } from "react-redux";
import {
  setVehicleLoanDetail,
  setCarLoanView,
  setBikeLoanView,
  setCarTypeView,
} from "../Redux-Toolkit/slices/VehicleLoanDetailCounter";
import { setuserdata } from "../Redux-Toolkit/slices/RegLogCounter";
import { useEffect } from "react";

export default function VehicleLoanDetails() {


    const vehicleLoanDetail = useSelector((state) => state.vehicleLoan.vehicleLoanDetail);
    const carLoanView = useSelector((state)=> state.vehicleLoan.carLoanView)
    const bikeLoanView = useSelector((state)=> state.vehicleLoan.bikeLoanView)
    const carTypeView = useSelector((state)=> state.vehicleLoan.carTypeView)
    const userdata = useSelector((state) => state.regisLogin.userdata)
    const dispatch = useDispatch()

    function handleVehicleLoanDetail (){

      if (vehicleLoanDetail.vehicleType == "" || vehicleLoanDetail.carType == "" || vehicleLoanDetail.employmentType == "" || vehicleLoanDetail.placeOfWork == "" || vehicleLoanDetail.jobTitle == "" || vehicleLoanDetail.propertyStatus == "" || vehicleLoanDetail.durationOfStayCurrentAddress.months == "" || vehicleLoanDetail.durationOfStayCurrentAddress.years == "" || vehicleLoanDetail.addressProof == "" || vehicleLoanDetail.OHPFavorOf == "" || vehicleLoanDetail.yearsEmployed == "" || vehicleLoanDetail.monthlyNetIncome == "" || vehicleLoanDetail.monthlyExpenses == "" || vehicleLoanDetail.civilIssue == "" || vehicleLoanDetail.makeAndModel == "" || vehicleLoanDetail.variant == "" || vehicleLoanDetail.registeredMonth == "" || vehicleLoanDetail.registeredYear == "" || vehicleLoanDetail.secondCarCondition == "" || vehicleLoanDetail.fullPriceOfVehicle == "" || vehicleLoanDetail.loanAmount == "" || vehicleLoanDetail.interest == "" || vehicleLoanDetail.tenure.years == "" || vehicleLoanDetail.tenure.months == "" || vehicleLoanDetail.emi == ""){
        alert("Please fill empty fields")
      }
      else if(vehicleLoanDetail.vehicleType == "Bike" || vehicleLoanDetail.employmentType == "" || vehicleLoanDetail.placeOfWork == "" || vehicleLoanDetail.jobTitle == "" || vehicleLoanDetail.propertyStatus == "" || vehicleLoanDetail.durationOfStayCurrentAddress.months == "" || vehicleLoanDetail.durationOfStayCurrentAddress.years == "" || vehicleLoanDetail.addressProof == "" || vehicleLoanDetail.OHPFavorOf == "" || vehicleLoanDetail.yearsEmployed == "" || vehicleLoanDetail.monthlyNetIncome == "" || vehicleLoanDetail.monthlyExpenses == "" || vehicleLoanDetail.civilIssue == "" || vehicleLoanDetail.makeAndModel == "" || vehicleLoanDetail.variant == "" || vehicleLoanDetail.registeredMonth == "" || vehicleLoanDetail.registeredYear == "" || vehicleLoanDetail.secondCarCondition == "" || vehicleLoanDetail.fullPriceOfVehicle == "" || vehicleLoanDetail.loanAmount == "" || vehicleLoanDetail.interest == "" || vehicleLoanDetail.tenure.years == "" || vehicleLoanDetail.tenure.months == "" || vehicleLoanDetail.emi == ""){
          alert("Please fill empty fields")
      }
        else{
        alert("success")
        // dispatch(setVehicleLoanDetail({...vehicleLoanDetail,
        //   uId:userdata.uid}))
          console.log("uid",vehicleLoanDetail.uId)
        console.log(vehicleLoanDetail)
        alert("bike detail filled")
        console.log(restOfData)
        
      }
    }
  }
  const handleCarTypeChange = (e) => {
    if (e.target.value === "Used Car") {
      dispatch(
        setVehicleLoanDetail({ ...vehicleLoanDetail, carType: e.target.value })
      );
      dispatch(setCarTypeView(true));
    } else if (e.target.value === "New Car") {
      dispatch(
        setVehicleLoanDetail({ ...vehicleLoanDetail, carType: e.target.value })
      );
      dispatch(setCarTypeView(false));
    }
  };

  const handleVehicleTypeChange = (e) => {
    dispatch(
      setVehicleLoanDetail({
        ...vehicleLoanDetail,
        vehicleType: e.target.value,
      })
    );

    if (e.target.value === "Car") {
      dispatch(setCarLoanView(true));
    } else if (e.target.value === "Bike") {
      dispatch(setCarLoanView(false));
      dispatch(setCarTypeView(false));
      dispatch(setBikeLoanView(true));
    }
  };

  const jsnd = [
    {
      label:"v_typ"
    },
    {
      label:"add"
    }
  ]
let a = []
  jsnd.forEach((e)=>{

    let c = "";

    
    a.push(<input type="text" />)
  })
  return (
    <>
      <div>
      <h1>Welcome to Vehicle Loan Details</h1>
      </div>
      {JSON.stringify(vehicleLoanDetail)}
      <>
        <div>
{a}
         
          <label>Vehicle Type</label>
          <select
            onChange={(e) => {
              handleVehicleTypeChange(e);
            }}
          >
            <option>Select Vehicle</option>
            <option>Car</option>
            <option>Bike</option>
          </select>
        </div>
        <div>
          {carLoanView ? 
            
              <div>
                <div>
                <label>Car Type</label>
                <select
                  onChange={(e) => {
                    handleCarTypeChange(e);
                  }}
                >
                  <option>Select Vehicle</option>
                  <option>New Car</option>
                  <option>Used Car</option>
                </select>
                </div>
                <div>
                  <label>Variant</label>
                  <input
                    type="text"
                    placeholder="Enter variant"
                    required
                    onKeyUp={(e) =>
                      dispatch(
                        setVehicleLoanDetail({
                          ...vehicleLoanDetail,
                          variant: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <div>
                  <label>Registered Month</label>
                  <input
                    type="text"
                    placeholder="Enter registered month"
                    required
                    onKeyUp={(e) =>
                      dispatch(
                        setVehicleLoanDetail({
                          ...vehicleLoanDetail,
                          registeredMonth: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <div>
                  <label>Registered Year</label>
                  <input
                    type="text"
                    placeholder="Enter registered year"
                    required
                    onKeyUp={(e) =>
                      dispatch(
                        setVehicleLoanDetail({
                          ...vehicleLoanDetail,
                          registeredYear: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <div>
                  <label>Full price of vehicle</label>
                  <input
                    type="text"
                    placeholder="Enter full price of vehicle"
                    required
                    onKeyUp={(e) =>
                      dispatch(
                        setVehicleLoanDetail({
                          ...vehicleLoanDetail,
                          fullPriceOfVehicle: e.target.value,
                        })
                      )
                    }
                  />
                </div>
              </div>
              
            
           : null}
        </div>
        <div>
        {bikeLoanView ? 
          <div>
            <div>
              <label>Make & Model</label>
              <input
                type="text"
                placeholder="Enter make and model"
                required
                onKeyUp={(e) =>
                  dispatch(
                    setVehicleLoanDetail({
                      ...vehicleLoanDetail,
                      makeAndModel: e.target.value,
                    })
                  )
                }
              />
            </div>

            <div>
              <label>Variant</label>
              <input
                type="text"
                placeholder="Enter variant"
                required
                onKeyUp={(e) =>
                  dispatch(
                    setVehicleLoanDetail({
                      ...vehicleLoanDetail,
                      variant: e.target.value,
                    })
                  )
                }
              />
            </div>

            <div>
              <label>Registered Month</label>
              <input
                type="text"
                placeholder="Enter registered month"
                required
                onKeyUp={(e) =>
                  dispatch(
                    setVehicleLoanDetail({
                      ...vehicleLoanDetail,
                      registeredMonth: e.target.value,
                    })
                  )
                }
              />
            </div>

            <div>
              <label>Registered Year</label>
              <input
                type="text"
                placeholder="Enter registered year"
                required
                onKeyUp={(e) =>
                  dispatch(
                    setVehicleLoanDetail({
                      ...vehicleLoanDetail,
                      registeredYear: e.target.value,
                    })
                  )
                }
              />
            </div>

            <div>
              <label>Full price of vehicle</label>
              <input
                type="text"
                placeholder="Enter full price of vehicle"
                required
                onKeyUp={(e) =>
                  dispatch(
                    setVehicleLoanDetail({
                      ...vehicleLoanDetail,
                      fullPriceOfVehicle: e.target.value,
                    })
                  )
                }
              />
            </div>
          </div>
         : null}
        </div>
        <div>
        {carTypeView ? 
          <>
            <label>Second car condition</label>
            <select
              onChange={(e) =>
                dispatch(
                  setVehicleLoanDetail({
                    ...vehicleLoanDetail,
                    secondCarCondition: e.target.value,
                  })
                )
              }
            >
              <option>Select second car condition</option>
              <option>Good</option>
              <option>Average</option>
              <option>Poor</option>
            </select>
          </>
         : null}
        </div>
        <div>
          <label>Employment Type</label>
          <input
            type="radio"
            name="EmploymentType"
            value="Salaried"
            onChange={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  employmentType: e.target.value,
                })
              )
            }
          />
          Salaried
          <input
            type="radio"
            name="EmploymentType"
            value="SelfEmployed"
            onChange={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  employmentType: e.target.value,
                })
              )
            }
          />
          Self Employed
        </div>
        <div>
          <label>Place of Work</label>
          <input
            type="text"
            placeholder="Enter your Place of work "
            required
            onKeyUp={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  placeOfWork: e.target.value,
                })
              )
            }
          />
        </div>

        <div>
          <label>Job Title</label>
          <input
            type="text"
            placeholder="Enter your Job title"
            required
            onKeyUp={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  jobTitle: e.target.value,
                })
              )
            }
          />
        </div>

        <div>
          <label>Property Status</label>
          <select
            onChange={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  propertyStatus: e.target.value,
                })
              )
            }
          >
            <option>Select the propertyStatus</option>
            <option>Owned</option>
            <option>Rented</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label>Duration of Stay Current Address</label>
          <input
            type="number"
            placeholder="Enter in years"
            required
            onKeyUp={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  durationOfStayCurrentAddress: {
                    ...vehicleLoanDetail.durationOfStayCurrentAddress,
                    years: e.target.value,
                  },
                })
              )
            }
          />

          <input
            type="number"
            placeholder="Enter in months"
            required
            onKeyUp={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  durationOfStayCurrentAddress: {
                    ...vehicleLoanDetail.durationOfStayCurrentAddress,
                    months: e.target.value,
                  },
                })
              )
            }
          />
        </div>

        <div>
          <label>Address Proof</label>
          <select
            onChange={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  addressProof: e.target.value,
                })
              )
            }
          >
            <option>Select Address Proof</option>
            <option>Aadhar Card</option>
            <option>Passport</option>
            <option>Voter Id</option>
            <option>Driving License</option>
            <option>Bank Statement</option>
            <option>Electricity Bill</option>
            <option>Gas Bill</option>
            <option>Water Bill</option>
          </select>
        </div>

        <div>
          <label>OHP Favor of</label>
          <select
            onChange={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  OHPFavorOf: e.target.value,
                })
              )
            }
          >
            <option>Select OHP Favour of</option>
            <option>Self</option>
            <option>Spouse</option>
            <option>Father</option>
            <option>Mother</option>
            <option>GrandFather</option>
            <option>GrandMother</option>
            <option>Son</option>
            <option>None</option>
          </select>
        </div>

        <div>
          <label>Years Employed</label>
          <input
            type="number"
            placeholder="Enter your yearsEmployed"
            required
            onKeyUp={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  yearsEmployed: e.target.value,
                })
              )
            }
          />
        </div>

        <div>
          <label>Monthly NetIncome</label>
          <input
            type="number"
            placeholder="Enter your monthly net income"
            required
            onKeyUp={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  monthlyNetIncome: e.target.value,
                })
              )
            }
          />
        </div>

        <div>
          <label>Monthly Expenses</label>
          <input
            type="number"
            placeholder="Enter your expense amount"
            required
            onKeyUp={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  monthlyExpenses: e.target.value,
                })
              )
            }
          />
        </div>

        <div>
          <label>Cibil Issue</label>
          <input
            type="radio"
            name=" civilIssue"
            value="Yes"
            onChange={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  civilIssue: e.target.value,
                })
              )
            }
          />
          Yes
          <input
            type="radio"
            name=" civilIssue"
            value="No"
            onChange={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  civilIssue: e.target.value,
                })
              )
            }
          />
          No
        </div>
      </>
      <div>
        <div>
          <label>Loan Amount</label>
          <input
            type="number"
            placeholder="Enter your loan amount"
            required
            onKeyUp={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  loanAmount: e.target.value,
                })
              )
            }
          />
        </div>

        <div>
          <label>Interest</label>
          <input
            type="text"
            placeholder="Enter your interest"
            required
            onKeyUp={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  interest: e.target.value,
                })
              )
            }
          />
        </div>

        <div>
          <label>Tenure</label>
          <input
            type="number"
            placeholder="Enter in years"
            required
            onKeyUp={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  tenure: {
                    ...vehicleLoanDetail.tenure,
                    years: e.target.value,
                  },
                })
              )
            }
          />

          <input
            type="number"
            placeholder="Enter in months"
            required
            onKeyUp={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  tenure: {
                    ...vehicleLoanDetail.tenure,
                    months: e.target.value,
                  },
                })
              )
            }
          />
        </div>

        <div>
          <label>EMI</label>
          <input
            type="number"
            onKeyUp={(e) =>
              dispatch(
                setVehicleLoanDetail({
                  ...vehicleLoanDetail,
                  emi: e.target.value,
                })
              )
            }
          />
        </div>
      </div>
  
      <div>
        <button type="button" onClick={handleVehicleLoanDetail}>
          Submit
        </button>
      </div>
    </>
  );
}
