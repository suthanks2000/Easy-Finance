import { useSelector, useDispatch } from "react-redux";
import {setInputInfo, setSecuredLoansInfo} from "../Redux-Toolkit/slices/SecuredLoansCounter";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from "react";
import InputRadio from "./InputComponents/inputRadio";
import InputDropdown from "./InputComponents/inputDropdown";
import InputTextAndNumber from "./InputComponents/inputText&Number";

export default function SecuredLoansDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { securedLoansInfo,inputInfo } = useSelector((state) => state.securedLoans);
  const userdata = useSelector((state) => state.regisLogin.userdata);
  const { loanName } = useParams();
  
  const viewLoanInput = [];

  const intr = securedLoansInfo.interest / 1200; // Convert annual interest rate to monthly
  const tenureYear = securedLoansInfo.tenureMonth / 12;
  const emiValue = securedLoansInfo.tenureMonth
 
    ? Math.round(
        (securedLoansInfo.loanAmount * intr) /
          (1 - Math.pow(1 / (1 + intr), securedLoansInfo.tenureMonth))
      )
    : null;
    console.log(emiValue)

useEffect(() => {
  dispatch(setSecuredLoansInfo({ ...securedLoansInfo, emi: emiValue }));
}, [emiValue]);
  
    
useEffect(()=>{
    dispatch(setSecuredLoansInfo({}))
},[])

useEffect(()=>{
  if(securedLoansInfo.vehicleType  === "bike"){
    const {carType,secondCarCondition,registeredMonth,registeredYear,...rest} =securedLoansInfo
    console.log(rest)
    dispatch(setSecuredLoansInfo(rest))
    dispatch(setInputInfo(inputInfo))
      
  }
},[securedLoansInfo.vehicleType])


  const handleSignout = async () => {
    await localStorage.getItem("userToken");
    localStorage.removeItem("userToken");
    navigate("/login");
  };
  
 inputInfo.forEach((ele)=>{
  
  if(ele.loanType.includes(loanName)){

    if(!ele?.hidden || ele?.hidden === false){
    if(ele.inputType === "text" || ele.inputType === "number"){
        viewLoanInput.push(<InputTextAndNumber ele={ele}/>)
    }
    if(ele.inputType === "radio"){
        viewLoanInput.push(<InputRadio ele={ele}/>)
    }  
    if (ele.inputType === "dropdown"){  
      viewLoanInput.push(<InputDropdown ele={ele} />)
    }
  }
}
})


const handleSetLoanData = async () => {
  const filteredInputNames = inputInfo.filter(e => e.loanType.includes(loanName)).map(ele => ele.inputName);
  console.log(filteredInputNames);
  const elgAmount =(securedLoansInfo.monthlyNetIncome - securedLoansInfo.monthlyExpenses) >= securedLoansInfo.emi*3
  console.log(elgAmount) 
  const notElgAmount =(securedLoansInfo.monthlyNetIncome - securedLoansInfo.monthlyExpenses) <= securedLoansInfo.emi*3
  console.log(notElgAmount) 

 
  if(filteredInputNames.some(name => !securedLoansInfo[name])){
    alert("pls fill the inputs")
  }
  
  if(filteredInputNames.some(name => !securedLoansInfo[name])){
    alert("pls fill the inputs")
  }
  else if(securedLoansInfo.propertyStatus == "owned" && securedLoansInfo.CibilIssue == "no" && securedLoansInfo.monthlyNetIncome >= 25000 && elgAmount ) {
    await addDoc(collection(db, "securedLoans"), {
            ...securedLoansInfo,uId: userdata.uid,loanType:loanName,grade:"A"});
    alert("grade A")
  }
  else if(securedLoansInfo.CibilIssue == "no" && securedLoansInfo.monthlyNetIncome  > 15000 ){
    await addDoc(collection(db, "securedLoans"), {
      ...securedLoansInfo,uId: userdata.uid,loanType:loanName,grade:"B"});
    alert("grade B")
  }
  else if(securedLoansInfo.propertyStatus == "rented" && securedLoansInfo.CibilIssue == "yes" && securedLoansInfo.monthlyNetIncome  > 0 ){
    await addDoc(collection(db, "securedLoans"), {
      ...securedLoansInfo,uId: userdata.uid,loanType:loanName,grade:"C"});
   
    alert("grade C")
  }
  else {
    alert("submited")
   
   
  }
}

  return (
    <>
      
        {JSON.stringify(securedLoansInfo)}
        <h1>Welcome to {loanName}</h1>
          <div>
            {viewLoanInput}
            <div>
            <div>
                <label>Tenure Year</label>
                <input
                placeholder="Your Tenure year"
                type="number"
                value={tenureYear}
                />
              </div>
              <div>
                <label>EMI</label>
                <input
                placeholder="Your EMI Amount"
                type="number"
                value={emiValue}
                />
              </div>
            </div>
      </div>
      <div>
        <button type="button" onClick={handleSetLoanData}>
          ShowResult
        </button>

        <button type="button" onClick={handleSignout}>
          Sign Out
        </button>
      </div>
    </>
  );
}
