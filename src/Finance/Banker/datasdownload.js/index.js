import {React,useState} from 'react'
import BankerNavbar from '../bankerNavbar'
import { Table } from 'react-bootstrap'
import { useEffect } from 'react'
import axios from 'axios'

const Customerdata = () => {
    const [loanData, setloanData] = useState([])

useEffect(()=>{
fetchdata()
},[])

    const fetchdata=async()=>{
        const banker_id = localStorage.getItem('bankerId')
        console.log(banker_id)
        
        const formdata = new FormData();
        formdata.append('id',banker_id)


        await axios.post('https://PreethiJP.pythonanywhere.com/bankerPlan',formdata).then(

            (res)=>{
                if(res.data.message){
                    alert(res.data.message)
                }
                else{
                        setloanData(res.data)
                    
                        console.log(res.data)
                }
            
            }
        ).catch((err)=>{
            alert(err)
            console.log(err)
        })
            
        }
   
  return (
    <>
    <BankerNavbar/>
    <div className="nav-wrapper position-relative end-0">
  <ul className="nav nav-pills nav-fill p-1" role="tablist">
    {loanData.map((loan, i) => (
      <li className="nav-item" key={i}>
        <a className="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#profile-tabs-icons" role="tab" aria-controls="preview" aria-selected="true">
          <i className="ni ni-badge text-sm me-2"></i> {loan.loan_type}
        </a>
      </li>
    ))}
  </ul>
</div>

    <div>
    <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Loan Type</th>
                        
                        <th>Address Proof</th>
                        
                        <th>Monthly Net Income</th>
                        
                        <th>Loan Amount</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        loanData.map((loan, index) => (
                            <tr key={index}>
                                <td>{loan.loan_type}</td>
                                
                                <td>{loan.address_proof}</td>
                                
                                <td>{loan.monthly_netincome}</td>
                                
                                <td>{loan.loan_amount}</td>
                               
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

    </div>
            
    </>
  )
}

export default Customerdata
