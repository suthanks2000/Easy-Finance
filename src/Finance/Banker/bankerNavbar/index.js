import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const BankerNavbar = () => {
  const Navigate =useNavigate()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top align-items-center">
      
    <Link className="navbar-brand fs-3" to="/banker/home">Easy Finance Banker</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
<div className="collapse navbar-collapse align-items-center" id="myNavbar">
  <ul className="navbar-nav justify-content-center flex-grow-1 pe-1">
  <li className="nav-item">
      <Link className="nav-link" to={'/banker/customerdata'}>UserDatas</Link>
    </li>
  <li className="nav-item">
      <Link className="nav-link" to={'/banker/customerdata'}>LoanDatas</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={'/category'}>category</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={'/banker/payment'}>payment</Link>
    </li>
    <li className="nav-item">
      <button type='button' className="btn btn-danger"onClick={()=>Navigate('/banker/login')}>SignOut</button>
    </li>
    {/* <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        user
      </Link>
      <ul className="dropdown-menu bg-dark " aria-labelledby="navbarDropdown">
        <li>
        <Link className="nav-link" to={'/admin/userdatas'}>UserDatas</Link>
        </li>
        <li>
        <Link className="nav-link" to={'/admin/loandatas'}>userLoanDatas</Link>
        </li>
      </ul>
    </li>
    <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        banker
      </Link>
      <ul className="dropdown-menu bg-dark " aria-labelledby="navbarDropdown">
        <li>
        <Link className="nav-link" to={'/admin/userdatas'}>BankerDatas</Link>
        </li>
        <li>
        <Link className="nav-link" to={'/admin/loandatas'}>bankerPayment</Link>
        </li>
        <li>
        <Link className="nav-link" to={'/admin/banker/alldatas'}>userLoanDatas</Link>
        </li>
      </ul>
    </li> */}
  </ul>
</div>
    
</nav>
  )
}

export default BankerNavbar