
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setBankLogin } from "../Redux-Toolkit/slices/BankerReg&LogCounter";
import axios from "axios";

import BankerNavbar from './bankerNavbar';

export default function BankerLog() {
  const { bankLogin } = useSelector((state) => state.bankerRegLog);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(setBankLogin({}));
  }, []);

  const handleOnChange = (ele) => {
    dispatch(
      setBankLogin({ ...bankLogin, [ele.target.name]: ele.target.value })
    );
  };


  const handleBankerLogin = async (ele) => {
    ele.preventDefault();

  
      const data = new FormData();
      data.append("bankeremail", bankLogin.Email);
      data.append("bankerpassword", bankLogin.Password);

      await axios
        .post("https://PreethiJP.pythonanywhere.com/allowBankerLogin", data)
        .then((res) => {
          if (res.data.notfound) {
            alert("Banker not found");
          } else if (res.data.notverify) {
            alert("Your account is not verified");
          } else {
            alert("Verified successfully. Logging in...");
            console.log(res.data);
            console.log(res.data.token);
            localStorage.setItem("bankerToken", res.data.token);
            localStorage.setItem("bankerId", res.data.uid);
            navigate("/banker/home");
          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
          alert(error);
        });
    
  };

  return (
    <>
 <BankerNavbar />
      <main className="main-content  mt-0">
        <section>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                  <div className="card card-plain" style={{border:"none"}}>
                    <div className="card-header pb-0 text-start" style={{border:"none"}}>
                      <h4 className="font-weight-bolder">Sign In</h4>
                      <p className="mb-0">
                        Enter your email and password to sign in
                      </p>
                    </div>

                    <div className="card-body">
                      <form role="form" onSubmit={handleBankerLogin}>
                      <label for="bankerEmail" class="form-label">Email</label>
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="bankerEmail"
                            class="form-control"
                            placeholder="Enter your Email"
                            aria-label="Email"
                            name="Email"
                            onChange={handleOnChange}
                            required
                            style={{ fontSize: '16px' }} 
                          />
              
                        </div>
                         
                        <label for="bankerPassword" class="form-label">Password</label>
                        <div className="mb-3">
                        
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="bankerPassword"
                            placeholder="Enter your Password"
                            aria-label="Password"
                            name="Password"
                            onChange={handleOnChange}
                            required
                            style={{ fontSize: '16px' }} 
                          />                         
                        </div>

                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
                            
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-4 text-sm mx-auto">
                        Don't have an account?
                        <Link
                          to="/banker/referplan"
                          className="text-primary text-gradient font-weight-bold"
                        >
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                  <div
                    className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                  >
                    <span className="mask bg-gradient-primary opacity-6"></span>
                    <h4 className="mt-5 text-white font-weight-bolder position-relative">
                      "Attention is the new currency"
                    </h4>
                    <p className="text-white position-relative">
                      The more effortless the writing looks, the more effort the
                      writer actually put into the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
