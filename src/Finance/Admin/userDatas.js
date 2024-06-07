import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import AdminNavbar from './adminNavbar'


const UserDatas = () => {
  const [userData,setUserData]= useState([])

    useEffect(()=>{
       getUserDatas()
    },[])

//     const getUserDatas = async () => {
//       try {
//           const response = await axios.get("https://PreethiJP.pythonanywhere.com/adminUserData");
//           console.log("userData", response.data); 
//           setUserData(response.data);
//       } catch (error) {
//           console.error('Error fetching user data:', error); 
//       }
//   }
  
  const getUserDatas = async () => {
  
        const response = await axios.get("https://PreethiJP.pythonanywhere.com/adminUserData");
        console.log("userData", response.data); 
        setUserData(response.data);  
}


const deleteUserRegData = async (id) => {
    const deleteUser = await axios.delete(`https://PreethiJP.pythonanywhere.com/deleteUser/${id}`)
    setUserData(deleteUser.data);
    console.log(deleteUser)
    console.log("id",id)
}

  return (
   <>
   <AdminNavbar />
    <center>
            <table border={2}>
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>User Email</th>
                        <th>User password</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map(user => (
                        <tr key={user.uid}>
                           <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td><button onClick={deleteUserRegData(user.uid)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </center>
   
   </>
  )
}

export default UserDatas