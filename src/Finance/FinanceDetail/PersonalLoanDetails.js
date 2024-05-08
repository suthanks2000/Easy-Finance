import { useSelector, useDispatch } from "react-redux";
import { setPlLoanInfo } from "../Redux-Toolkit/slices/PersonalLoanDetailCounter";
import { useNavigate } from "react-router-dom";
import { db } from "../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from "react";

export default function PersonalLoanDetail() {
  const plLoanInfo = useSelector(
    (state) => state.personelLoanDetail.plLoanInfo
  );
  const userdata = useSelector((state) => state.regisLogin.userdata);

  const intr = plLoanInfo.interest / 1200;
  const emiValue = plLoanInfo.tenure.months
    ? Math.round(
        (plLoanInfo.loanAmount * intr) /
          (1 - Math.pow(1 / (1 + intr), plLoanInfo.tenure.months))
      )
    : 0;
  console.log(emiValue);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = async () => {
    await localStorage.getItem("userToken");
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  const handlePersonalLoanDetail = async () => {

    
    if (
      plLoanInfo.employmentType == "" ||
      plLoanInfo.placeOfWork == "" ||
      plLoanInfo.jobTitle == "" ||
      plLoanInfo.propertyStatus == "" ||
      plLoanInfo.durationOfStayCurrentAddress.months == "" ||
      plLoanInfo.durationOfStayCurrentAddress.years == "" ||
      plLoanInfo.addressProof == "" ||
      plLoanInfo.OHPFavorOf == "" ||
      plLoanInfo.yearsEmployed == "" ||
      plLoanInfo.monthlyNetIncome == "" ||
      plLoanInfo.monthlyExpenses == "" ||
      plLoanInfo.civilIssue == "" ||
      plLoanInfo.purposeOfPersonalLoan == "" ||
      plLoanInfo.loanAmount == "" ||
      plLoanInfo.interest == "" ||
      plLoanInfo.tenure.years == "" ||
      plLoanInfo.tenure.months == "" ||
      plLoanInfo.emi == ""
    ) {
      alert("Please fill empty fields");
    } else {
      await addDoc(collection(db, "personelLoanDetails"), {
        ...plLoanInfo,
        uId: userdata.uid,
      });
      alert("Personal datas successfully submitted");
      dispatch(setPlLoanInfo({ ...plLoanInfo, emi: emiValue }));
      console.log(plLoanInfo.LoanType);
      navigate("/showresult");
    }
  

    
  };
useEffect(()=>{
  dispatch(setPlLoanInfo({ ...plLoanInfo, emi: emiValue }))

},[emiValue])

  return (
    <>
      <div>
        {JSON.stringify(plLoanInfo)}
        <h1>Welcome to Personal Loan</h1>
        <div>
          <label>EmploymentType:</label>
          <input
            type="radio"
            name="EmploymentType"
            value="Salaried"
            onChange={(e) =>
              dispatch(
                setPlLoanInfo({ ...plLoanInfo, employmentType: e.target.value })
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
                setPlLoanInfo({ ...plLoanInfo, employmentType: e.target.value })
              )
            }
          />
          SelfEmployed
        </div>
        <div>
          <label>PlaceOfWork:</label>
          <input
            type="text"
            placeholder="Enter your PlaceOfWork "
            required
            onKeyUp={(e) =>
              dispatch(
                setPlLoanInfo({ ...plLoanInfo, placeOfWork: e.target.value })
              )
            }
          />
        </div>
        <div>
          <label>JobTitle:</label>
          <input
            type="text"
            placeholder="Enter your Job tittle"
            required
            onKeyUp={(e) =>
              dispatch(
                setPlLoanInfo({ ...plLoanInfo, jobTitle: e.target.value })
              )
            }
          />
        </div>

        <div>
          <label>PropertyStatus</label>
          <select
            onChange={(e) =>
              dispatch(
                setPlLoanInfo({ ...plLoanInfo, propertyStatus: e.target.value })
              )
            }
          >
            <option>select the propertyStatus</option>
            <option>Owned</option>
            <option>Rented</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label>durationOfStayCurrentAddress:</label>
          <input
            type="number"
            placeholder="Enter in years"
            required
            onKeyUp={(e) =>
              dispatch(
                setPlLoanInfo({
                  ...plLoanInfo,
                  durationOfStayCurrentAddress: {
                    ...plLoanInfo.durationOfStayCurrentAddress,
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
                setPlLoanInfo({
                  ...plLoanInfo,
                  durationOfStayCurrentAddress: {
                    ...plLoanInfo.durationOfStayCurrentAddress,
                    months: e.target.value,
                  },
                })
              )
            }
          />
        </div>

        <div>
          <label>AddressProof</label>
          <select
            onChange={(e) =>
              dispatch(
                setPlLoanInfo({ ...plLoanInfo, addressProof: e.target.value })
              )
            }
          >
            <option>SelectAddressProof</option>
            <option>AadharCard</option>
            <option>Passport</option>
            <option>VoterId</option>
            <option>DrivingLicense</option>
            <option>BankStatement</option>
            <option>ElectricityBill</option>
            <option>GasBill</option>
            <option>WaterBill</option>
          </select>
        </div>

        <div>
          <label>OHPFavorOf</label>
          <select
            onChange={(e) =>
              dispatch(
                setPlLoanInfo({ ...plLoanInfo, OHPFavorOf: e.target.value })
              )
            }
          >
            <option>selectOHPFavourOf</option>
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
          <label>yearsEmployed</label>
          <input
            type="number"
            placeholder="Enter your yearsEmployed"
            required
            onKeyUp={(e) =>
              dispatch(
                setPlLoanInfo({ ...plLoanInfo, yearsEmployed: e.target.value })
              )
            }
          />
        </div>

        <div>
          <label>monthlyNetIncome</label>
          <input
            type="number"
            placeholder="Enter your monthly net income"
            required
            onKeyUp={(e) =>
              dispatch(
                setPlLoanInfo({
                  ...plLoanInfo,
                  monthlyNetIncome: e.target.value,
                })
              )
            }
          />
        </div>
        <div>
          <label>monthlyExpenses</label>
          <input
            type="number"
            placeholder="Enter your expense amount"
            required
            onKeyUp={(e) =>
              dispatch(
                setPlLoanInfo({
                  ...plLoanInfo,
                  monthlyExpenses: e.target.value,
                })
              )
            }
          />
        </div>

        <div>
          <label>CibilIssue</label>
          <input
            type="radio"
            name=" civilIssue"
            value="Yes"
            onChange={(e) =>
              dispatch(
                setPlLoanInfo({ ...plLoanInfo, civilIssue: e.target.value })
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
                setPlLoanInfo({ ...plLoanInfo, civilIssue: e.target.value })
              )
            }
          />
          No
        </div>

        <div>
          <label>purposeOfPersonalLoan</label>
          <select
            onChange={(e) =>
              dispatch(
                setPlLoanInfo({
                  ...plLoanInfo,
                  purposeOfPersonalLoan: e.target.value,
                })
              )
            }
          >
            <option>selectPerposeofLoan</option>
            <option>Travel</option>
            <option>Medical</option>
            <option>TakeOverExistingPersonelLoan</option>
            <option>Purchase</option>
            <option>Other</option>
          </select>
        </div>
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
              dispatch(
                setPlLoanInfo({ ...plLoanInfo, loanAmount: e.target.value })
              )
            }
          />
        </div>

        <div>
          <label>interest</label>
          <input
            type="text"
            min={10}
            max={24}
            placeholder="Enter your interest"
            required
            onKeyUp={(e) =>
              dispatch(
                setPlLoanInfo({ ...plLoanInfo, interest: e.target.value })
              )
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
              dispatch(
                setPlLoanInfo({
                  ...plLoanInfo,
                  tenure: {
                    ...plLoanInfo.tenure,
                    years: e.target.value,
                  },
                })
              )
            }
          />

          <input
            type="number"
            min={11}
            max={84}
            placeholder="Enter in months"
            required
            onKeyUp={(e) =>
              dispatch(
                setPlLoanInfo({
                  ...plLoanInfo,
                  tenure: {
                    ...plLoanInfo.tenure,
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
            value={emiValue}
            onChange={(e) =>
              dispatch(setPlLoanInfo({ ...plLoanInfo, emi: emiValue }))
            }
          />
        </div>
      </div>

      <div>
        <button type="button" onClick={handlePersonalLoanDetail}>
          ShowResult
        </button>

        <button type="button" onClick={handleSignout}>
          Sign Out
        </button>
      </div>
      <div></div>
    </>
  );
}
