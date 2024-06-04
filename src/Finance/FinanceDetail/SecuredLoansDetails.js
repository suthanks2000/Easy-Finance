import { useSelector, useDispatch } from "react-redux";
import {setRenderedInfo, setSecuredLoansInfo,setUpdatedInfo} from "../Redux-Toolkit/slices/SecuredLoansCounter";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../FirebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useEffect } from "react";
import InputRadio from "./InputComponents/inputRadio";
import InputDropdown from "./InputComponents/inputDropdown";
import InputTextAndNumber from "./InputComponents/inputText&Number";
import 'bootstrap/dist/css/bootstrap.min.css'; 


export default function SecuredLoansDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { securedLoansInfo,inputInfo, renderedInfo,updatedinfo } = useSelector((state) => state.securedLoans);
  const userdata = useSelector((state) => state.regisLogin.userdata);
  const { loanName } = useParams();
  
const tyear = securedLoansInfo.tenureMonth?  securedLoansInfo.tenureMonth/12 : null
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

useEffect(() => { 
  dispatch(setUpdatedInfo(inputInfo));
}, [inputInfo]);
  
    
useEffect(()=>{
    dispatch(setSecuredLoansInfo({}))
},[])

useEffect(()=>{
  if(securedLoansInfo.vehicleType  === "bike"){
    const {carType,secondCarCondition,registeredMonth,registeredYear,...rest} =securedLoansInfo
    console.log(rest)
    dispatch(setSecuredLoansInfo(rest))
    // dispatch(setInputInfo(inputInfo))
      
  }
},[securedLoansInfo.vehicleType])


  const handleSignout = async () => {
    await localStorage.getItem("userToken");
    localStorage.removeItem("userToken");
    navigate("/");
  };
  



useEffect(()=>{
  const viewLoanInput = [];
  updatedinfo.forEach((ele)=>{
  
    if(ele.loanType?.includes(loanName)){
  
     
        if(ele.inputType === "text" || ele.inputType === "number"){
          
            viewLoanInput.push(<InputTextAndNumber ele={ele} />)
  
        }
        if(ele.inputType === "radio"){
            viewLoanInput.push(<InputRadio ele={ele}/>)
        }  
        if (ele.inputType === "dropdown"){  
          viewLoanInput.push(<InputDropdown ele={ele} />)
        }
  
  }
  })
  dispatch(setRenderedInfo(viewLoanInput))
},[updatedinfo])


const handleSetLoanData = async () => {
  const filteredInputNames = inputInfo.filter(e => e.loanType.includes(loanName) && (!e?.hidden || e?.hidden === false)).map(e => e.inputName);
  console.log(filteredInputNames);

  const elgAmount =(securedLoansInfo.monthlyNetIncome - securedLoansInfo.monthlyExpenses) >= securedLoansInfo.emi*3
  console.log(elgAmount) 

  const notElgAmount =(securedLoansInfo.monthlyNetIncome - securedLoansInfo.monthlyExpenses) <= securedLoansInfo.emi*3
  console.log(notElgAmount) 

  const missingInputs = filteredInputNames.filter(inputName => !securedLoansInfo[inputName]);
  console.log('Missing Inputs:', missingInputs);

  if(filteredInputNames.some(inputName => !securedLoansInfo[inputName])){
    alert("pls fill the inputs")
    dispatch(setSecuredLoansInfo({}))

  }
  else if(securedLoansInfo.propertyStatus == "owned" && securedLoansInfo.CibilIssue == "no" && securedLoansInfo.monthlyNetIncome >= 25000 && elgAmount ) {
   const loanRef= await addDoc(collection(db, "securedLoans"), {
            ...securedLoansInfo,uId: userdata.uid,loanType:loanName,grade:"A"});
    const loanRefId=  loanRef.id   
       await updateDoc(doc(db,"securedLoans",loanRefId),{
        id:loanRefId,
       }
      )
    alert("grade A")
    navigate(`/showresult/${loanRefId}`)
    
  }
  else if(securedLoansInfo.propertyStatus == "rented" && securedLoansInfo.CibilIssue == "no" && securedLoansInfo.monthlyNetIncome  > 25000 ){
    const loanRef= await addDoc(collection(db, "securedLoans"), {
      ...securedLoansInfo,uId: userdata.uid,loanType:loanName,grade:"B"});
const loanRefId=  loanRef.id   
 await updateDoc(doc(db,"securedLoans",loanRefId),{
  id:loanRefId,
 }
)
    alert("grade B")
    navigate(`/showresult/${loanRefId}`)

  }
  else if(securedLoansInfo.propertyStatus == "rented" && securedLoansInfo.CibilIssue == "yes" && securedLoansInfo.monthlyNetIncome  > 15000 ){
    const loanRef= await addDoc(collection(db, "securedLoans"), {
      ...securedLoansInfo,uId: userdata.uid,loanType:loanName,grade:"C"});
const loanRefId=  loanRef.id   
 await updateDoc(doc(db,"securedLoans",loanRefId),{
  id:loanRefId,
 }
)
    alert("grade C")
    navigate(`/showresult/${loanRefId}`)

  }
  else {
   
    const loanRef= await addDoc(collection(db, "securedLoans"), {
      ...securedLoansInfo,uId: userdata.uid,loanType:loanName,grade:"D"});
const loanRefId=  loanRef.id   
 await updateDoc(doc(db,"securedLoans",loanRefId),{
  id:loanRefId,
 }
)
alert("grade D")

            navigate(`/showresult/${loanRefId}`)

  }

}

  return (
    <>
      
        {JSON.stringify(securedLoansInfo)}
        <h1>Welcome to {loanName}</h1>
          <div>
            {renderedInfo}
            <div>
              <div>
                <label>Tenure year</label>
                <input placeholder="tenure year" type="number" value={tyear} required disabled/>
              </div>
              <div>
                <label>EMI</label>
                <input
                placeholder="Your EMI Amount"
                type="number"
                value={emiValue}
                required
                disabled
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
