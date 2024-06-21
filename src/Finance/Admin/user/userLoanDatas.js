import React, { useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import { collection, getDocs, query, where, getDoc, doc, limit } from "firebase/firestore";
import { db } from "../../FirebaseConfig";
import jsPDF from "jspdf";
import AdminNavbar from "../adminNavbar";
import { useEffect } from "react";
import axios from "axios";

const UserLoanDatas = () => {
    const [adminData, setAdminData] = useState({});   //Stores form data entered by the admin.
    const [loanData, setLoanData] = useState([]);    //Stores the fetched loan data.
    const [viewLoanDatas, setViewLoanDatas] = useState(false);    //Toggles the visibility of the loan data table
    const [modalData, setModalData] = useState({ loanData: {}, personalData: {} });      //Stores data to be displayed in the modal (both loan and personal details)
    const [showModal, setShowModal] = useState(false);     //Toggles the visibility of the modal




    useEffect(()=>{
        getAllUserLoanDatas()
    },[])

const pricingHeaderBg="url('../../../public/assets/img/pricing-header-bg.jpg')"
    const getAllUserLoanDatas = async () => {
      await axios.get("https://disondys.pythonanywhere.com/allUserLoanData").then((res)=>{
        setLoanData(res.data)
        // alert(res.data)
        console.log("loandata",loanData)
      })
    }



    
    
    return (
        <>
           
<AdminNavbar />
      <div className="page-header position-relative" style={{
        backgroundImage: `url(${pricingHeaderBg})`,
        backgroundSize: 'cover'
      }}>
        </div>
        <span className="mask bg-gradient-primary opacity-6 height-200"></span>
<div className='container-fluid w-70 mt-8'>
<h2 className='text-center'>User Datas by Admin Control</h2>
<div className="card">
  <div className="table-responsive">
    <table className="table align-items-center mb-0">
      <thead>
        <tr>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Loan Id</th>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">User Uid</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Loan Type</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Assign Id</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">status</th>
        
        </tr>
      </thead>
      <tbody>
        {loanData.map((user, i) => (
          <tr key={i}>
            <td>
              <div className="d-flex px-2 py-1">
                <div className="d-flex flex-column justify-content-center">
                  <p className="text-xs text-secondary mb-0">{user.loan_id}</p>
                </div>
              </div>
            </td>
            <td>
              <p className="text-xs text-secondary mb-0">{user.uid}</p>
            </td>
            <td className="align-middle text-center text-sm">
              <span className="text-secondary text-xs font-weight-bold">{user.loan_type}</span>
            </td>
            <td className="align-middle text-center">
              <span className="badge badge-sm badge-danger">{user.assign_id}</span>
            </td>
            <td className="align-middle text-center">
              <span className="badge badge-sm badge-danger">{user.status}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
     </div>   

        </>
    );
};

export default UserLoanDatas;

