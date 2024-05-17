import { db } from "../FirebaseConfig";
import { collection, getDocs, query, where, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { useSelector,useDispatch } from "react-redux";

export default function PersonalDatas(){
  const userdata = useSelector((state) => state.regisLogin.userdata);
  const { personalInfo, inputInfo } = useSelector((state) => state.personalDetail)
  const dispatch = useDispatch()
const [usersData, setUsersData] = useState([]);

const [ filterData, setFilterData ] = useState([])
const prasedata = filterData[0]
console.log(prasedata)

useEffect(() => {
    fetchPersoanlData();
    fetchLoanData();
}, []); // Trigger useEffect when userdata changes


const fetchPersoanlData = async () => {// fetch personalDetail function
  const q = query(collection(db, "personalDetails"),where("uid", "==", userdata.uid));
  const docSnap = await getDocs(q);
  const data = [];

  docSnap.forEach((doc) => {
      // Accumulate data in an array
      data.push({ ...doc.data(), id: doc.id });
  });

  // Set state after loop completes
  setUsersData(data);
  console.log("usersData",usersData); // This won't show the updated state immediately
  console.log(userdata.uid)
};

const fetchLoanData = async () => {// fetch loans function
  const q = query(collection(db, "securedLoans"),where("uId", "==", userdata.uid));
  const docSnap = await getDocs(q);

  const dataloan = [];
  docSnap.forEach((doc) => {
      // Accumulate data in an array
      dataloan.push({ ...doc.data(), id: doc.id });
  });
console.log(dataloan)
setFilterData(dataloan)
};
console.log(filterData)



    return (
     
          <>
            <h1>Welcome to Datas Page</h1>
            <table border={1}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Loan Type</th>
                  <th>Loan Amount</th>
                </tr>
              </thead>
              <tbody>
                {usersData.map((user, i) => {
                  return (
                    <tr key={i}>
                      <td>{user.firstName} {user.lastName}</td>
                      <td>{prasedata.loanType}</td>
                      <td>{prasedata.loanAmount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) 
    
        
          
      }