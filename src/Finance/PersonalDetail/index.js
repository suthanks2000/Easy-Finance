import { db } from "../FirebaseConfig";
import { collection, getDocs, query, where, addDoc, updateDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

export default function PersonalDetail(){
  const userdata = useSelector((state) => state.regisLogin.userdata);
  const dispatch = useDispatch()
const [usersData, setUsersData] = useState([]);
const [ editData,setEditData ] = useState(false)
const [ filterData, setFilterData ] = useState({})


useEffect(() => {
    fetchData();
}, []); // Trigger useEffect when userdata changes


const fetchData = async () => {
  const q = query(collection(db, "personalDetails"),where("uid", "==", userdata.uid));
  const docSnap = await getDocs(q);
  const data = [];

  docSnap.forEach((doc) => {
      // Accumulate data in an array
      data.push({ ...doc.data(), id: doc.id });
  });

  // Set state after loop completes
  setUsersData(data);
  console.log(userdata.uid)
};
   
   function handleEdit(user) {
      setFilterData(user);
      setEditData(true);
  }

 const handleOnkeyup = (ele)=>{
  if(ele.target.value == "Select District"){
    alert("Please select others")
  }
  else{setFilterData({...filterData,[ele.target.name]:ele.target.value})
}
        
       
 }


  function exitFromEdit(){
    setEditData(false)
  }

  const handleUpdateDetail = async() => { // update btn function
    // Create a reference to the document in Firestore
    const docRef = doc(db, "personalDetails", filterData.id);

    // Update the document with the data from filterData
    await updateDoc(docRef, filterData)
    alert("Success: Personal details updated successfully");
    fetchData();
    setEditData(false);
    
    
};


    return (
      <>
        {!editData ? (
          <>
            <h1>Welcome to Personal Detail Page</h1>
            { usersData.map((user,i) => {
              return (
                <div key={i}>
                  <p>Full Name: { user.firstName } { user.lastName }</p>
                  <p>Father Name: {user.fatherName}</p>
                      <p>Age: {user.Age}</p>
                      <p>Gender: {user.Gender}</p>
                      <p>Marital status: {user.maritalStatus}</p>
                      <p>Email: {user.Email}</p>
                      <p>District: {user.District}</p>
                      <p>City: {user.City}</p>
                      <p>Pincode: {user.pinCode}</p>
                      <p>Contact: {user.Contact}</p>

                      <button type="button" onClick={() => handleEdit(user)}>Edit</button>
                </div>
              )
            })}

          </>
        ) : null}
    
          <Modal show= {editData}>
          <center>
              <Modal.Header>
                <Modal.Title>
                  {filterData.firstName}  {filterData.lastName} 
                </Modal.Title>
                <Button className="btn-close" onClick={exitFromEdit}></Button>
              </Modal.Header>
              <Modal.Body>
              <h1>Edit Your Datas</h1>
                
            <div>  
            <label>First Name</label>
              <input type="text" name ='firstName' defaultValue={filterData.firstName} onChange={(e)=>handleOnkeyup(e)}/>
              </div> 

              <div>  
            <label>Last Name</label>
              <input type="text" name="lastName" defaultValue={filterData.lastName} onChange={(e)=>handleOnkeyup(e)}/>
              </div>

              <div>  
            <label>Father Name</label>
              <input type="text" name="fatherName" defaultValue={filterData.fatherName} onChange={(e)=>handleOnkeyup(e)}/>
              </div>

              <div>  
            <label>Age</label>
              <input type="number" name="Age" defaultValue={filterData.Age} onChange={(e)=>handleOnkeyup(e)}/>
              </div>

              <div>
            <label>Gender</label>
              <input type="radio" name="Gender" value="male" defaultChecked={filterData.Gender === "male"}  onChange={(e)=>handleOnkeyup(e)}/> Male
              <input type="radio" name="Gender" value="female" defaultChecked={filterData.Gender === "female"} onChange={(e)=>handleOnkeyup(e)} /> Female
              </div>
              
              <div>  
            <label>Email Address</label>
              <input type="email" name="Email" defaultValue={filterData.Email} onChange={(e)=>handleOnkeyup(e)}/>
              </div>

          
              <div>
            <label>Marital Status</label>
              <input type="radio" name="maritalStatus" value="married" defaultChecked={filterData.maritalStatus === "married"} onChange={(e)=>handleOnkeyup(e)}/> Married
              <input type="radio" name="maritalStatus" value="unmarried" defaultChecked={filterData.maritalStatus === "unmarried"} onChange={(e)=>handleOnkeyup(e)}/> Unmarried
              </div>
  
              
              <div>
                <label>District</label>
                <select name="District" defaultValue={filterData.District} onChange={(e)=>handleOnkeyup(e)}>
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
              <input type="text" name="City" defaultValue={filterData.City} onChange={(e)=>handleOnkeyup(e)}/>
              </div>

              <div>  
            <label>Pincode</label>
              <input type="text" name="pinCode" defaultValue={filterData.pinCode} onChange={(e)=>handleOnkeyup(e)}/>
              </div>

              <div>  
            <label>Contact Number</label>
              <input type="text" name="Contact" defaultValue={filterData.Contact} onChange={(e)=>handleOnkeyup(e)}/>
              </div>
            
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn btn-info" onClick={handleUpdateDetail}>Update</Button>
              </Modal.Footer>
            </center>
            </Modal>
          </>
      
    );
}