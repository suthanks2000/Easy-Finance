import axios from 'axios'
import  { React,useEffect,useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import AdminNavbar from '../adminNavbar'

const BankerPlans = () => {
    const [bankerPlans, setbankerPlans] = useState([])

    useEffect(()=>{
        fetchData()
    },[])
   async function fetchData () {
        await axios.get("https://PreethiJP.pythonanywhere.com/getbankerplans").then((res)=>{
           setbankerPlans(res.data) 
           alert("fetch data success")
           console.log(res.data)
        }).catch((err)=>{
            alert(err)
            console.log(err)
        })
    }
  return (
    <>
        <AdminNavbar/>
        <div>BankerPlans</div>
        <center>
                <Container>
                <Table striped bordered hover size="sm" variant="dark" responsive="sm">
                    <thead>
                        <tr>
                            <th>Plan Id</th>
                            <th>Plan Name</th>
                            <th>datas count</th>
                            <th>Edit Plan</th>
                            <th>Delete Plan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bankerPlans.map(data => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.plan_name}</td>
                                <td>{data.count}</td>
                                {/* <td>
                                    <button  onClick={()=>tokenGenerate(data)}>{data.Action}</button>
                                </td> */}
                                <td>
                                    <button type='button' className='btn btn-info btn-sm'>Edit plan</button>
                                </td>
                                <td>
                                    <button type='button' className='btn btn-danger btn-sm'>Delete plan</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                </Container>
            </center>
    </>
  )
}

export default BankerPlans