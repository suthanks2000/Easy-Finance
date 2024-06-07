import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import AdminNavbar from './adminNavbar'


const UserDatas = () => {
  const [userData,setUserData]= useState([])

    useEffect(()=>{
       getUserDatas()
    },[])

const getUserDatas = async () => {

    try {
        const response = await axios.get("https://PreethiJP.pythonanywhere.com/adminUserData");
        setUserData(response.data);
        console.log("userData",userData)
        // alert("success")
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
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
                        <tr key={user.id}>
                           <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </center>
   
   </>
  )
}

export default UserDatas