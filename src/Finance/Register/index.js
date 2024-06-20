import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setRegisterData } from "../Redux-Toolkit/slices/RegLogCounter";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import "./index.css";
import { RegisterNav } from "../registerNav";

export default function Register() {
  const regData = useSelector((state) => state.regisLogin.registerData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();

    const requestData = new FormData();
    requestData.append("username", regData.Name);
    requestData.append("useremail", regData.Email);
    requestData.append("userpassword", regData.Password);

    await axios
      .post("https://disondys.pythonanywhere.com/userRegister", requestData)
      .then((res) => {
        if (res.data.existing) {
          alert(res.data.existing);
        } else if (res.data.uid && res.data.token) {
          alert(`Registration successful. Your UID: ${res.data.uid}`);
          alert(res.data.token);
          localStorage.setItem("loginUserId", JSON.stringify(res.data.uid));
          localStorage.setItem("Token", res.data.token);
          navigate("/register/personaldetail");
        }
      })
      .catch((error) => {});
  };

  return (
    <>
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">{<RegisterNav />}</div>
        </div>
      </div>
      <main className="main-content mt-0">
        <section>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                  <div className="card card-plain" style={{ border: "none" }}>
                    <div
                      className="card-header pb-0 text-left"
                      style={{ border: "none" }}
                    >
                      <h4 className="font-weight-bolder">Sign Up</h4>
                      <p className="mb-0">
                        Enter your email and password to register
                      </p>
                    </div>

                    <div className="card-body pb-3">
                      <form role="form" onSubmit={handleCreate}>
                        <label for="username" class="form-label">
                          Name
                        </label>
                        <div className="mb-3">
                          <input
                            type="text"
                            placeholder="Name"
                            class="form-control"
                            id="username"
                            onChange={(e) =>
                              dispatch(
                                setRegisterData({
                                  ...regData,
                                  Name: e.target.value,
                                })
                              )
                            }
                            required
                          />
                        </div>

                        <label for="useremail" class="form-label">
                          Email
                        </label>
                        <div className="mb-3">
                          <input
                            type="email"
                            placeholder="Email Id"
                            class="form-control"
                            id="useremail"
                            onChange={(e) =>
                              dispatch(
                                setRegisterData({
                                  ...regData,
                                  Email: e.target.value,
                                })
                              )
                            }
                            required
                          />
                        </div>

                        <label for="userPassword" class="form-label">
                          Password
                        </label>
                        <div className="mb-3">
                          <input
                            type="password"
                            placeholder="Password"
                            class="form-control"
                            id="userPassword"
                            onChange={(e) =>
                              dispatch(
                                setRegisterData({
                                  ...regData,
                                  Password: e.target.value,
                                })
                              )
                            }
                            required
                          />
                        </div>

                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary w-100 mt-4 mb-0"
                          >
                            Sign up
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="card-footer text-center pt-0 px-sm-4 px-1">
                      <p className="mb-4 mx-auto">
                        Already have an account?
                        <a className="text-primary font-weight-bold">
                          <Link to="/">Sign In</Link>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                  <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden">
                    <span className="mask bg-primary opacity-4"></span>
                    <h4 className="mt-5 text-white font-weight-bolder position-relative">
                      Your journey starts here
                    </h4>
                    <p className="text-white position-relative">
                      Just as it takes a company to sustain a product, it takes
                      a community to sustain a protocol.
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
