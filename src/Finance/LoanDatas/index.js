import { db } from "../FirebaseConfig";
import { collection, getDocs, query, where, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function LoanDatas(){
  const userdata = useSelector((state) => state.regisLogin.userdata);
  const { personalInfo, inputInfo } = useSelector((state) => state.personalDetail)
  const dispatch = useDispatch()
const [usersData, setUsersData] = useState([]);

const [ filterData, setFilterData ] = useState({})

const personalDetailInput = []

useEffect(() => {
    fetchData();  
}, []); // Trigger useEffect when userdata changes


const fetchData = async () => {
  const q = query(collection(db, "securedLoans"),where("uId", "==", userdata.uid));
  const docSnap = await getDocs(q);
  const data = [];

  docSnap.forEach((doc) => {
      // Accumulate data in an array
      data.push({ ...doc.data(), id: doc.id });
  });

  // Set state after loop completes
  console.log(data)
  setUsersData(data);
  console.log(userdata.uid)
};
   

    return (
     
          <>
            <h1>Welcome to Datas Page</h1>
            <table>
              <thead>
                <tr>
                  <th>Loan Type</th>
                  <th>Loan Amount</th>
                </tr>
              </thead>
              <tbody>
                {usersData.map((user, i) => {
                  return (
                    <tr key={i}>
                      <td>{user.employmentType}</td>
                      <td>{user.loanAmount}</td>
                   
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) 
    
        
          
      }