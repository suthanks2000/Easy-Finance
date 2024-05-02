import { useSelector, useDispatch } from "react-redux";
import { setPersonalInfo } from "../Redux-Toolkit/slices/PersonalDetailCounter";
import { useNavigate } from "react-router-dom";
import { db } from "../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { Firestore } from "firebase/firestore";
import { setuserdata } from "../Redux-Toolkit/slices/RegLogCounter";

export default function PersonalDetail() {
  const userdata = useSelector((state) => state.regisLogin.userdata);
  const personalInfo = useSelector(
    (state) => state.personalDetail.personalInfo
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handlePersonalDetail = async () => {
    if (
      personalInfo.firstName == "" ||
      personalInfo.lastName == "" ||
      personalInfo.fatherName == "" ||
      personalInfo.Age == "" ||
      personalInfo.maritalStatus == "" ||
      personalInfo.Gender == "" ||
      personalInfo.Email == "" ||
      personalInfo.Address.District == "" ||
      personalInfo.Address.City == "" ||
      personalInfo.Address.pinCode == "" ||
      personalInfo.Contact == ""
    ) {
      alert("Please fill empty fields");
    } else {
      await addDoc(collection(db, "personalDetails"), {
        ...personalInfo,
        uid: userdata.uid,
      });
      alert("Personal datas successfully submitted");
      navigate("/category");
    }
  };

  return (
    <>
      <h1>Basic Information</h1>

      <div>
        <label>First Name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          required
          onKeyUp={(e) =>
            dispatch(
              setPersonalInfo({ ...personalInfo, firstName: e.target.value })
            )
          }
        ></input>
      </div>

      <div>
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Enter your last name"
          required
          onKeyUp={(e) =>
            dispatch(
              setPersonalInfo({ ...personalInfo, lastName: e.target.value })
            )
          }
        ></input>
      </div>

      <div>
        <label>Father Name</label>
        <input
          type="text"
          placeholder="Enter your father name"
          required
          onKeyUp={(e) =>
            dispatch(
              setPersonalInfo({ ...personalInfo, fatherName: e.target.value })
            )
          }
        ></input>
      </div>

      <div>
        <label>Age</label>
        <input
          type="number"
          placeholder="Enter your age"
          required
          onKeyUp={(e) =>
            dispatch(setPersonalInfo({ ...personalInfo, Age: e.target.value }))
          }
        ></input>
      </div>

      <div>
        <label>Marital Status</label>

        <select
          onChange={(e) =>
            dispatch(
              setPersonalInfo({
                ...personalInfo,
                maritalStatus: e.target.value,
              })
            )
          }
        >
          <option>Select marital status</option>
          <option>Married</option>
          <option>Unmarried</option>
        </select>
      </div>

      <div>
        <label>Gender</label>

        <select
          onChange={(e) =>
            dispatch(
              setPersonalInfo({ ...personalInfo, Gender: e.target.value })
            )
          }
        >
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
          onKeyUp={(e) =>
            dispatch(
              setPersonalInfo({ ...personalInfo, Email: e.target.value })
            )
          }
        ></input>
      </div>

      <div>
        <h5>Address</h5>

        <label>District</label>

        <select
          onChange={(e) =>
            dispatch(
              setPersonalInfo({
                ...personalInfo,
                Address: { ...personalInfo.Address, District: e.target.value },
              })
            )
          }
        >
          <option>Select District</option>
          <option>Ariyalur</option>
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
          <option>Tiruvannamalai</option>
          <option>Tiruvarur</option>
          <option>Vellore</option>
          <option>Viluppuram</option>
          <option>Virudhunagar</option>
        </select>

        <label>City</label>
        <input
          type="text"
          placeholder="Enter your City"
          required
          onKeyUp={(e) =>
            dispatch(
              setPersonalInfo({
                ...personalInfo,
                Address: { ...personalInfo.Address, City: e.target.value },
              })
            )
          }
        ></input>

        <label>Pin code</label>
        <input
          type="text"
          placeholder="Enter your Pincode"
          required
          onKeyUp={(e) =>
            dispatch(
              setPersonalInfo({
                ...personalInfo,
                Address: { ...personalInfo.Address, pinCode: e.target.value },
              })
            )
          }
        ></input>
      </div>

      <div>
        <label>Contact</label>
        <input
          type="text"
          placeholder="Enter your contact number"
          required
          onKeyUp={(e) =>
            dispatch(
              setPersonalInfo({ ...personalInfo, Contact: e.target.value })
            )
          }
        ></input>
      </div>

      <div>
        <button type="button" onClick={handlePersonalDetail}>
          Next
        </button>
      </div>
    </>
  );
}
