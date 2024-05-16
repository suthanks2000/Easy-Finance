import { useState } from "react"

export default function Admin(){
    const[adminData,setAdminData]=useState({})
  
    
    const handleAdminData = (e) => {
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
            <option value="GradeA">Grade A</option>
            <option value="GradeB">Grade B</option>
            <option value="GradeC">Grade C</option>
        </select>
        </div>
        <div>
            <label>Datas</label>
            <input type="number" name="dataCount" min="10" placeholder=" datas" onChange={(e)=>handleAdminData(e)}></input>
        </div>

        <div>
            <button type="button">Submit</button>
        </div>
        
        </>
    )
}