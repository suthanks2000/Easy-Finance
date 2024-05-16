import { db } from "../FirebaseConfig";
import { collection, getDocs, query, where, updateDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

export default function PersonalDetail(){
  const userdata = useSelector((state) => state.regisLogin.userdata);
  const { personalInfo, inputInfo } = useSelector((state) => state.personalDetail)
 
  const dispatch = useDispatch()
const [usersData, setUsersData] = useState([]);
const [ editData,setEditData ] = useState(false)
const [ filterData, setFilterData ] = useState({})
const [ spinner, setSpinner] = useState(true)

const personalDetailInput = []

useEffect(() => {
    fetchData();

}, []);



const fetchData = async () => {
  const q = query(collection(db, "personalDetails"),where("uid", "==", userdata.uid));
  const docSnap = await getDocs(q);
  const data = [];

  docSnap.forEach((doc) => {
    
      data.push({ ...doc.data(), id: doc.id });
  });


  setUsersData(data);
  console.log("usersData",usersData);
  setSpinner(false) 
  console.log(userdata.uid)
};
   

   function editUserData(userid) {
    const filteredUser = usersData.find((user) => user.id === userid);
    if (filteredUser) {
      setFilterData(filteredUser);
      setEditData(true);
      console.log("filteredUser",filteredUser)
     
    } else {
      console.log("User not found with ID:", userid);
    }
  }

 const add = (ele)=>{
  if(ele.target.value == ele.dropValue[0]){
    alert("Please select others")
  }
  else{setFilterData({...filterData,[ele.target.name]:ele.target.value})
}
        
       
 }

  function exitFromEdit(){
    setEditData(false)
  }


  const handleUpdateDetail = async() => {
   
    const docRef = doc(db, "personalDetails", filterData.id);

    await updateDoc(docRef, filterData)
        .then(() => {
          
            setEditData(false);
            alert("Success: Personal details updated successfully");
            console.log("personalInfo", personalInfo);
            console.log("filterData", filterData);
        })
        .catch((error) => {
            console.error("Error updating personal details:", error);
            alert("Error: Failed to update personal details");
        });
};





return (
  <>
      {spinner ? (
          <Spinner animation="grow" variant="info" />
      ) : (
          <>
              {!editData ? (
                  <>
                      <h1>Welcome to Personal Detail Page</h1>
                      {usersData.map((user) => (
                          <div key={user.id}>
                              <p>Full Name: {user.firstName} {user.lastName}</p>
                              <p>Father Name: {user.fatherName}</p>
                              <p>Age: {user.age}</p>
                              <p>Gender: {user.gender}</p>
                              <p>Marital status: {user.maritalStatus}</p>
                              <p>Email: {user.email}</p>
                              <p>District: {user.district}</p>
                              <p>City: {user.city}</p>
                              <p>Pincode: {user.pincode}</p>
                              <p>Contact: {user.contact}</p>
                              <button type="button" onClick={() => editUserData(user.id)}>Edit Data</button>
                          </div>
                      ))}
                  </>
              ) : (
                  <Modal show={editData} onHide={exitFromEdit}>
                      <Modal.Header closeButton>
                          <Modal.Title>{filterData.firstName} {filterData.lastName}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
    <h1>Edit Your Datas</h1>
    <div>  
        <label>First Name</label>
        <input type="text" name="firstName" defaultValue={filterData.firstName} onChange={(e)=>add(e)}/>
    </div> 

    <div>  
        <label>Last Name</label>
        <input type="text" name="lastName" defaultValue={filterData.lastName} onChange={(e)=>add(e)}/>
    </div>

    <div>  
        <label>Father Name</label>
        <input type="text" name="fatherName" defaultValue={filterData.fatherName} onChange={(e)=>add(e)}/>
    </div>

    <div>  
        <label>Age</label>
        <input type="number" name="age" defaultValue={filterData.age} onChange={(e)=>add(e)}/>
    </div>

    <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked={filterData.gender === "male"} onChange={(e)=>add(e)} /> Male
        <input type="radio" name="gender" value="female" defaultChecked={filterData.gender === "female"} onChange={(e)=>add(e)} /> Female
    </div>

    <div>  
        <label>Email Address</label>
        <input type="email" name="email" defaultValue={filterData.email} onChange={(e)=>add(e)}/>
    </div>

    <div>
        <label>Marital Status</label>
        <input type="radio" name="maritalStatus" value="married" defaultChecked={filterData.maritalStatus === "married"} onChange={(e)=>add(e)} /> Married
        <input type="radio" name="maritalStatus" value="unmarried" defaultChecked={filterData.maritalStatus === "unmarried"} onChange={(e)=>add(e)} /> Unmarried
    </div>

    <div>
        <label>District</label>
        <select name="district" defaultValue={filterData.district} onChange={(e)=>add(e)}>
            <option>Select District</option>
            <option>Ariyalur</option>
            <option>Chengalpattu</option>
            <option>Chennai</option>
            <option>Coimbatore</option>
   <option>Cuddalore</option>
   <option>Dharmapuri</option>
   <option>Dindigul</option>
   <option>Erode</option>
   <option>Kallakurichi</option>
   <option>Kanchipuram</option>
   <option>Kanyakumari</option>
   <option>Karur</option>
   <option>Krishnagiri</option>
   <option>Madurai</option>
   <option>Nagapattinam</option>
   <option>Namakkal</option>
   <option>Nilgiris</option>
   <option>Perambalur</option>
   <option>Pudukkottai</option>
   <option>Ramanathapuram</option>
   <option>Ranipet</option>
   <option>Salem</option>
   <option>Sivaganga</option>
   <option>Tenkasi</option>
   <option>Thanjavur</option>
   <option>Theni</option>
   <option>Thoothukudi</option>
  <option>Tiruchirappalli</option>
   <option>Tirunelveli</option>
   <option>Tirupathur</option>
  <option>Tiruppur</option>
   <option>Tiruvallur</option>
  <option>Tiruvannamalai</option>
<option>Tiruvarur</option>
   <option>Vellore</option>
  <option>Viluppuram</option>
  <option>Virudhunagar</option>
        </select>
    </div>

    <div>  
        <label>City</label>
        <input type="text" name="city" defaultValue={filterData.city} onChange={(e)=>add(e)}/>
    </div>

    <div>  
        <label>Pincode</label>
        <input type="text" name="pincode" defaultValue={filterData.pincode} onChange={(e)=>add(e)}/>
    </div>

    <div>  
        <label>Contact Number</label>
        <input type="text" name="contact" defaultValue={filterData.contact} onChange={(e)=>add(e)}/>
    </div>
</Modal.Body>
                      <Modal.Footer>
                          <Button variant="info" onClick={handleUpdateDetail}>Update</Button>
                      </Modal.Footer>
                  </Modal>
              )}
          </>
      )}
  </>
);
}