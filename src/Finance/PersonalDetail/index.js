import { db } from "../FirebaseConfig";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

export default function PersonalDetail() {
  const userdata = useSelector((state) => state.regisLogin.userdata);
  const dispatch = useDispatch();
  const [usersData, setUsersData] = useState({});
  const [editData, setEditData] = useState(false);
  const [filterData, setFilterData] = useState({});
  const [spinner, setSpinner] = useState(true);
  const [editPersonalData, setEditPersonalData] = useState({});

  const uid = localStorage.getItem("loginUserId");

  const token = localStorage.getItem("Token");
  console.log(token);
useEffect(() => {
  getUserPersonalData();
  
}, []);


const getUserPersonalData = () => {
  const headers = { 'Authorization': `Bearer ${token}` };

  axios.get(`https://PreethiJP.pythonanywhere.com/personalDetail/${uid}`, { headers })
    .then(response => {
      setUsersData(response.data);
      alert("Success");
      console.log(response.data, 'usersData');
      alert("Success");
    })
    .catch(error => {
      alert("Error");
      console.error('Error fetching personal data:', error);
    });
};



   function handleEdit(user) {
      setFilterData(user);
      setEditData(true);
  }

  function exitFromEdit() {
    setEditData(false);
  }

  function exitFromEdit(){
    setEditData(false)
  }

  const handleUpdateDetail = () => {
    const headers = { 'Authorization': `Bearer ${token}` };
    let formData = new FormData();
  
    formData.append("first_name", filterData.first_name);
    formData.append("last_name", filterData.last_name);
    formData.append("father_name", filterData.father_name);
    formData.append("age", filterData.age);
    formData.append("gender", filterData.gender);
    formData.append("marital_status", filterData.marital_status);
    formData.append("district", filterData.district);
    formData.append("city", filterData.city);
    formData.append("pincode", filterData.pincode);
    formData.append("contact", filterData.contact);

  
    axios.put(`https://PreethiJP.pythonanywhere.com/editPersonalData/${uid}`, formData, { headers })
      .then(() => {
        console.log("Personal details updated successfully");
        setEditData(false);
        getUserPersonalData();
      })
      .catch((error) => {
        console.error("Error updating personal details:", error);
      });
  };

  return (
    <>
      {!editData ? (
        <>
          <center>
            <h1>Welcome to Personal Detail Page</h1>
            <div>
              <p>
                Full Name: {usersData.first_name} {usersData.last_name}
              </p>
              <p>Father Name: {usersData.father_name}</p>
              <p>Age: {usersData.age}</p>
              <p>Gender: {usersData.gender}</p>
              <p>Marital status: {usersData.marital_status}</p>
              <p>District: {usersData.district}</p>
              <p>City: {usersData.city}</p>
              <p>Pincode: {usersData.pincode}</p>
              <p>Contact: {usersData.contact}</p>
              <button type="button" onClick={() => handleEdit(usersData)}>
                Edit
              </button>
            </div>
          </center>
        </>
      ) : null}
      <>
        <Modal show={editData}>
          <center>
            <Modal.Header>
              <Modal.Title>
                {filterData.first_name} {filterData.last_name}
              </Modal.Title>
              <Button className="btn-close" onClick={exitFromEdit}></Button>
            </Modal.Header>
            <Modal.Body>
              <h1>Edit Your Data</h1>
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="first_name"
                  defaultValue={filterData.first_name}
                  onChange={(e) => handleOnkeyup(e)}
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  defaultValue={filterData.last_name}
                  onChange={(e) => handleOnkeyup(e)}
                />
              </div>
              <div>
                <label>Father Name</label>
                <input
                  type="text"
                  name="father_name"
                  defaultValue={filterData.father_name}
                  onChange={(e) => handleOnkeyup(e)}
                />
              </div>
              <div>
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  defaultValue={filterData.age}
                  onChange={(e) => handleOnkeyup(e)}
                />
              </div>
              <div>
                <label>Gender</label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  defaultChecked={filterData.gender === "male"}
                  onChange={(e) => handleOnkeyup(e)}
                />{" "}
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  defaultChecked={filterData.gender === "female"}
                  onChange={(e) => handleOnkeyup(e)}
                />{" "}
                Female
              </div>
              <div>
                <label>Marital Status</label>
                <input
                  type="radio"
                  name="marital_status"
                  value="married"
                  defaultChecked={filterData.marital_status === "married"}
                  onChange={(e) => handleOnkeyup(e)}
                />{" "}
                Married
                <input
                  type="radio"
                  name="marital_status"
                  value="unmarried"
                  defaultChecked={filterData.marital_status === "unmarried"}
                  onChange={(e) => handleOnkeyup(e)}
                />{" "}
                Unmarried
              </div>

              <div>
                <label>District</label>
                <select
                  name="district"
                  defaultValue={filterData.district}
                  onChange={(e) => handleOnkeyup(e)}
                >
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
                <input
                  type="text"
                  name="city"
                  defaultValue={filterData.city}
                  onChange={(e) => handleOnkeyup(e)}
                />
              </div>
              <div>
                <label>Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  defaultValue={filterData.pincode}
                  onChange={(e) => handleOnkeyup(e)}
                />
              </div>
              <div>
                <label>Contact Number</label>
                <input
                  type="text"
                  name="contact"
                  defaultValue={filterData.contact}
                  onChange={(e) => handleOnkeyup(e)}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-info" onClick={handleUpdateDetail}>
                Update
              </Button>
            </Modal.Footer>
          </center>
        </Modal>
      </>
    </>
  );
}
