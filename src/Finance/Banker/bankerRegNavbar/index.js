import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const BankerRegNavbar = () => {
  const Navigate =useNavigate()
  return (

    <nav className="navbar navbar-expand-lg blur border-radius-lg top-0 shadow start-0 end-0 mx-4 sticky-top">
    <div className="container-fluid ps-2 pe-0">
      <Link className="navbar-brand font-weight-bolder ms-lg-0 ms-3" >
        Easy-Finance
      </Link>
      <button
        className="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon mt-2">
          <span className="navbar-toggler-bar bar1"></span>
          <span className="navbar-toggler-bar bar2"></span>
          <span className="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul className="navbar-nav navbar-nav-hover d-flex justify-content-end flex-grow-1">
          <li className="nav-item dropdown">
            <Link className="nav-link" to="/banker/referplan" role="button" aria-expanded="false">
              Banker Refer
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link" to="/banker/register" role="button" aria-expanded="false">
              Banker Register
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link" to="/banker/login" role="button" aria-expanded="false">
              Banker Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  )}




  export default BankerRegNavbar