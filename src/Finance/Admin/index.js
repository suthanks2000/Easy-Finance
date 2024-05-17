import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { collection, getDocs, query, where, limit, doc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

export default function Admin(){
    const[adminData,setAdminData]=useState({})
    const[loanData,setloanData]=useState([])
    const[viewLoanDatas,setViewLoanDatas]=useState(false)

const fetchLoanData = async () => {
    try {
        const q = query(
            collection(db, "securedLoans"),
            where("loanType", "==", adminData.SelectLoanType),
            where("grade", "==", adminData.selectGrade),limit(adminData.dataCount)
        );
        const docSnap = await getDocs(q);

        const table = docSnap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log(table);
        setloanData(table);
       
    } catch (error) {
        console.error("Error fetching loan data: ", error);
    }
};

const handleSubmit = () => {
    const requiredFields = ["SelectLoanType", "selectGrade" , "dataCount"]
    if(requiredFields.some(field => !adminData[field])) {
        alert("Pls fill empty fields")
    }
    else{
        setViewLoanDatas(true);
        fetchLoanData();
    }
};

    const handleAdminData = (e) => {// on change function 
        console.log(e)
        setAdminData({...adminData,[e.target.name]:e.target.value})
    }

    return(
        <>
        {JSON.stringify(adminData)}
        <h1>
            Welcome to Admin Page
        </h1>
        <div>
            <label>SelectLoanType</label>
            <select name="SelectLoanType" type="dropdown" defaultValue="" onChange={(e)=>handleAdminData(e)}>
                <option>SelectLoanType</option>
                <option value="personalloan">personalloan</option>
                <option value="businessloan">businessloan</option> 
                <option value="homeloan">homeloan</option> 
                <option value="vehicleloan">vehicleloan</option>                  
            </select>
        </div>
        <div>
        <label>Choose the Grade</label>
        <select name="selectGrade" type="dropdown" defaultValue="" onChange={(e)=>handleAdminData(e)}>
            <option>selectGrade</option>
            <option value="A">Grade A</option>
            <option value="B">Grade B</option>
            <option value="C">Grade C</option>
        </select>
        </div>
        <div>
            <label>Datas</label>
            <input type="number" defaultValue="" name="dataCount" min="10" placeholder="no Of datas" onChange={(e)=>handleAdminData(e)} required></input>
        </div>

        <div>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
        <center>
        {viewLoanDatas ? <div>
            <div style={{display:"flex", justifyContent:"space-around"}}>
            <h4>UserLoan Datas Table</h4>
            <button type="button" onClick={()=>setViewLoanDatas(false)}>hide table</button>
            </div>
               <Table  striped bordered hover variant="dark" size="sm">
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>LoanType</th>
                       <th>LoanAmount</th>
                       <th>Grade</th>
                       
                   </tr>
               </thead>
               <tbody>
                {loanData.map((e,i)=>
                <tr key={i}>
                <td>{e.jobTitle}</td>
                <td>{e.loanType}</td>
                <td>{e.loanAmount}</td>
                <td>{e.grade}</td>
            </tr>
                )}
               </tbody>
           </Table>
           </div>
        :null}
        </center>
        </>
    )
}










