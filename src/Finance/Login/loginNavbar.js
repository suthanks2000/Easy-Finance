import React from 'react'
import { Link } from 'react-router-dom';

 const LoginNavbar = () => {
  
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
          <a className="nav-link ps-2 d-flex justify-content-evenly cursor-pointer" aria-expanded="false">
                        <Link to="/banker/register">BankerRequest</Link>
          </a>
     </ul>
    </div>
</div>
</nav>


  );
};






export default LoginNavbar