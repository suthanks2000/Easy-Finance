import {React,useState} from 'react'
import BankerNavbar from '../bankerNavbar'
import {  Container, Table } from 'react-bootstrap'
import { useEffect } from 'react'
import axios from 'axios'

const Customerdata = () => {
    const [loanData, setloanData] = useState([])

useEffect(()=>{
fetchdata()
},[])

    const fetchdata=async()=>{
        const banker_id = localStorage.getItem('bankerId')
        
        const formdata = new FormData();
        formdata.append('id',22)

        await axios.post('https://suthanks.pythonanywhere.com/bankerPlan',formdata).then(
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
    <div>
    <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Loan Type</th>
                        <th>Employment Type</th>
                        <th>Address Proof</th>
                        <th>Own Any Property</th>
                        <th>Job Title</th>
                        <th>Place of Work</th>
                        <th>Years Employed</th>
                        <th>Monthly Net Income</th>
                        <th>Monthly Expense</th>
                        <th>OHP Favor Of</th>
                        <th>CIBIL Issue</th>
                        <th>Loan Amount</th>
                        <th>Interest</th>
                        <th>Tenure Year</th>
                        <th>Tenure Month</th>
                        <th>Purpose of Personal Loan</th>
                        <th>Vehicle Type</th>
                        <th>Car Type</th>
                        <th>Second Hand Car Condition</th>
                        <th>Registered Month</th>
                        <th>Registered Year</th>
                        <th>Make and Model</th>
                        <th>Variant Type</th>
                        <th>Full Price of Vehicle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loanData.map((loan, index) => (
                            <tr key={index}>
                                <td>{loan.loan_type}</td>
                                <td>{loan.employment_type}</td>
                                <td>{loan.address_proof}</td>
                                <td>{loan.you_own_any_property}</td>
                                <td>{loan.job_title}</td>
                                <td>{loan.place_of_work}</td>
                                <td>{loan.years_employed}</td>
                                <td>{loan.monthly_netincome}</td>
                                <td>{loan.monthly_expense}</td>
                                <td>{loan.ohp_favorof}</td>
                                <td>{loan.cibil_issue}</td>
                                <td>{loan.loan_amount}</td>
                                <td>{loan.interest}</td>
                                <td>{loan.tenure_year}</td>
                                <td>{loan.tenure_month}</td>
                                <td>{loan.purpose_of_personalloan}</td>
                                <td>{loan.vechicle_type}</td>
                                <td>{loan.car_type}</td>
                                <td>{loan.second_hand_carcondition}</td>
                                <td>{loan.registered_month}</td>
                                <td>{loan.registered_year}</td>
                                <td>{loan.make_and_model}</td>
                                <td>{loan.varient_type}</td>
                                <td>{loan.full_price_ofvechicle}</td>
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
