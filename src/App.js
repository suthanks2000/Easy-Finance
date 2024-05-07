import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./Finance/Login";
import Register from "./Finance/Register";
import Category from "./Finance/Category";
import PersonalDetail from "./Finance/PersonalDetail";
import PersonalLoanDetail from "./Finance/FinanceDetail/PersonalLoanDetails";
import VehicleLoanDetails from "./Finance/FinanceDetail/VehicleLoanDetails";
import ShowResult from "./Finance/ShowResult";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Finance/FirebaseConfig";
import EmiCalculator from "./Finance/EmiCalculator";

import {
  setuserdata,
  setIsLogin,
} from "./Finance/Redux-Toolkit/slices/RegLogCounter";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const isLogin = useSelector((state) => state.regisLogin.isLogin);
  const userdata = useSelector((state) => state.regisLogin.userdata);
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
      dispatch(setuserdata(currentuser));
      dispatch(setIsLogin(true));
      console.log(userdata);
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/personaldetail" element={<PersonalDetail />} />
          <Route path="/category" element={<Category />} />
          <Route path="/loans/:loanName" element={<PersonalLoanDetail />} />
          <Route path="/vehicleloandetail" element={<VehicleLoanDetails />} />
          <Route path="/showresult" element={<ShowResult />} />
          <Route path="/EmiCalculator" element={<EmiCalculator/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
