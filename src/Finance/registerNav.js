import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterNav = () => {
  
  return (
 
<nav className="navbar navbar-expand-lg blur border-radius-lg top-0 shadow start-0 end-0 mx-4 sticky-top">
  <div className="container-fluid ps-2 pe-0">
    <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3">
      Easy-Finance
    </a>
    <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon mt-2">
        <span className="navbar-toggler-bar bar1"></span>
        <span className="navbar-toggler-bar bar2"></span>
        <span className="navbar-toggler-bar bar3"></span>
      </span>
    </button>
    <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
      <ul className="navbar-nav navbar-nav-hover d-flex justify-content-end flex-grow-1">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="bankerDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Invite Banker
          </a>
          <ul className="dropdown-menu" aria-labelledby="bankerDropdown">
            <li><Link className="dropdown-item" to="/banker/referplan">Banker Register</Link></li>
            <li><Link className="dropdown-item" to="/banker/login">Banker Login</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
