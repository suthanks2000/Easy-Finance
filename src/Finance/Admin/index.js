import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { collection, getDocs, query, where, doc } from "firebase/firestore";
import { db } from "../FirebaseConfig";


export default function Admin(){
    const[adminData,setAdminData]=useState({})
    const[loanData,setloanData]=useState([])

    const[viewLoanDatas,setViewLoanDatas]=useState(false)
  
useEffect(()=>{
    fetchLoanData()
},[])    
const fetchLoanData = async () => {// fetch loans function
    const q = collection(db, "securedLoans");
    const docSnap = await getDocs(q);
  
    const table = docSnap.docs.map((doc)=> ({
        id:doc.id,
        ...doc.data()
    }))
    console.log(table) 
    setloanData(table)
  };
  console.log(loanData)
    
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
            <select name="SelectLoanType" type="dropdown" onChange={(e)=>handleAdminData(e)}>
                <option>SelectLoanType</option>
                <option value="personalloan">personalloan</option>
                <option value="businessloan">businessloan</option> 
                <option value="homeloan">homeloan</option> 
                <option value="vehicleloan">vehicleloan</option>                  
            </select>
        </div>
        <div>
        <label>Choose the Grade</label>
        <select name="selectGrade" type="dropdown"  onChange={(e)=>handleAdminData(e)}>
            <option>selectGrade</option>
            <option value="A">Grade A</option>
            <option value="B">Grade B</option>
            <option value="C">Grade C</option>
        </select>
        </div>
        <div>
            <label>Datas</label>
            <input type="number" name="dataCount" min="10" placeholder="no Of datas" onChange={(e)=>handleAdminData(e)} required></input>
        </div>

        <div>
            <button type="button" onClick={()=>setViewLoanDatas(true)}>Submit</button>
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