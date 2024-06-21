import React, { useEffect, useState } from "react";
import "./bankerReg.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import BankerRegNavbar from './bankerRegNavbar';

const BankerReg = () => {
  const [bankerRegData, setBankerRegData] = useState({});
  const [plan, setPlan] = useState([]);
  const navigate=useNavigate()
  const [warning, setwarning] = useState(false)


  useEffect(() => {
    fetchPlanData();
  }, []);

  const fetchPlanData = async () => {
    try {

      const res = await axios.get("https://disondys.pythonanywhere.com/getbankerplans");

      setPlan(res.data);
      console.log(res.data);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  const getPlanCount = (e) => {
    const count = plan.filter((each)=>each.id == e.target.value)[0]
    setBankerRegData({ ...bankerRegData, "planCount": count.count });
  }
  const {personalloan,vehicleloan,businessloan,homeloan,planCount} = bankerRegData
    const total = personalloan+vehicleloan+businessloan+homeloan 

// useEffect(()=>{ 
//   if(total != planCount ){
//     setwarning(true)
//   }
// },[total])
  const tallayplanCount = () => {
    
    
  }
  const handleOnChange = (e) => {
    setBankerRegData({ ...bankerRegData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   const personalloanCount = Number(personalloan)
   const vehicleloanCount = Number(vehicleloan)
   const businessloanCount = Number(businessloan)
   const homeloanCount = Number(homeloan)
    const total = personalloanCount + vehicleloanCount+ businessloanCount+ homeloanCount ;
  
    if(total != planCount ){
          setwarning(true)
        } 
    else{
      

    const requestData = new FormData();
    requestData.append('bankername', bankerRegData.name);
    requestData.append('bankeremail', bankerRegData.email);
    requestData.append('bankercompany', bankerRegData.company);
    requestData.append('bankerdistrict', bankerRegData.district);
    requestData.append('bankercity', bankerRegData.city);
    requestData.append('bankerpincode', bankerRegData.pincode);
    requestData.append('bankercontact', bankerRegData.contact);
    requestData.append('bankerpassword', bankerRegData.password);
    requestData.append('bankerplan', bankerRegData.plan);
    requestData.append('personalloanCount', personalloanCount);
    requestData.append('vehicleloanCount', vehicleloanCount);
    requestData.append('businessloanCount', businessloanCount);
    requestData.append('homeloanCount', homeloanCount);

    try {

      const response = await axios.post("https://disondys.pythonanywhere.com/bankerRegister", requestData);

      console.log(response.data);
      alert(response.data);
      navigate("/banker/login")
    } catch (error) {
      console.error(error);
    }
    }
  };

  return (
    <>
    <BankerRegNavbar />
    <div className="card mt-4 w-70 mx-auto" id="basic-info">
      <div className="card-header border-0 bg-white">
        <h1>Easy Finance</h1>
        <h5> Banker Register</h5>
      </div>
      <div className="card-body pt-0">
        <form role="form" onSubmit={handleSubmit}>
        {JSON.stringify(bankerRegData)}
          <div className="row mb-3">
            
            <div className="col-md-6">
            {warning?
                      <div class="alert alert-warning alert-dismissible fade show" role="alert">
                      <span class="alert-icon"><i class="ni ni-like-2"></i></span>
                      <span class="alert-text"><strong>Warning!</strong> Pls Tally the Banker Plan Datas Count</span>
                      <button type="button" class="btn-close" data-bs-dismiss="alert" onClick={()=>setwarning(false)} aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                    :
                    null}
              <label htmlFor="username" className="form-label">Name</label>
              <input id="username" name="name" className="form-control" type="text" placeholder="Enter your Name" required onChange={handleOnChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="userPlan" className="form-label">Plan</label>
              <select className="form-control" name="plan" id="userPlan" required onChange={(e)=>{handleOnChange(e)
                getPlanCount(e)}}>
                <option >Select one</option>
                {plan.map((each, i) => (
                  <option key={i} value={each.id}>{each.plan_name.replace(/_/g, ' ').toUpperCase()}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="row mb-3">
          <div className="col-md-6">
              <label htmlFor="username" className="form-label">Company Name</label>
              <input id="username" name="company" className="form-control" type="text" placeholder="Enter your Name" required onChange={handleOnChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="userEmail" className="form-label">Email</label>
              <input id="userEmail" name="email" className="form-control" type="email" placeholder="Enter your Email" required onChange={handleOnChange} />
            </div>
            <div className="row mt-3">
            <label for="customRange3" class="form-label">Loan Data's Count AS Per Plan </label>
            <div className="col-md-3 ">
              <label for="customRange3" class="form-label">personal Loan Data Count ({personalloan})</label>
              <input type="range" class="form-range" name="personalloan" onChange={handleOnChange} min="0" max="5" step="1" id="customRange3"/>
            </div>
            <div className="col-md-3">
              <label for="customRange3" class="form-label"> home Loan Data Count ({homeloan})</label>
              <input type="range" class="form-range" name="homeloan" onChange={handleOnChange} min="0" max="5" step="1" id="customRange3"/>
            </div>
            <div className="col-md-3">
              <label for="customRange3" class="form-label">vehicle Loan  Data Count ({vehicleloan})</label>
              <input type="range" class="form-range" name="vehicleloan" onChange={handleOnChange} min="0" max="5" step="1" id="customRange3"/>
            </div>
            <div className="col-md-3">
              <label for="customRange3" class="form-label">business Loan Data Count({businessloan})</label>
              <input type="range" class="form-range" name="businessloan" onChange={handleOnChange} min="0" max="5" step="1" id="customRange3"/>
            </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="userPassword" className="form-label">Password</label>
              <input id="userPassword" name="password" className="form-control" type="password" placeholder="enter your password" required onChange={handleOnChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="userPassword" className="form-label fs-6">Total Data Count Need ({bankerRegData.planCount})</label>
              <input id="userPassword" name="password" className="form-control" type="number" placeholder="total tally count" disabled onChange={handleOnChange} />
            </div>

          </div>
          
          

          <div className="row mb-3">
            <div className="col-6">
              <label htmlFor="userDistrict" className="form-label">District</label>
              <select className="form-control" name="district" id="userDistrict" required onChange={handleOnChange}>
                <option value="">Select District</option>
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
            <div className="col-6">
              <label htmlFor="userCity" className="form-label">City</label>
              <input id="userCity" name="city" className="form-control" type="text" placeholder="Enter Your City" required onChange={handleOnChange} />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-6">
              <label htmlFor="userPincode" className="form-label">Pincode</label>
              <input id="userPincode" name="pincode" className="form-control" type="number" placeholder="Enter Your Pincode" required onChange={handleOnChange} />
            </div>
            <div className="col-6">
              <label htmlFor="userContact" className="form-label">Contact</label>
              <input id="userContact" name="contact" className="form-control" type="number" placeholder="Enter your Contact" required onChange={handleOnChange} />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <button type="submit" className="btn btn-primary float-end">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default BankerReg;
