
import axios from "axios";
import  {React, useEffect, useState } from "react";
import { Doughnut} from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRenderloaninfo} from "../Redux-Toolkit/slices/SecuredLoansCounter";
import CategoryNavbar from "../Category/categoryNavbar";



export default function ShowResult() {
  const [aitext, setaitext] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const { renderloaninfo} = useSelector((state) => state.securedLoans);
  const pricingHeaderBg="url('../../../public/assets/img/pricing-header-bg.jpg')"

  useEffect(()=>{
    fetchData()
  },[])

const fetchData = async () =>{
  const id = localStorage.getItem("loginUserId");
  const formdata = new FormData();
  formdata.append("id",id)
  await axios.post('https://PreethiJP.pythonanywhere.com/idbasedshowresult',formdata).then((res)=>{
  
    dispatch(setRenderloaninfo(res.data))
 
    console.log(res.data)
  
  }).catch((err)=>{
    alert(err)
    console.log(err)
    alert(err)
  })
}
useEffect(()=>{
  if (Object.keys(renderloaninfo).length > 0) {
    askai()
      }
},[renderloaninfo]) 

const askai = async () => {
  const {
    youownanyproperty,
    cibilissue,
    monthlynetincome,
    loanamount,
    interest,
    loantype
  } = renderloaninfo;
console.log(renderloaninfo)
  const data = {
    contents: [
      {
        parts: [
          {
            text: `you own any property? ${youownanyproperty}, you have a CIBIL issue? ${cibilissue}, your monthly income is ${monthlynetincome}, you want a loan amount ${loanamount} and interest is ${interest}%. Which bank sectors provide me ${loantype} and bank names inside bank sectors & probability of percentage and reason one line. Don't need other information.`
          }
        ]
      }
    ]
  };

  try {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBgjF2hc9ii_3VlcM9UfeD0nljBkZY_HkY',
      data
    );

    const generatedText = response.data.candidates[0].content.parts[0].text.replace(/[*#]/g, '');
    setaitext(generatedText);
  } catch (error) {
    console.error('Error fetching AI response:', error);
  }
};

const intr = renderloaninfo.interest / 1200;
const TenureYear = renderloaninfo.tenuremonth / 12 

const totalAmt = renderloaninfo.tenuremonth * renderloaninfo.EMI

const TotalInterest = totalAmt - renderloaninfo.loanamount

  return (
    <>
    
    {/* <div style={{overflowX:'hidden'}}> */}
          <CategoryNavbar />
      <div className="page-header position-relative" style={{
        backgroundImage: `url(${pricingHeaderBg})`,
        backgroundSize: 'cover',
        
      }}>
        </div>
        <span className="mask bg-gradient-primary opacity-6 height-200"></span>
         

<div className="row mt-6">
<h1 className="text-center">See Your {renderloaninfo.loantype} Result </h1>
  <div className="col-lg-6 col-sm-6 d-flex align-items-stretch">
    <div className="card w-70 h-80 mx-auto">
      <div className="card-header bg-white" style={{ border: "none" }}>
        <h4 className="mb-0">Your {renderloaninfo.loantype} DETAILS</h4>
        <h4 className="text-sm mb-0 text-capitalize font-weight-bold">& EMI Details Also</h4>
      </div>
      <div className="card-body border-radius-lg p-3">
        <div><h6>LoanAmount: ₹{renderloaninfo.loanamount}</h6></div>
        <div>
          <h6>Interest: %{renderloaninfo.interest}</h6>
        </div>
        <div><h6>EMI: ₹{renderloaninfo.EMI}</h6></div>
        <div><h6>TenureMonth: {renderloaninfo.tenuremonth}</h6></div>
        <div><h6>TenureYear: {TenureYear}</h6></div>
        <div><h6>TotalAmt: ₹{totalAmt}</h6></div>
        <div><h6>TotalInterest: %{TotalInterest}</h6></div>
      </div>
    </div>
  </div>

  <div className="col-lg-6 col-sm-6 d-flex align-items-stretch">
    <div className="card w-70 h-80 mx-auto" >
      <div className="card-header p-3 pb-0 bg-white" style={{ border: "none" }}>
        <h4 className="mb-0">Your {renderloaninfo.loantype} DETAILS</h4>
        <h4 className="text-sm mb-0 text-capitalize font-weight-bold">&doughnutchart</h4>
      </div>
      <div className="card-body border-radius-lg p-3">
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

<div className="w-70 mx-auto mt-5">
  <div className="card">
    <div className="card-header p-3 pb-0 bg-white" style={{ border: "none" }}>
      <h6 className="mb-0">Probability Based On Gemini AI</h6>
      <p className="text-sm mb-0 text-capitalize font-weight-bold"></p>
    </div>
    <div className="card-body border-radius-lg p-3">
      <div
        style={{
          border: "none",
          fontFamily: "Arial, sans-serif",
          fontSize: "15px",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          boxSizing: "border-box",
        }}
      >
        {aitext}
      </div>
    </div>
  </div>
</div>
    </>

  );
}
