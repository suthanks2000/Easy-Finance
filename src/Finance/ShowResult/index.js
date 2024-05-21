import { db } from "../FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function ShowResult() {
//   const userdata = useSelector((state) => state.regisLogin.userdata);
  const [userData, setUsersData] = useState([]);
  const { loanId } = useParams();
  const navigate = useNavigate(); 
  const add = userData[0]
  const totalAmt= add.tenureMonth * add.emi
  const TotalInterest = totalAmt - add.loanAmount
 
  useEffect(() => {
    
      getFbData();
    
  }, []);

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
       
            <div>
                <p>LoanName:{add.loanType}</p>
                <p>LoanAmount:₹{add.loanAmount}</p>
                <p>Interest :{add.interest}%</p>
                <p>Tenure in Months:{add.tenureMonth}</p>
                <p>Emi:₹{add.emi}</p>
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
                  <td>{add.loanAmount}</td>
                  <td>{add.interest}</td>
                  <td>{add.emi}</td>
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

  );
}
