import { useSelector,useDispatch } from "react-redux";
import { setVehicleLoanDetail, setCarLoanView } from "../Redux-Toolkit/slices/VehicleLoanDetailCounter";


export default function VehicleLoanDetails(){


    const vehicleLoanDetail = useSelector((state) => state.vehicleLoan.vehicleLoanDetail);
    const carLoanView = useSelector((state)=> state.vehicleLoan.carLoanView)
    // const userdata = useSelector((state) => state.regisLogin.userdata)
    const dispatch = useDispatch()

    function handleVehicleLoanDetail (){
        alert("success")
        console.log(vehicleLoanDetail)
    }
    return(
        <>
        <h1>Welcome to Vehicle Loan Details</h1>
        {JSON.stringify(vehicleLoanDetail)}
        <label>Vehicle Type</label>
        <select onChange={(e)=> dispatch(setVehicleLoanDetail({...vehicleLoanDetail,vehicleType:e.target.value}))}>
        <option>Select Vehicle</option>  
          <option onClick={ dispatch(setCarLoanView(true))}>Car</option>
          <option>Bike</option>
          </select>

          <div>
          <label>Employment Type</label>
          <input type="radio" name="EmploymentType" value="Salaried"  onChange={(e) =>
              dispatch(
                setVehicleLoanDetail({ ...vehicleLoanDetail, employmentType: e.target.value })
              )
            }/>Salaried
          <input type="radio" name="EmploymentType" value="SelfEmployed"  onChange={(e) =>
              dispatch(
                setVehicleLoanDetail({ ...vehicleLoanDetail, employmentType: e.target.value })
              )
            }/>Self Employed
          </div>

          <div>
          <label>Place of Work</label>
          <input
            type="text"
            placeholder="Enter your Place of work "
            required  onKeyUp={(e) =>
                dispatch(
                  setVehicleLoanDetail({ ...vehicleLoanDetail, placeOfWork: e.target.value })
                )
              }
          />
        </div>

        <div>
          <label>Job Title</label>
          <input
            type="text"
            placeholder="Enter your Job title"
            required onKeyUp={(e) =>
                dispatch(
                  setVehicleLoanDetail({ ...vehicleLoanDetail, jobTitle: e.target.value })
                )
              }
          />
        </div>

        <div>
          <label>Property Status</label>
          <select onChange={(e) =>
              dispatch(
                setVehicleLoanDetail({ ...vehicleLoanDetail, propertyStatus: e.target.value })
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
            required   onKeyUp={(e) =>
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
            required  onKeyUp={(e) =>
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
          <select  onChange={(e) =>
              dispatch(
                setVehicleLoanDetail({ ...vehicleLoanDetail, addressProof: e.target.value })
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
          <select  onChange={(e) =>
              dispatch(
                setVehicleLoanDetail({ ...vehicleLoanDetail, OHPFavorOf: e.target.value })
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
            required  onKeyUp={(e) =>
                dispatch(
                  setVehicleLoanDetail({ ...vehicleLoanDetail, yearsEmployed: e.target.value })
                )
              }
          />
        </div>

        <div>
          <label>Monthly NetIncome</label>
          <input
            type="number"
            placeholder="Enter your monthly net income"
            required  onKeyUp={(e) =>
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
            required  onKeyUp={(e) =>
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
            value="Yes"  onChange={(e) =>
                dispatch(
                  setVehicleLoanDetail({ ...vehicleLoanDetail, civilIssue: e.target.value })
                )
              }
          />
          Yes
          <input
            type="radio"
            name=" civilIssue"
            value="No"  onChange={(e) =>
                dispatch(
                  setVehicleLoanDetail({ ...vehicleLoanDetail, civilIssue: e.target.value })
                )
              }
          />
          No
        </div>
      

     
        <div>
          <label>Loan Amount</label>
          <input
            type="number"
            placeholder="Enter your loan amount"
            required  onKeyUp={(e) =>
                dispatch(
                  setVehicleLoanDetail({ ...vehicleLoanDetail, loanAmount: e.target.value })
                )
              }
          />
        </div>

        <div>
          <label>Interest</label>
          <input
            type="text"
            placeholder="Enter your interest"
            required   onKeyUp={(e) =>
                dispatch(
                  setVehicleLoanDetail({ ...vehicleLoanDetail, interest: e.target.value })
                )
              }
          />
        </div>

        <div>
          <label>Tenure</label>
          <input
            type="number"
            placeholder="Enter in years"
            required  onKeyUp={(e) =>
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
            required  onKeyUp={(e) =>
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
            type="number"  onKeyUp={(e) =>
                dispatch(setVehicleLoanDetail({ ...vehicleLoanDetail, emi: e.target.value }))
              }
            />
          
        </div>

        <div>
            
        </div>

        <button type="button" onClick={handleVehicleLoanDetail}>VehicleLoanDataSubmit</button>
      
        </>
    )
}