import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import AdminNavbar from '../adminNavbar'
import { Table } from 'react-bootstrap'



const UserDatas = () => {
  const [userData,setUserData]= useState([])
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  

    useEffect(()=>{
       getUserDatas()
    },[page])

  const getUserDatas = async () => {
        const response = await axios.get(`https://PreethiJP.pythonanywhere.com/adminUserData?page=${page}&per_page=3`); 
        setUserData(response.data.users);
        setTotalPages(response.data.pages); 
}


const handleNext = () => {
    if (page < totalPages) {
        setPage(page + 1);
    }
};

const handlePrevious = () => {
    if (page > 1) {
        setPage(page - 1);
    }
};


const deleteUserRegData = async (id) => {
     await axios.delete(`https://suthanks.pythonanywhere.com/deleteUser/${id}`).then((res)=>{
        alert(res.data)
     })

    getUserDatas()
}


  return (
   <>
   <AdminNavbar />
    <center>
            <Table border={2} className='mt-5 w-25'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User name</th>
                        <th>User Email</th>
                        <th>User password</th>
                        <th>delete User</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {userData.map((user,i) => (
                        <tr key={i}>
                            <td>{user.id}</td>
                           <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td><button type='button' onClick={()=>deleteUserRegData(user.id)}>Delete</button></td>
                        </tr>
                    ) )}
                    
                </tbody>
                
            </Table>
            <span>total datas in this page {userData?.length}</span>
            <button type='button' disabled={page === 1} onClick={()=>handlePrevious()}>previous</button>
            <button type='button' disabled={page === totalPages} onClick={()=>handleNext()}>next</button>
    </center>
</>
)
}
   
  
/* <>
     <center>
             <Table border={2} className='mt-5 w-25'>
                 <thead>
                     <tr>
                         <th>Id</th>
                         <th>User name</th>
                         <th>User Email</th>
                         <th>User password</th>
                         <th>delete User</th>
                     </tr>
                 </thead>
                 <tbody>
                    
                     {userData.map((user,i) => (
                        <tr key={i}>
                            <td>{user.id}</td>
                           <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td><button type='button' onClick={()=>deleteUserRegData(user.id)}>Delete</button></td>
                        </tr>
                    ) )}
                    
                </tbody>
                
            </Table>
            <span>total datas in this page {userData?.length}</span>
            <button type='button' disabled={page === 1} onClick={()=>handlePrevious()}>previous</button>
            <button type='button' disabled={page === totalPages} onClick={()=>handleNext()}>next</button>
    </center>
<div class="pagination-container justify-content-center">
    <ul class="pagination pagination-warning">
      <li class="page-item">
        <a class="page-link" href="javascript:;" aria-label="Previous">
          <span aria-hidden="true"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
        </a>
      </li>
      <li class="page-item active">
        <a class="page-link" href="javascript:;">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:;">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:;">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:;">4</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:;">5</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:;" aria-label="Next">
          <span aria-hidden="true"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
        </a>
      </li>
    </ul>
  </div>
</> */
 

export default UserDatas