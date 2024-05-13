import { db } from "../FirebaseConfig";
import { collection, getDocs, query, where, addDoc, updateDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import InputText from "../Register/InputComponents/InputText";
import InputDropdown from "../Register/InputComponents/InputDropdown";
import InputRadio from "../Register/InputComponents/InputRadio";
import { setPersonalInfo, setInputInfo } from "../Redux-Toolkit/slices/PersonalDetailCounter";
import { Button } from "react-bootstrap";

const Swal = require('sweetalert2')


export default function PersonalDatas(){
  const userdata = useSelector((state) => state.regisLogin.userdata);
  const { personalInfo, inputInfo } = useSelector((state) => state.personalDetail)
  const dispatch = useDispatch()
const [usersData, setUsersData] = useState([]);
const [ editData,setEditData ] = useState(false)
const [ filterData, setFilterData ] = useState({})

const personalDetailInput = []

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
  console.log("usersData",usersData); // This won't show the updated state immediately
  console.log(userdata.uid)
};
   
  //  function editUserData (userid)  {
  //  const d= usersData.filter((e)=>e.id == userid)[0]
  //  console.log(d)
  //  setFilterData(d)
    
  //   console.log(editData)

  //  }


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

 const add = (e)=>{
        setFilterData({...filterData,[e.target.name]:e.target.value})
       
 }

  // inputInfo.forEach((ele,i)=> {

  //   if(ele.inputType == "text" || ele.inputType == "number" || ele.inputType == "email"){
  //     // personalDetailInput.push(<InputText ele={ele}/>)
  //        personalDetailInput.push(<div key={i}>
  //          <label>{ele.inputLabel}</label>
  //          <input type={ele.inputType} name={ele.inputName} placeholder={ele.inputPlaceholder} onChange={(e)=>dispatch(setPersonalInfo({...personalInfo,[e.target.name]:e.target.value}))}/>
  //        </div>)
  // }
    
  //   if(ele.inputType == "dropdown"){
  //     // personalDetailInput.push(<InputDropdown ele={ele}/>)
  //      personalDetailInput.push(<div>
  //      <label>{ele.inputLabel}</label>
  //      <select name={ele.inputName} onChange={(e)=>dispatch(setPersonalInfo({...personalInfo,[e.target.name]:e.target.value}))}>
  //        {ele.dropValue.map((e)=><option>{e}</option>)}
  //        </select>
       
  //    </div>
  //   }

  //   if(ele.inputType == "radio"){
  //     // personalDetailInput.push(<InputRadio ele={ele}/>)
  //       personalDetailInput.push(<div>
  //    personalDetailInput.push(<div key={i} style={{display:"inline-block"}}>
  //      <label>{ele.inputLabel}</label>
  //      {<input type={ele.inputType} name={ele.inputName} value={ele.inputValue} onChange={(e)=>dispatch(setPersonalInfo({...personalInfo,[e.target.name]:e.target.value}))}/>}
  //      <label>{ele.inputValue}</label>
  //    </div>)
  //   }
 
  // })

  function exitFromEdit(){
    setEditData(false)
  }



// const handleUpdateDetail = async () => {
  // const requiredFields = ['firstName', 'lastName', 'fatherName', 'age', 'maritalStatus', 'gender', 'email', 'district', 'city', 'pincode', 'contact'];
  

  // const hasAllRequiredFields = requiredFields.every(field => personalInfo[field]);
  
  // if (!hasAllRequiredFields) {
  //   Swal.fire({
  //     icon: "error",
  //     title: "Something went wrong!",
  //     text: "Please fill in all required fields.",
  //   });
  //   console.log("Failed: Missing required fields");
  //   return; 
  // }

  // try {
  
  //   const q = query(collection(db, "personalDetails"), where("uid", "==", userdata.uid));
  //   const querySnapshot = await getDocs(q);

    
  //   if (!querySnapshot.empty) {
  //     const docRef = doc(db, "personalDetails", querySnapshot.docs[0].id);

  //     console.log(docRef)
  //     await updateDoc(docRef, personalInfo);

     
  //     Swal.fire({
  //       title: "Success!",
  //       text: "Personal details updated successfully.",
  //       icon: "success"
  //     });
  //     console.log("Success: Personal details updated");
  //   } else {
  //     console.log("Document not found for user:", userdata.uid);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Error",
  //       text: "No document found to update. Please check your data."
  //     });
  //   }
  // } catch (error) {
    
  //   console.error("Error updating personal details:", error);
  //   Swal.fire({
  //     icon: "error",
  //     title: "Error",
  //     text: "An error occurred while updating personal details. Please try again later."
  //   });
  //   console.log("Failed: Error updating personal details");
  // }

  // const handleUpdateDetail = async () => {
       
  //     const docRef = doc(db, "personalDetails", filterData.id)
  //     await updateDoc(docRef, filterData)
  //     setEditData(false)
  //     alert("success")
  //     console.log("personalInfo",personalInfo)
  //    console.log("filterData",filterData)
  // }
  const handleUpdateDetail = async() => {
    // Create a reference to the document in Firestore
    const docRef = doc(db, "personalDetails", filterData.id);

    // Update the document with the data from filterData
    await updateDoc(docRef, filterData)
        .then(() => {
            // Update the UI state to exit edit mode
            setEditData(false);

            // Show a success message to the user
            alert("Success: Personal details updated successfully");

            // Log personalInfo and filterData for debugging
            console.log("personalInfo", personalInfo);
            console.log("filterData", filterData);
        })
        .catch((error) => {
            // Handle any errors that occur during the update process
            console.error("Error updating personal details:", error);
            alert("Error: Failed to update personal details");
        });
};


  // const handleUpdateDetail = async () => {
  //   try {
  //     const docRef = doc(db, "personalDetails", filterData.id);
  //     await updateDoc(docRef, filterData);
  //     setEditData(false);
  //     alert("Success: Personal details updated successfully");
  //   } catch (error) {
  //     console.error("Error updating personal details:", error);
  //     alert("Error: Failed to update personal details");
  //   }
  // };
  

//   const handleUpdateDetail = async () => {
//     try {
//         console.log("filterData", filterData);

//         // Create a reference to the document in Firestore
//         const docRef = doc(db, "personalDetails", filterData.id);

//         // Update the document with the data from filterData
//         await updateDoc(docRef, filterData);

//         // Update the UI state
//         setEditData(false);

//         // Show a success message to the user
//         alert("Success: Personal details updated successfully");
//     } catch (error) {
//         // Handle any errors that occur during the update process
//         console.error("Error updating personal details:", error);
//         alert("Error: Failed to update personal details");
//     }
// };

  inputInfo.forEach((ele, i) => {
    if (ele.inputType === "text" || ele.inputType === "number" || ele.inputType === "email") {
      personalDetailInput.push(
        <div key={i}>
          <label>{ele.inputLabel}</label>
          <input type={ele.inputType} name={ele.inputName} onChange={(e) => setFilterData({ ...filterData, [e.target.name]: e.target.value })} />
        </div>
      );
    }
  
    if (ele.inputType === "dropdown") {
      personalDetailInput.push(
        <div key={i}>
          <label>{ele.inputLabel}</label>
          <select name={ele.inputName} onChange={(e) =>setFilterData({ ...filterData, [e.target.name]: e.target.value })}>
            {ele.dropValue.map((e, index) => <option key={index}>{e}</option>)}
          </select>
        </div>
      );
    }
  
    if (ele.inputType === "radio") {
      personalDetailInput.push(
        <div key={i}>
          <label>{ele.inputLabel}</label>
          <input type={ele.inputType} name={ele.inputName} defaultValue={ele.inputValue} onChange={(e) => setFilterData({ ...filterData, [e.target.name]: e.target.value })} />
          <label>{ele.inputValue}</label>
        </div>
      );
    }
  });


    return (
      <>
        {!editData ? (
          <>
            <h1>Welcome to Datas Page</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {usersData.map((user, i) => {
                  return (
                    <tr key={i}>
                      <td>{user.firstName} {user.lastName}</td>
                      <td>{user.contact}</td>
                      <td>
                      {/* <button type="button" onClick={() => { setEditData(true); editUserData(user.id); }}>Edit</button> */}
                      <button type="button" onClick={() => editUserData(user.id)}>Edit</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
              {JSON.stringify(filterData)}
            <h1>Edit Your Datas</h1>
              
           <div>  
           <label>First Name</label>
            <input type="text" name ='firstname' defaultValue={filterData.firstName} onChange={(e)=>add(e)}/>
            </div> 

            <div>  
           <label>Last Name</label>
            <input type="text" defaultValue={filterData.lastName} onChange={(e)=>add(e)}/>
            </div>

            <div>  
           <label>Father Name</label>
            <input type="text" defaultValue={filterData.fatherName} onChange={(e)=>add(e)}/>
            </div>

            <div>  
           <label>Age</label>
            <input type="number" defaultValue={filterData.age} onChange={(e)=>add(e)}/>
            </div>

            <div>
          <label>Gender</label>
            <input type="radio" name="gender" value="male" defaultChecked={filterData.gender === "male"} /> Male
            <input type="radio" name="gender" value="female" defaultChecked={filterData.gender === "female"} /> Female
             </div>
            
            <div>  
           <label>Email</label>
            <input type="email" defaultValue={filterData.email} onChange={(e)=>add(e)}/>
            </div>

         
            <div>
           <label>Marital Status</label>
            <input type="radio" name="maritalStatus" value="married" defaultChecked={filterData.maritalStatus === "married"} /> Married
            <input type="radio" name="maritalStatus" value="unmarried" defaultChecked={filterData.maritalStatus === "unmarried"} /> Unmarried
            </div>
 
            
            <div>
              <label>District</label>
              <select name="district" defaultValue={filterData.district} onChange={(e)=>add(e)}>
                <option value="">Select your district</option>
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
            <input type="text" defaultValue={filterData.city} onChange={(e)=>add(e)}/>
            </div>

            <div>  
           <label>Pincode</label>
            <input type="text" defaultValue={filterData.pincode} onChange={(e)=>add(e)}/>
            </div>

            <div>  
           <label>Contact</label>
            <input type="text" defaultValue={filterData.contact} onChange={(e)=>add(e)}/>
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