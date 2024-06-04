import { db } from "../FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


export default function ShowResult() {
  const [userData, setUsersData] = useState([]);
  const { loanId } = useParams();
  const navigate = useNavigate(); 

  const totalAmt= userData.map((e)=>e.emi * e.tenureMonth)
  const TotalInterest =userData.map((e)=>totalAmt - e.loanAmount )
 
  useEffect(() => {
      getFbData(); 
  },[]);

  const getFbData = async () => {
    const q = query(collection(db,"securedLoans"),where("id", "==", loanId));
    const docSnap = await getDocs(q)
    const data = [];

  docSnap.forEach((doc) =>{
      data.push(doc.data()); 
  });

    setUsersData(data);
  };
console.log(userData)

  return (
    <>
      <h1>Welcome to Result Page</h1>
      {
        userData.map((user)=>{
          return(
            <>
            <div>
                <p>LoanName:{user.loanType}</p>
                <p>LoanAmount:₹{user.loanAmount}</p>
                <p>Interest :{user.interest}%</p>
                <p>Tenure in Months:{user.tenureMonth}</p>
                <p>Emi:₹{user.emi}</p>
            </div>  

            <div>
            <button type="button" onClick={()=>navigate("/category")}>Go to Category</button>
            </div> 

            
          <div>
            <table border={12}>
              <thead>
                <th>loanAmount</th>
                <th>Interest</th>
                <th>Emi</th>
                <th>ToatalAmount</th>
                <th>ToatalInterest</th>
              </thead>
              <tbody border={2}>
                <tr>
                  <td>{user.loanAmount}</td>
                  <td>{user.interest}</td>
                  <td>{user.emi}</td>
                  <td>{totalAmt}</td>
                  <td>{TotalInterest}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <Pie
              data={{
                labels: ["Total Interest", "Total Amount"],
                datasets: [
                  {
                    data: [TotalInterest, totalAmt],
                    backgroundColor: ["yellow", "green"],
                  },
                ],
              }}
             
            />
          </div>  

            </>
          )
        })
      }
       
                   
            
            

        
        
    </>

  );
}
