import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import AdminNavbar from '../adminNavbar'
import { Table } from 'react-bootstrap'



const UserDatas = () => {
  const [userData,setUserData]= useState([])
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  

    // useEffect(()=>{
    //    getUserDatas()
    // },[page])


//   const getUserDatas = async () => {
//         const response = await axios.get(`https://disondys.pythonanywhere.com/adminUserData?page=${page}&per_page=3`); 
//         setUserData(response.data.users);
//         setTotalPages(response.data.pages); 
// }

    useEffect(()=>{
        getAllUserDatas()
    },[])



    const getAllUserDatas = async () => {
      await axios.get("https://suthanks.pythonanywhere.com/allUserData").then((res)=>{
        setUserData(res.data)
        // alert(res.data)
        console.log("userdata",userData)
      })
    }

//   const getUserDatas = async () => {
//         const response = await axios.get(`https://PreethiJP.pythonanywhere.com/adminUserData?page=${page}&per_page=3`); 
//         setUserData(response.data.users);
//         setTotalPages(response.data.pages); 
// }


// const handleNext = () => {
//     if (page < totalPages) {
//         setPage(page + 1);
//     }
// };


// const handlePrevious = () => {
//     if (page > 1) {
//         setPage(page - 1);
//     }
// };






  return (
   <>
<div className='container-fluid w-70 mt-5'>
<div className="card">
  <div className="table-responsive">
    <table className="table align-items-center mb-0">
      <thead>
        <tr>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">User Id</th>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">User Name</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">User Email</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Delete User</th>
        
        </tr>
      </thead>
      <tbody>
        {userData.map((user, i) => (
          <tr key={i}>
            <td>
              <div className="d-flex px-2 py-1">
                <div className="d-flex flex-column justify-content-center">
                  <p className="text-xs text-secondary mb-0">{user.uid}</p>
                </div>
              </div>
            </td>
            <td>
              <p className="text-xs text-secondary mb-0">{user.name}</p>
            </td>
            <td className="align-middle text-center text-sm">
              <span className="text-secondary text-xs font-weight-bold">{user.email}</span>
            </td>
            <td className="align-middle text-center">
              <span className="badge badge-sm badge-danger">Delete</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
     </div>   
        </>
      )
      }


export default UserDatas