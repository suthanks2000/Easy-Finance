import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const BankerNavbar = () => {
  const Navigate =useNavigate()
  return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top align-items-center">
      
//     <Link className="navbar-brand fs-3" to="/banker/home">Easy Finance Banker</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
// <div className="collapse navbar-collapse align-items-center" id="myNavbar">
//   <ul className="navbar-nav justify-content-center flex-grow-1 pe-1">
//   <li className="nav-item">
//       <Link className="nav-link" to={'/banker/customerdata'}>LoanDatas</Link>
//     </li>
//     <li className="nav-item">
//       <Link className="nav-link" to={'/category'}>category</Link>
//     </li>
//     <li className="nav-item">
//       <Link className="nav-link" to={'/banker/payment'}>payment</Link>
//     </li>
//     <li className="nav-item">
//       <button type='button' className="btn btn-danger"onClick={()=>Navigate('/banker/login')}>SignOut</button>
//     </li>
//   </ul>
// </div>
    
// </nav>

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
      <ul className="navbar-nav d-flex justify-content-end flex-grow-1">
        <li className="nav-item">
          <Link className="nav-link" to="/banker/payment">Banker Payment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/banker/login">Banker Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>



  )
}

export default BankerNavbar