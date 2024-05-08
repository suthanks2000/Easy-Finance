import { useSelector, useDispatch } from "react-redux";
import {
  setSecuredLoansInfo,
  setPersonalLoanView,
  setPurposeOfPersonalLoan,
} from "../Redux-Toolkit/slices/SecuredLoansCounter";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from "react";

export default function SecuredLoansDetails() {
  const { securedLoansInfo, personalLoanView, purposeOfPersonalLoan } =
    useSelector((state) => state.securedLoans);
  const { loanName } = useParams();
  const userdata = useSelector((state) => state.regisLogin.userdata);

  const intr = securedLoansInfo.interest / 1200;
  const emiValue = securedLoansInfo.tenure.months
    ? Math.round(
        (securedLoansInfo.loanAmount * intr) /
          (1 - Math.pow(1 / (1 + intr), securedLoansInfo.tenure.months))
      )
    : 0;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = async () => {
    await localStorage.getItem("userToken");
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  function handleSecuredLoanDetails() {
    if (loanName === "personalloan") {
      personalLoanDetails();
    } else {
      homeBusinessDetails();
    }
  }

  const personalLoanDetails = async () => {
    if (
      securedLoansInfo.employmentType == "" ||
      securedLoansInfo.placeOfWork == "" ||
      securedLoansInfo.jobTitle == "" ||
      securedLoansInfo.propertyStatus == "" ||
      securedLoansInfo.durationOfStayCurrentAddress.months == "" ||
      securedLoansInfo.durationOfStayCurrentAddress.years == "" ||
      securedLoansInfo.addressProof == "" ||
      securedLoansInfo.OHPFavorOf == "" ||
      securedLoansInfo.yearsEmployed == "" ||
      securedLoansInfo.monthlyNetIncome == "" ||
      securedLoansInfo.monthlyExpenses == "" ||
      securedLoansInfo.civilIssue == "" ||
      purposeOfPersonalLoan == "" ||
      securedLoansInfo.loanAmount == "" ||
      securedLoansInfo.interest == "" ||
      securedLoansInfo.tenure.years == "" ||
      securedLoansInfo.tenure.months == "" ||
      securedLoansInfo.emi == ""
    ) {
      alert("Please fill empty fields");
    } else {
      await addDoc(collection(db, "securedLoans"), {
        ...securedLoansInfo,
        purposeOfPersonalLoan,

        uId: userdata.uid,
      });
      alert("Personal datas successfully submitted");
      dispatch(setSecuredLoansInfo({ ...securedLoansInfo, emi: emiValue }));
      console.log(securedLoansInfo.LoanType);
      console.log(securedLoansInfo);

      navigate("/showresult");
    }
  };

  const homeBusinessDetails = async () => {
    if (
      securedLoansInfo.employmentType == "" ||
      securedLoansInfo.placeOfWork == "" ||
      securedLoansInfo.jobTitle == "" ||
      securedLoansInfo.propertyStatus == "" ||
      securedLoansInfo.durationOfStayCurrentAddress.months == "" ||
      securedLoansInfo.durationOfStayCurrentAddress.years == "" ||
      securedLoansInfo.addressProof == "" ||
      securedLoansInfo.OHPFavorOf == "" ||
      securedLoansInfo.yearsEmployed == "" ||
      securedLoansInfo.monthlyNetIncome == "" ||
      securedLoansInfo.monthlyExpenses == "" ||
      securedLoansInfo.civilIssue == "" ||
      securedLoansInfo.loanAmount == "" ||
      securedLoansInfo.interest == "" ||
      securedLoansInfo.tenure.years == "" ||
      securedLoansInfo.tenure.months == "" ||
      securedLoansInfo.emi == ""
    ) {
      alert("Please fill empty fields");
    } else {
      await addDoc(collection(db, "securedLoans"), {
        ...securedLoansInfo,

        uId: userdata.uid,
      });

      console.log(securedLoansInfo);

      alert("Personal datas successfully submitted");

      navigate("/showresult");
    }
  };

  useEffect(() => {
    dispatch(setSecuredLoansInfo({ ...securedLoansInfo, emi: emiValue }));
  }, [emiValue]);

  useEffect(() => {
    loanType();
  }, [loanName]);

  function loanType() {
    if (loanName === "personalloan") {
      dispatch(setPersonalLoanView(true));
      dispatch(
        setSecuredLoansInfo({ ...securedLoansInfo, loanType: loanName })
      );
    } else {
      dispatch(setPersonalLoanView(false));

      dispatch(
        setSecuredLoansInfo({ ...securedLoansInfo, loanType: loanName })
      );
    }
  }

  return (
    <>
      <div>
        {JSON.stringify(securedLoansInfo)}
        <h1>Welcome to {loanName}</h1>

        <div>
          <label>Loan Type</label>
          <select>
            <option>{loanName}</option>
          </select>
        </div>

        <div>
          <label>EmploymentType</label>
          <input
            type="radio"
            name="EmploymentType"
            value="Salaried"
            onChange={(e) =>
              dispatch(
                setSecuredLoansInfo({
                  ...securedLoansInfo,
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
                setSecuredLoansInfo({
                  ...securedLoansInfo,
                  employmentType: e.target.value,
                })
              )
            }
          />
          SelfEmployed
        </div>

        <div>
          <label>PlaceOfWork</label>
          <input
            type="text"
            placeholder="Enter your PlaceOfWork "
            required
            onKeyUp={(e) =>
              dispatch(
                setSecuredLoansInfo({
                  ...securedLoansInfo,
                  placeOfWork: e.target.value,
                })
              )
            }
          />
        </div>

        <div>
          <label>JobTitle</label>
          <input
            type="text"
            placeholder="Enter your Job tittle"
            required
            onKeyUp={(e) =>
              dispatch(
                setSecuredLoansInfo({
                  ...securedLoansInfo,
                  jobTitle: e.target.value,
                })
              )
            }
          />
        </div>

        <div>
          <label>PropertyStatus</label>
          <select
            onChange={(e) =>
              dispatch(
                setSecuredLoansInfo({
                  ...securedLoansInfo,
                  propertyStatus: e.target.value,
                })
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
          <label>durationOfStayCurrentAddress</label>
          <input
            type="number"
            placeholder="Enter in years"
            required
            onKeyUp={(e) =>
              dispatch(
                setSecuredLoansInfo({
                  ...securedLoansInfo,
                  durationOfStayCurrentAddress: {
                    ...securedLoansInfo.durationOfStayCurrentAddress,
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
                setSecuredLoansInfo({
                  ...securedLoansInfo,
                  durationOfStayCurrentAddress: {
                    ...securedLoansInfo.durationOfStayCurrentAddress,
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
                setSecuredLoansInfo({
                  ...securedLoansInfo,
                  addressProof: e.target.value,
                })
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
                setSecuredLoansInfo({
                  ...securedLoansInfo,
                  OHPFavorOf: e.target.value,
                })
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
                setSecuredLoansInfo({
                  ...securedLoansInfo,
                  yearsEmployed: e.target.value,
                })
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
                setSecuredLoansInfo({
                  ...securedLoansInfo,
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
                setSecuredLoansInfo({
                  ...securedLoansInfo,
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
                setSecuredLoansInfo({
                  ...securedLoansInfo,
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
                setSecuredLoansInfo({
                  ...securedLoansInfo,
                  civilIssue: e.target.value,
                })
              )
            }
          />
          No
        </div>

        <>
          {personalLoanView == true ? (
            <>
              <div>
                <label>purposeOfPersonalLoan</label>
                <select
                  onChange={(e) =>
                    dispatch(
                      setPurposeOfPersonalLoan({
                        purposeOfPersonalLoan: e.target.value,
                      })
                    )
                  }
                >
                  <option>selectPurposeofLoan</option>
                  <option>Travel</option>
                  <option>Medical</option>
                  <option>TakeOverExistingPersonelLoan</option>
                  <option>Purchase</option>
                  <option>Other</option>
                </select>
              </div>
            </>
          ) : null}
        </>

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
                setSecuredLoansInfo({
                  ...securedLoansInfo,
                  loanAmount: e.target.value,
                })
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
                setSecuredLoansInfo({
                  ...securedLoansInfo,
                  interest: e.target.value,
                })
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
                setSecuredLoansInfo({
                  ...securedLoansInfo,
                  tenure: {
                    ...securedLoansInfo.tenure,
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
                setSecuredLoansInfo({
                  ...securedLoansInfo,
                  tenure: {
                    ...securedLoansInfo.tenure,
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
              dispatch(
                setSecuredLoansInfo({ ...securedLoansInfo, emi: emiValue })
              )
            }
          />
        </div>
      </div>

      <div>
        <button type="button" onClick={handleSecuredLoanDetails}>
          ShowResult
        </button>

        <button type="button" onClick={handleSignout}>
          Sign Out
        </button>
      </div>
    </>
  );
}
