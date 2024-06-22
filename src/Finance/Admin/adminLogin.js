
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });


  const checkLogin = async () => {
    const requestData = new FormData();
    requestData.append("email", loginData.email);
    requestData.append("password", loginData.password);

    try {
      const res = await axios.post("https://PreethiJP.pythonanywhere.com/adminLogin", requestData);
      console.log(res.data);
      alert(JSON.stringify(res.data));
      localStorage.setItem("Token", res.data.token);
      localStorage.setItem("AdminUid", JSON.stringify(res.data.uid));
      navigate("/admin/banker/alldatas");
    } catch (error) {
      console.error(error);
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <>
      {/* {JSON.stringify(loginData)} */}
      <main className="main-content mt-0">
        <div className="page-header align-items-start min-vh-50 pt-7 pb-9 m-3 border-radius-lg">
          <span className="mask bg-gradient-dark opacity-6"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 text-center mx-auto">
                <h1 className="text-white mb-2 mt-5">Welcome!</h1>
                <h3 className="text-lead text-white">Admin Login</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
              <div className="card mt-5">
                <div className="card-header pb-0 text-start" style={{ border: 'none' }}>
                  <h3 className="font-weight-bolder">Welcome back</h3>
                  <p className="mb-0">Enter your email and password to sign in</p>
                </div>
                <div className="card-body">
                  <form role="form" className="text-start">
                    <label>Email</label>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        aria-label="Email"
                        name="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, [e.target.name]: e.target.value })}
                      />
                    </div>
                    <label>Password</label>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        aria-label="Password"
                        name="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, [e.target.name]: e.target.value })}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-primary w-100 mt-4 mb-0"
                        onClick={checkLogin}
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-4 text-sm mx-auto">
                    Don't have an account?
                    <a href="javascript:;" className="text-primary font-weight-bold">Sign up</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminLogin;
