import { db } from "../FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function LoanDatas(){
  const userdata = useSelector((state) => state.regisLogin.userdata);
 const [usersData, setUsersData] = useState([]);
const [spinner, setSpinner] = useState(true)

useEffect(() => {
    fetchData();  
}, []); 

const fetchData = async () => {
  const q = query(collection(db, "securedLoans"),where("uId", "==", userdata.uid));
  const docSnap = await getDocs(q);
  const data = [];

  docSnap.forEach((doc) => {
     
      data.push({ ...doc.data(), id: doc.id });
  });

  console.log(data)
  setUsersData(data);
  setSpinner(false)
  console.log(userdata.uid)
};
   

    return (
     
          <>
          { spinner ?
<>
<Spinner animation="grow" variant="info" />
</>
:
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
                      <td>{user.loanType}</td>
                      <td>{user.loanAmount}</td>
                   
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
}
</>
        ) 
    
        
          
      }