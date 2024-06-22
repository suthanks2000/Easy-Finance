
import Spinner from 'react-bootstrap/Spinner';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';

import CategoryNavbar from "../Category/categoryNavbar.js";



export default function LoanDatas(){
 const [usersData, setUsersData] = useState([]);
const [spinner, setSpinner] = useState(true)
  const pricingHeaderBg="url('../../../public/assets/img/pricing-header-bg.jpg')"

useEffect(() => {
    fetchData();  
}, []); 


const fetchData = async () => {
  const uid=localStorage.getItem("loginUserId")
  const token=localStorage.getItem("Token")


const data=new FormData()
data.append("id",uid)
const headers = { Authorization: `Bearer ${token}` };

  axios.post("https://PreethiJP.pythonanywhere.com/idBasedUserLoanDatas",data,{headers}).then((res)=>{
    setUsersData(res.data)
    console.log(res.data)
    // alert(res.data)
    setSpinner(false)
  }).catch((error)=>{
    console.log(error)
    alert(error)
  })

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
      

<div className='container-fluid w-70 mt-7'>
<div>
  <h2>User Apply Loans</h2>
</div>
<div className="card">
<div className="table-responsive">
<table className="table align-items-center mb-0">
<thead>
<tr>
<th className="text-uppercase text-secondary text-xxs font-weight-bolder font-weight-bold">LoanType</th>
<th className="text-uppercase text-secondary text-xxs font-weight-bolder ps-2 font-weight-bold">LoanAmount₹</th>
<th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder font-weight-bold">INTEREST(%)</th>
<th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder font-weight-bold">TenureMonth</th>
<th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder font-weight-bold">EMI₹</th>
<th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder font-weight-bold">status</th>
</tr>
</thead>
<tbody>
{usersData.map((user, i) => (
<tr key={i}>
<td>
  <div className="d-flex px-2 py-1">
    <div className="d-flex flex-column justify-content-center">
      <p className="text-xs text-secondary mb-0 font-weight-bold">{user.loan_type}</p>
    </div>
  </div>
</td>
<td>
  <p className="text-xs text-secondary mb-0 font-weight-bold">{user.loan_amount}₹</p>
</td>
<td className="align-middle text-center text-sm">
  <span className="text-secondary text-xs font-weight-bold">{user.interest}</span>
</td>
<td className="align-middle text-center">
  <span className="text-secondary text-xs font-weight-bold">{user.tenure_month}</span>
</td>
<td className="align-middle text-center">
  <span className="text-secondary text-xs font-weight-bold">{user.EMI}₹</span>
</td>
<td className="align-middle text-center">
  <span className="text-secondary text-xs font-weight-bold">{user.status}</span>
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
</div>   

</>


        ) 
    
        
          
      }