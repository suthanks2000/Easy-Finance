import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <Link className="navbar-brand fs-3" to="/admin">Easy Finance</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
<div className="collapse navbar-collapse" id="myNavbar">
  <ul className="navbar-nav justify-content-end flex-grow-1 pe-1">
  <li className="nav-item">
      <Link className="nav-link" to={'/admin/userdatas'}>UserDatas</Link>
    </li>
  <li className="nav-item">
      <Link className="nav-link" to={'/admin/loandatas'}>LoanDatas</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={'/category'}>category</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={'/admin/bankerreg'}>EMI Calulator</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={'/loandatas'}>Loan Datas</Link>
    </li>
    {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ApplyLoan
          </Link>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li>
            <Link className="dropdown-item text-capitalize" to={'/loans/personalloan'}>Personal Loan</Link>
            </li>
            <li>
              <Link className="dropdown-item text-capitalize " to={'/loans/homeloan'}>Home  Loan</Link>
            </li>
            <li>
              <Link className="dropdown-item text-capitalize" to={'/loans/vehicleloan'}>Vehicle Loan</Link>
            </li>
            <li>
              <Link className="dropdown-item text-capitalize" to={'/loans/businessloan'}>business Loan</Link>
            </li>
          </ul>
        </li> */}
    
  </ul>
</div>

</nav>
  )
}

export default AdminNavbar