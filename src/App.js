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
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/banker/login" element = {<BankerLog/>}/>
          <Route path="/banker/register" element = {<BankerReg/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/category" element={<Category />} />
          <Route path="/loans/:loanName" element={<SecuredLoansDetails />} />
          <Route path="/showresult/:loanId" element={<ShowResult />} />
          <Route path="/emicalculator" element={<EmiCalculator/>}/>
          <Route path="/admin/loandatas" element={<UserLoanDatas/>}/>
          <Route path="/admin" element={<Dasborad/>}/>
          {isLogin? <Route path="/personaldetail" element={<PersonalDetail/>}/>:null}
          <Route path="/loandatas" element={<LoanDatas/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
