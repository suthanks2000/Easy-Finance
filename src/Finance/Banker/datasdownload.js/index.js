import {React,useState} from 'react'

const Customerdata = () => {
    const [loanData, setloanData] = useState({})
    const handleinputChange = (e) => {
            setloanData({...loanData,[e.target.name]:e.target.value})
    }

    const handleSubmit = () =>{
        alert(loanData)
    }
  return (
    <>
    {JSON.stringify(loanData)}
            <div>
                <label>SelectLoanType</label>
                <select name="SelectLoanType" type="dropdown" defaultValue=""  onChange={(e)=>handleinputChange(e)}>
                    <option>SelectLoanType</option>
                    <option value="personalloan">personalloan</option>
                    <option value="businessloan">businessloan</option>
                    <option value="homeloan">homeloan</option>
                    <option value="vehicleloan">vehicleloan</option>
                </select>
            </div>
            <div>
                <label>Choose the Grade</label>
                <select name="selectGrade" type="dropdown" defaultValue=""  onChange={(e)=>handleinputChange(e)}>
                    <option>selectGrade</option>
                    <option value="A">Grade A</option>
                    <option value="B">Grade B</option>
                    <option value="C">Grade C</option>
                </select>
            </div>
            <div>
                <label>Datas</label>
                <input type="number" defaultValue="" name="dataCount" min="10" placeholder="no Of datas" onChange={(e)=>handleinputChange(e)} required></input>
            </div>
        
            <div>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </div>
    </>
  )
}

export default Customerdata