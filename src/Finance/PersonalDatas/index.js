import { db } from "../FirebaseConfig";
import { collection, getDocs, query, where, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function PersonalDatas(){
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
   

  inputInfo.forEach((ele, i) => {
    if (ele.inputType === "text" || ele.inputType === "number" || ele.inputType === "email") {
      personalDetailInput.push(
        <div key={i}>
          <label>{ele.inputLabel}</label>
          <input type={ele.inputType} name={ele.inputName} onChange={(e) => setFilterData({ ...filterData, [e.target.name]: e.target.value })} />
        </div>
      );
    }
  
    if (ele.inputType === "dropdown") {
      personalDetailInput.push(
        <div key={i}>
          <label>{ele.inputLabel}</label>
          <select name={ele.inputName} onChange={(e) =>setFilterData({ ...filterData, [e.target.name]: e.target.value })}>
            {ele.dropValue.map((e, index) => <option key={index}>{e}</option>)}
          </select>
        </div>
      );
    }
  
    if (ele.inputType === "radio") {
      personalDetailInput.push(
        <div key={i}>
          <label>{ele.inputLabel}</label>
          <input type={ele.inputType} name={ele.inputName} defaultValue={ele.inputValue} onChange={(e) => setFilterData({ ...filterData, [e.target.name]: e.target.value })} />
          <label>{ele.inputValue}</label>
        </div>
      );
    }
  });


    return (
     
          <>
            <h1>Welcome to Datas Page</h1>
            <table>
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
                      <td>{user.contact}</td>
                   
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) 
    
        
          
      }