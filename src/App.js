import logo from "./logo.svg";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import Login from "./Finance/Login";
import Register from "./Finance/Register";
import Category from "./Finance/Category";
import PersonalDetail from "./Finance/PersonalDetail";
import FinanceDetail from "./Finance/FinanceDetail";
import ShowResult from "./Finance/ShowResult";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category" element={<Category />} />
          <Route path="/personaldetail" element={<PersonalDetail />} />
          <Route path="/financedetail" element={<FinanceDetail />} />
          <Route path="/showresult" element={<ShowResult />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
