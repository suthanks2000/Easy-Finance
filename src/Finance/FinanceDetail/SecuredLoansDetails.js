import { useSelector, useDispatch } from "react-redux";
import { setSecuredLoansInfo} from "../Redux-Toolkit/slices/SecuredLoansCounter";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

import MultiStepProgressBar from "./porgrassBar/progressBar.js";
import axios from "axios";
import CategoryNavbar from "../Category/categoryNavbar.js";

export default function SecuredLoansDetails() { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { securedLoansInfo} = useSelector((state) => state.securedLoans);
  const { loanName } = useParams();
  const [currentStep, setcurrentStep] = useState("1")
  const [warning, setwarning] = useState(false)
  const pricingHeaderBg="url('../../../public/assets/img/pricing-header-bg.jpg')"
  

  
const tyear = securedLoansInfo.tenureMonth?  securedLoansInfo.tenureMonth/12 : null
  const intr = securedLoansInfo.interest / 1200; // Convert annual interest rate to monthly
  const tenureYear = securedLoansInfo.tenureMonth / 12;
  const emiValue = securedLoansInfo.tenureMonth

    ? Math.round(
        (securedLoansInfo.loanAmount * intr) /
          (1 - Math.pow(1 / (1 + intr), securedLoansInfo.tenureMonth))
      )
    : null;

useEffect(() => { 
  dispatch(setSecuredLoansInfo({ ...securedLoansInfo, EMIAmount: emiValue,tenureYear: tenureYear }));
}, [emiValue]);


    
useEffect(()=>{
  if (Object.keys(securedLoansInfo).length > 0) {
    dispatch(setSecuredLoansInfo({}))  
      }

},[])

useEffect(()=>{
  if(securedLoansInfo.vehicleType  === "bike"){
    const {carType,secondCarCondition,registeredMonth,registeredYear,...rest} =securedLoansInfo
    console.log(rest)
    dispatch(setSecuredLoansInfo(rest))
      
  }
},[securedLoansInfo.vehicleType])

useEffect(()=>{
  if(securedLoansInfo.carType  === "newCar"){
    const {secondCarCondition,registeredMonth,registeredYear,...rest} =securedLoansInfo
    console.log(rest)
    dispatch(setSecuredLoansInfo(rest))
      
  }
},[securedLoansInfo.carType])

const handleOnchange = (e) => {
  dispatch(setSecuredLoansInfo({...securedLoansInfo,[e.target.name]:e.target.value}))
}

const handleNext = () => {
  
  const {
    employmentType,
    jobTitle,
    placeOfWork,
    youOwnAnyProperty,
    addressProof,
    yearsOfEmployed,
    monthlyNetIncome,
    monthlyExpense,
    ...rest
  } = securedLoansInfo;

  if( !employmentType || !jobTitle || !placeOfWork || !youOwnAnyProperty || !addressProof || !yearsOfEmployed || !monthlyNetIncome ||!monthlyExpense){
    setwarning(true)
  }
    else{
      setcurrentStep(2)
      setwarning(false)
    }
  
}

const validateForm = () => {
  const {
    purposeOfPersonalLoan,
    cibilissue,
    vehicleType,
    makeAndModel,
    variant,
    carType,
    secondCarCondition,
    registeredMonth,
    registeredYear,
    loanAmount,
    interest,
    tenureMonth,
    
  } = securedLoansInfo;


  if (loanName === 'personalloan' && (!purposeOfPersonalLoan || !cibilissue ||  !loanAmount|| !interest || !tenureMonth)){
    
      setwarning(true);
      return false
    
  } 
  else if (loanName === 'vehicleloan') {
    if (!vehicleType || !variant || !makeAndModel){
      setwarning(true);
      return false
    } 

    else if (vehicleType === 'car' && !carType){
      setwarning(true);
      return false
    } 
    else if (carType === 'usedCar' && (!secondCarCondition || !registeredMonth || !registeredYear)){
      setwarning(true)
      return false
    } 
      
  }
  else if ((loanName == "businessloan" || loanName== "homeloan") && (!cibilissue ||  !loanAmount|| !interest || !tenureMonth)){
    setwarning(true);
    return false
  }
  setwarning(false);     
return true
  

};


const handleSubmit =async () => {
  if(validateForm()){
    const id = localStorage.getItem("loginUserId")
    alert("sucess")
    const fromdata = new FormData();
    Object.keys(securedLoansInfo).forEach(key => {
      fromdata.append(key, securedLoansInfo[key]);
    });
    fromdata.append("loantype",loanName)
    fromdata.append("userId",id)


    axios.post('https://PreethiJP.pythonanywhere.com/submitsecuredLoans',fromdata).then((res)=>{
      alert(res.data.message)
      console.log(res.data)
      navigate('/showresult')
    }).catch((err)=>{
      alert(err)
      console.log(err)
    })
    

  }
  else{
    alert("pls fill correct detail")
  }
}

  

const handleSetLoanData = async () => { 
//   const filteredInputNames = inputInfo.filter(e => e.loanType.includes(loanName) && (!e?.hidden || e?.hidden === false)).map(e => e.inputName);
//   console.log(filteredInputNames);

//   const elgAmount =(securedLoansInfo.monthlyNetIncome - securedLoansInfo.monthlyExpenses) >= securedLoansInfo.emi*3
//   console.log(elgAmount) 

//   const notElgAmount =(securedLoansInfo.monthlyNetIncome - securedLoansInfo.monthlyExpenses) <= securedLoansInfo.emi*3
//   console.log(notElgAmount) 

//   const missingInputs = filteredInputNames.filter(inputName => !securedLoansInfo[inputName]);
//   console.log('Missing Inputs:', missingInputs);

//   if(filteredInputNames.some(inputName => !securedLoansInfo[inputName])){
//     alert("pls fill the inputs")
//     dispatch(setSecuredLoansInfo({}))

//   }
//   else if(securedLoansInfo.propertyStatus == "owned" && securedLoansInfo.CibilIssue == "no" && securedLoansInfo.monthlyNetIncome >= 25000 && elgAmount ) {
//    const loanRef= await addDoc(collection(db, "securedLoans"), {
//             ...securedLoansInfo,uId: userdata.uid,loanType:loanName,grade:"A"});
//     const loanRefId=  loanRef.id   
//        await updateDoc(doc(db,"securedLoans",loanRefId),{
//         id:loanRefId,
//        }
//       )
//     alert("grade A")
//     navigate(`/showresult/${loanRefId}`)
    
//   }
//   else if(securedLoansInfo.propertyStatus == "rented" && securedLoansInfo.CibilIssue == "no" && securedLoansInfo.monthlyNetIncome  > 25000 ){
//     const loanRef= await addDoc(collection(db, "securedLoans"), {
//       ...securedLoansInfo,uId: userdata.uid,loanType:loanName,grade:"B"});
// const loanRefId=  loanRef.id   
//  await updateDoc(doc(db,"securedLoans",loanRefId),{
//   id:loanRefId,
//  }
// )
//     alert("grade B")
//     navigate(`/showresult/${loanRefId}`)

//   }
//   else if(securedLoansInfo.propertyStatus == "rented" && securedLoansInfo.CibilIssue == "yes" && securedLoansInfo.monthlyNetIncome  > 15000 ){
//     const loanRef= await addDoc(collection(db, "securedLoans"), {
//       ...securedLoansInfo,uId: userdata.uid,loanType:loanName,grade:"C"});
// const loanRefId=  loanRef.id   
//  await updateDoc(doc(db,"securedLoans",loanRefId),{
//   id:loanRefId,
//  }
// )
//     alert("grade C")
//     navigate(`/showresult/${loanRefId}`)

//   }
//   else {
   
//     const loanRef= await addDoc(collection(db, "securedLoans"), {
//       ...securedLoansInfo,uId: userdata.uid,loanType:loanName,grade:"D"});
// const loanRefId=  loanRef.id   
//  await updateDoc(doc(db,"securedLoans",loanRefId),{
//   id:loanRefId,
//  }
// )
// alert("grade D")

//             navigate(`/showresult/${loanRefId}`)

//   }

}

  return (
    <>
          <CategoryNavbar />
      <div className="page-header position-relative" style={{
        backgroundImage: `url(${pricingHeaderBg})`,
        backgroundSize: 'cover'
      }}>
        </div>
        <span className="mask bg-gradient-primary opacity-6 height-200"></span>
      


        <h1 className="mt-8 d-flex align-items-center justify-content-center text-dark">Welcome to {loanName}</h1> 
        {/* {JSON.stringify(securedLoansInfo)} */}
        <div className="row w-50 mx-auto ">
        <div className="col-12">
          <div className="multisteps-form">
            <div className="row">
              <div className="col-12 col-lg-8 mx-auto my-4">
                <div className="card">
                  <div className="card-body">
                    <MultiStepProgressBar currentStep={currentStep}/>
                  </div>
                </div>
                {warning?
                      <div class="alert alert-warning alert-dismissible fade show" role="alert">
                      <span class="alert-icon"><i class="ni ni-like-2"></i></span>
                      <span class="alert-text"><strong>Warning!</strong> Pls Fill the inputs</span>
                      <button type="button" class="btn-close" data-bs-dismiss="alert" onClick={()=>setwarning(false)} aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                    :
                    null}
              </div>
            </div>
          </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 col-lg-8 m-auto">
            <form className="multisteps-form" >
            {currentStep == "1" ?
            <div className="card  p-3 border-radius-xl bg-white " data-animation="FadeIn">
            <h5 className="font-weight-bolder mb-0">Basic Details</h5>
            <p className="mb-0 text-sm">Mandatory informations</p>
            <div>
              <div className="row mt-3">
              <div class="col-12 col-sm-6">
              <label>Employment Type</label>
                <div>
                  <input class="form-check-input" type="radio" value="salaried" name="employmentType" id="EmploymentType1" onChange={handleOnchange} required/>
                  <label class="form-label" for="EmploymentType1">
                  Salaried
                  </label>
                </div>
                <div>
                  <input class="form-check-input" type="radio" value='selfEmployed' name="employmentType" id="EmploymentType2" onChange={handleOnchange} required/>
                  <label class="form-label" for="EmploymentType2">
                  SelfEmployed
                  </label>
                </div>
              </div>
                <div className="col-12 col-sm-6">
                  <label for="validationDefault01" class="form-label" >Job Title</label>
                  <input className="multisteps-form__input form-control" value={securedLoansInfo.jobTitle} id="validationDefault01" type="text" name="jobTitle" placeholder="eg. Enginner" onChange={handleOnchange} required />
                </div>
                <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                  <label for="placevalidation"class="form-label" >Place Of Work</label>
                  <input className="multisteps-form__input form-control" id="placevalidation" value={securedLoansInfo.placeOfWork} name="placeOfWork" type="text" placeholder="Enter Your Work" onChange={handleOnchange} required/>
                </div>
                <div class="col-12 col-sm-6">
                  <label for="propertyvalidation">You Own Any Property</label>
                <div>
                  <input class="form-check-input" type="radio" value={'yes'} name="youOwnAnyProperty" id="YouOwnAnyProperty3" onChange={handleOnchange} required/>
                  <label class="form-label" for="YouOwnAnyProperty3">
                  Yes
                  </label>
                </div>
                <div>
                  <input class="form-check-input" value={'no'} type="radio" name="youOwnAnyProperty" id="YouOwnAnyProperty4"  onChange={handleOnchange} required/>
                  <label class="form-label" for="YouOwnAnyProperty4">
                  No
                  </label>
                </div>
              </div> 
                <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                <label for="addressvalidation" class="form-label">Address Proof</label>
                    <select className="multisteps-form__select form-control"name="addressProof"value={securedLoansInfo.addressProof} id="addressvalidation" onChange={handleOnchange} required>
                        <option defaultValue>Select One</option>
                        <option value="aadharcard">Aadhar Card</option>
                        <option value="passport">Passport</option>
                        <option value="voterId">Voter ID</option>
                        <option value="driving license">Driving License</option>
                        <option value="bank statement">Bank Statement</option>
                        <option value="electricity bill">Electricity Bill</option>
                        <option value="gas bill">Gas Bill</option>
                        <option value="water bill">Water Bill</option>
                    </select>                        
                  </div>
                <div className="col-12 col-sm-6 ">
                  <label for="yearsvalidation" class="form-label">Years Of Employed</label>
                  <input className="multisteps-form__input form-control" id="yearsvalidation" value={securedLoansInfo.yearsOfEmployed} type="number" name="yearsOfEmployed" placeholder="Years" onChange={handleOnchange} required/>
                </div>
                <div className="col-12 col-sm-6 mt-3">
                  <label for="incomevalidation" class="form-label">Monthly Net Income</label>
                  <input className="multisteps-form__input form-control" id="incomevalidation" value={securedLoansInfo.monthlyNetIncome} type="number" name="monthlyNetIncome" placeholder="eg. 10000" onChange={handleOnchange} required/>
                </div>
                <div className="col-12 col-sm-6 mt-3">
                  <label for="expensevalidation" class="form-label">Monthly Expense</label>
                  <input className="multisteps-form__input form-control" id="expensevalidation" value={securedLoansInfo.monthlyExpense} type="number" name="monthlyExpense" placeholder="eg. 10000" onChange={handleOnchange} required/>
                </div>
              </div>
              <div className="button-row d-flex mt-4">
                <button className="btn bg-gradient-dark ms-auto mb-0 js-btn-next" type="button" title="Next" onClick={()=>handleNext()}>Next</button>
              </div>
            </div>
          </div>
          :null  
          }
          {currentStep =="2"?
          <div className="card  p-3 border-radius-xl bg-white " data-animation="FadeIn">
          <h5 className="font-weight-bolder">Finance Details</h5>
          <p className="mb-0 text-sm">Mandatory informations</p>
          <div className="multisteps-form__content">
            <div className="row mt-3">
              {loanName =='personalloan'?
            <div className="col-12 col-sm-6">
            <label>Purpose of Personal Loan</label>
            <select name="purposeOfPersonalLoan" className="multisteps-form__select form-control" onChange={handleOnchange}>
                <option >Select</option>
                <option value="travel">Travel</option>
                <option value="medical">Medical</option>
                <option value="take over existing personal loan">Take over existing personal loan</option>
                <option value="purchase">Purchase</option>
                <option value="other">Other</option>
            </select>
          </div>
          :null  
            }
              <div class="col-12 col-sm-6">
              <label>You Have Any Cibil Issuse</label>
              <div>
                <input class="form-check-input" type="radio" value='yes' name="cibilissue" id="cibilissue1" onChange={handleOnchange}/>
                <label class="form-check-label" for="cibilissue1">
                Yes
                </label>
              </div>
              <span></span>
              <div>
                <input class="form-check-input" type="radio" value='no' name="cibilissue" id="cibilissue2" onChange={handleOnchange}/>
                <label class="form-check-label" for="cibilissue2">
                No
                </label>
              </div>
            </div>
              {loanName == 'vehicleloan'?
              <>
                <div className="col-12 col-sm-4">
              <label>Vehicle Type</label>
              <select name="vehicleType" className="multisteps-form__select form-control" onChange={handleOnchange}>
                  <option >Select</option>
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
              </select>
          </div>
          <div className="col-12 col-sm-4">
              <label>Make & Model</label>
              <input type="text" name="makeAndModel" className="multisteps-form__input form-control" placeholder="Enter make and model" onChange={handleOnchange}/>
          </div>
          <div className="col-12 col-sm-4">
              <label>Variant</label>
              <input type="text" name="variant" className="multisteps-form__input form-control" placeholder="Enter variant" onChange={handleOnchange}/>
          </div>
          <div className="col-12 col-sm-4">
              <label>full price ofvechicle</label>
              <input type="number" name="fullpriceofvechicle" className="multisteps-form__input form-control" placeholder="Enter full price ofvechicle" onChange={handleOnchange} />
          </div>
          {securedLoansInfo.vehicleType == 'car'?
          <>
            <div className="col-12 col-sm-3">
            <label>Car Type</label>
            <select name="carType" className="multisteps-form__select form-control" onChange={handleOnchange}>
                <option value="select">Select</option>
                <option value="usedCar">Used Car</option>
                <option value="newCar">New Car</option>
            </select>
          </div>
          {securedLoansInfo.carType == 'usedCar'?
          <>
          <div className="col-12 col-sm-4">
              <label>Second car condition</label>
              <select name="secondCarCondition" className="multisteps-form__select form-control" onChange={handleOnchange}>
                  <option value="select">Select</option>
                  <option value="good">Good</option>
                  <option value="average">Average</option>
                  <option value="poor">Poor</option>
              </select>
          </div>
          <div className="col-6 col-sm-4">
              <label>Registered Month</label>
              <input type="number" name="registeredMonth" className="multisteps-form__input form-control" placeholder="Enter registered month" onChange={handleOnchange} />
          </div>
          <div className="col-6 col-sm-4">
              <label>Registered Year</label>
              <input type="number" name="registeredYear" className="multisteps-form__input form-control" placeholder="Enter registered year" onChange={handleOnchange} />
          </div>
          </>
        :
        null
        }
          </>
          :null  
        }
              </>:
          null  
            }
            <div className="col-12 col-sm-6">
                <label>Loan Amount</label>
                <input className="multisteps-form__input form-control" name="loanAmount" type="number" placeholder="eg . 1000000" onChange={handleOnchange} />
              </div>
              <div className="col-12 col-sm-3">
                <label>Interest</label>
                <input className="multisteps-form__input form-control"  name="interest" type="number" placeholder="eg. 5%" onChange={handleOnchange} />
              </div>
              <div className="col-12 col-sm-3 mt-3 mt-sm-0">
                <label>Tenure Month</label>
                <input className="multisteps-form__input form-control" name="tenureMonth" type="number" placeholder="eg. 12" onChange={handleOnchange} />
              </div>
              <div className="col-12 col-sm-3 mt-3 mt-sm-0">
                <label>Tenure Year</label>
                <input className="multisteps-form__input form-control"  value={tenureYear} name="tenureYear" type="number" placeholder="eg. 2 years" disabled/>
              </div>
              <div className="col-12 col-sm-3 mt-3 mt-sm-0">
                <label>EMI Amount</label>
                <input className="multisteps-form__input form-control" value={emiValue} name="EMIAmount" type="number" placeholder="eg. 1250000" disabled/>
              </div>
            </div>
            <div className="button-row d-flex mt-4">
              <button className="btn bg-gradient-light mb-0 js-btn-prev" type="button" title="Prev"onClick={()=>setcurrentStep(1)}>Prev</button>
              <button className="btn bg-gradient-dark ms-auto mb-0 js-btn-next" type="button" title="Next" onClick={handleSubmit}>submit</button>
            </div>
          </div>
        </div>
          :null}
            </form>
          </div>
        </div>
    </>
  );
}
