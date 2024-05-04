import { useSelector, useDispatch } from "react-redux";
import { setPersonalInfo } from "../Redux-Toolkit/slices/PersonalDetailCounter";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css'; 




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
      console.log(personalInfo.maritalStatus)
      navigate("/category");
    }
  };


  const handleSignout = async () =>{
    await localStorage.getItem("userToken")
    localStorage.removeItem("userToken")
     navigate("/login")
   }
  
  return (

    <>
      <nav className="navbar sticky-top navbar-expand-lg  navbar-dark bg-dark">
  <Link className="navbar-brand fs-3" href="#">Easy Finance</Link>
  <button className="navbar-toggler shadow-none border-0" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="myNavbar">
    <ul className="navbar-nav justify-content-evenly flex-grow-1 pe-1">
    <li className="nav-item">
        <Link className="nav-link active " to={'/personaldetail'}>Personal Detail</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/category'}>category</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">EMI Calulator</Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Loan List
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link class="dropdown-item disabled">Personal Loan</Link>
          <Link class="dropdown-item disabled">Home  Loan</Link>
          <Link class="dropdown-item disabled">Vehicle Loan</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Help</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Enquiries</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">About</Link>
      </li>
      
    </ul>
  </div>
  <form className="d-flex">
    <input type="text" className="form-control me-2" placeholder="Search"/>
    <button type="button" className="btn btn-primary rounded-pill">Search</button>
  </form>
</nav>

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
        />
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
        />
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
        />
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
        />
      </div>

      <div>
        <label>Marital Status</label>

        <input type="radio" name="maritalStatus" value="married" onChange={(e)=>dispatch(setPersonalInfo({...personalInfo,
             maritalStatus:e.target.value}))}/>Married

       <input type="radio" name="maritalStatus" value="unmarried" onChange={(e)=>dispatch(setPersonalInfo({...personalInfo,
             maritalStatus:e.target.value}))}/>Unmarried

        
      </div>

<div>
        <label>Gender</label>

        <input type="radio" name="Gender" value="male" onChange={(e)=>dispatch(setPersonalInfo({...personalInfo,
           Gender:e.target.value}))}/>Male

       <input type="radio" name="Gender" value="female" onChange={(e)=>dispatch(setPersonalInfo({...personalInfo,
             Gender:e.target.value}))}/>Female

        
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
        />
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
        />

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
        />
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
        />
      </div>

      <div>
        <button type="button" onClick={handlePersonalDetail}>
          Next
        </button>

        <button type="button" onClick={handleSignout}>
         Sign Out
        </button>
      </div>

        
     
    </>
  );
}
