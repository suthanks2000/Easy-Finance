import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./Finance/Login";
import Register from "./Finance/Register";
import Category from "./Finance/Category";
import PersonalDetail from "./Finance/PersonalDetail";
import SecuredLoansDetails from "./Finance/FinanceDetail/SecuredLoansDetails";
import ShowResult from "./Finance/ShowResult";
import { useEffect,useState } from "react";
import EmiCalculator from "./Finance/EmiCalculator";
import BankerLog from "./Finance/Banker/bankerLog";
import BankerReg from "./Finance/Banker/bankerReg";
import { useSelector, useDispatch } from "react-redux";
import LoanDatas from "./Finance/LoanDatas";
import Dasborad from "./Finance/Admin/dasborad";
import UserLoanDatas from "./Finance/Admin/user/userLoanDatas.js";
import UserDatas from "./Finance/Admin/user/userDatas.js";
import BankerPayment from "./Finance/Banker/bankerPayment";
import BankerDatas from "./Finance/Admin/banker/bankerDatas";
import Customerdata from "./Finance/Banker/datasdownload.js";
import LandinngComponent from "./Finance/Banker/LandingPage/index.js";
import RegisterPersonalDetail from "./Finance/Register/RegisterPersonaldetail/index.js";
import BankerVerify from "./Finance/Admin/banker/BankerVerify.js";
import BankerPlans from "./Finance/Admin/banker/bankerPlans.js";
import BankerPlansCard from "./Finance/Banker/bankerPlanscard.js";
import AdminLogin from "./Finance/Admin/adminLogin.js";




function App() {
  const {isLogin,userdata} = useSelector((state) => state.regisLogin);
  const dispatch = useDispatch();
  const [emailVerify,setEmailVerify] = useState({})

  // useEffect(() => {
  //   if (!isLogin) {
  //     if (localStorage.getItem("userToken")) {
  //       checkAuth();
  //     }
  //   }
  // });

 

  return (
    <div >
      <BrowserRouter>
        <Routes>
          {/* user routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/personaldetail" element={<RegisterPersonalDetail/>}/>
          <Route path="/category" element={<Category />} />
          <Route path="/loans/:loanName" element={<SecuredLoansDetails />} />
          <Route path="/showresult" element={<ShowResult />} />

          <Route path="/emicalculator" element={<EmiCalculator/>}/>
          <Route path="/personaldetail" element={<PersonalDetail/>}/>
          <Route path="/loandatas" element={<LoanDatas/>}/>
          
          {/* banker routes */}
       
          <Route path="/banker/referplan" element = {<BankerPlansCard/>}/>
          <Route path="/banker/register" element = {<BankerReg/>}/>
          <Route path="/verifiedEmail/:token" element={<BankerVerify/>}/>
          <Route path="/banker/login" element = {<BankerLog/>}/>
          
          <Route path="/banker/payment" element={<BankerPayment/>}/>
          <Route path="/banker/customerdata" element = {<Customerdata/>}/>
          <Route path="/banker/home" element = {<LandinngComponent/>}/>
         
          
          {/* admin routes */}
          <Route path="/admin/loandatas" element={<UserLoanDatas/>}/>
          <Route path="/admin/userdatas" element={<UserDatas/>}/>
          <Route path="/admin" element={<Dasborad/>}/>
          <Route path="/admin/banker/alldatas" element={<BankerDatas />}/>
          <Route path="/admin/banker/plans" element={<BankerPlans />}/>
          
          <Route path="/adminLogin" element={<AdminLogin/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
