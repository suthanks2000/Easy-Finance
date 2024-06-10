import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./Finance/Login";
import Register from "./Finance/Register";
import Category from "./Finance/Category";
import PersonalDetail from "./Finance/PersonalDetail";
import SecuredLoansDetails from "./Finance/FinanceDetail/SecuredLoansDetails";
import ShowResult from "./Finance/ShowResult";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Finance/FirebaseConfig";
import EmiCalculator from "./Finance/EmiCalculator";
import {setuserdata, setIsLogin} from "./Finance/Redux-Toolkit/slices/RegLogCounter";
import BankerLog from "./Finance/Banker/bankerLog";
import BankerReg from "./Finance/Banker/bankerReg";
import { useSelector, useDispatch } from "react-redux";
import LoanDatas from "./Finance/LoanDatas";
import Dasborad from "./Finance/Admin/dasborad";
import UserLoanDatas from "./Finance/Admin/userLoanDatas";
import UserDatas from "./Finance/Admin/userDatas";
import BankerPayment from "./Finance/Banker/bankerPayment";
import BankerDatas from "./Finance/Admin/banker/bankerDatas";
import LogLinksent from "./Finance/Admin/banker/logLinksent";


function App() {
  const {isLogin,userdata} = useSelector((state) => state.regisLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogin) {
      if (localStorage.getItem("userToken")) {
        checkAuth();
      }
    }
  });

  const checkAuth = async () => {
    await onAuthStateChanged(auth, (currentuser) => {
      localStorage.setItem("userToken", currentuser.accessToken);
      console.log(currentuser)
      dispatch(setuserdata(currentuser));
      dispatch(setIsLogin(true));
      console.log(userdata);
    });
  };

  return (
    <div >
      <BrowserRouter>
        <Routes>
          {/* user routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category" element={<Category />} />
          <Route path="/loans/:loanName" element={<SecuredLoansDetails />} />
          <Route path="/showresult/:loanId" element={<ShowResult />} />
          <Route path="/emicalculator" element={<EmiCalculator/>}/>
          {/* {isLogin? <Route path="/personaldetail" element={<PersonalDetail/>}/>:null} */}
          <Route path="/personaldetail" element={<PersonalDetail/>}/>
          <Route path="/loandatas" element={<LoanDatas/>}/>
          
          {/* banker routes */}
          <Route path="/banker/login" element = {<BankerLog/>}/>
          <Route path="/banker/register" element = {<BankerReg/>}/>
          <Route path="/banker/payment" element={<BankerPayment/>}/>
          
          {/* admin routes */}
          <Route path="/admin/loandatas" element={<UserLoanDatas/>}/>
          <Route path="/admin/userdatas" element={<UserDatas/>}/>
          <Route path="/admin" element={<Dasborad/>}/>
          <Route path="/admin/banker/alldatas" element={<BankerDatas/>}/>
          <Route path="/admin/banker/loglink" element={<LogLinksent/>}/>
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
