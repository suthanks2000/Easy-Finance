import {React,useState} from 'react'
import BankerNavbar from '../bankerNavbar'
import { Table } from 'react-bootstrap'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Customerdata = () => {
    const [loanData, setloanData] = useState([])
    const pricingHeaderBg="url('../../../public/assets/img/pricing-header-bg.jpg')"
    const [filterLoan,setFilterLoan]=useState([])

useEffect(()=>{
fetchdata()
},[])

const handleClick=(loan)=>{
  const filterdata = loanData.filter((each)=>each.loan_type==loan)
  setFilterLoan(filterdata)
  
}

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
    <div className="page-header position-relative" style={{
        backgroundImage: `url(${pricingHeaderBg})`,
        backgroundSize: 'cover'
      }}>
         <span className="mask bg-gradient-primary opacity-6"></span>
        <div className="container pb-lg-9 pb-10 pt-7 position-relative z-index-2">
          <div className="row mt-4">
            <div className="col-md-6 mx-auto text-center">
              <h3 className="text-white">Banker customer data page</h3>
              <p className="text-white"></p>
            </div>
          </div>
          </div>
          </div>
    <div className="nav-wrapper position-relative end-0">
  <ul className="nav nav-pills nav-fill p-1" role="tablist">
    {loanData.map((loan, i) => (
      <li className="nav-item" key={i}>
        <Link className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab"  role="tab" aria-controls="preview" aria-selected="true" onClick={() => handleClick(loan.loan_type)}>
          <i className="text-sm me-2"></i> {loan.loan_type}
        </Link>
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

                        <th>Contact</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        filterLoan.map((loan, index) => (
                            <tr key={index}>
                                <td>{loan.loan_type}</td>
                                
                                <td>{loan.address_proof}</td>
                                
                                <td>{loan.monthly_netincome}</td>
                                
                                <td>{loan.loan_amount}</td>

                                <td>{loan.contact}</td>

                               
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
