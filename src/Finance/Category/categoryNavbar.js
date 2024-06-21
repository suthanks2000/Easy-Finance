import React from 'react'
import { Link } from 'react-router-dom'

const CategoryNavbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent">
      <div className="container ps-2 pe-0">
        <Link className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-light" style={{ fontSize: '26px' }}>
          Easy Finance
        </Link>
        <button className="navbar-toggler shadow-none ml-4" style={{ border: 'none' }} type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
          <ul className="navbar-nav navbar-nav-hover ms-auto">
            <li className="nav-item dropdown dropdown-hover mx-2">
              <Link to="/personaldetail" role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" style={{ fontSize: '18px' }}>
                Personal Detail
              </Link>
            </li>
            <li className="nav-item dropdown dropdown-hover mx-2">
              <Link to="/category" role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" style={{ fontSize: '18px' }}>
                Category
              </Link>
            </li>
            <li className="nav-item dropdown dropdown-hover mx-2">
              <Link to="/emicalculator" role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" style={{ fontSize: '18px' }}>
                EMI Calculator
              </Link>
            </li>
            <li className="nav-item dropdown dropdown-hover mx-2">
              <Link to="/loandatas" role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" style={{ fontSize: '18px' }}>
                Loan Datas
              </Link>
            </li>


            <li className="nav-item dropdown dropdown-hover mx-2">
              <Link role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" id="dropdownMenuApplyLoan" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '18px' }}>
                Apply loan
              </Link>
              <ul className="dropdown-menu" aria-labelledby="bankerDropdown">
                <li>
                  <Link to="/loans/homeloan" className="dropdown-item">
                    Home Loan
                  </Link>
                </li>
                <li>
                  <Link to="/loans/businessloan" className="dropdown-item">
                    Business Loan
                  </Link>
                </li>
                <li>
                  <Link to="/loans/personalloan" className="dropdown-item">
                    Personal Loan
                  </Link>
                </li>
                <li>
                  <Link to="/loans/vehicleloan" className="dropdown-item">
                    Vehicle Loan
                  </Link>
                </li>
              
              </ul>
            </li>
            <button type="button" className="nav-item dropdown dropdown-hover mx-2 border-0 text-white bg-dark"  style={{ borderRadius: '10px' }}>
              <Link to="/banker/home" role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" style={{ fontSize: '18px' }}>
                LogOut
              </Link>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  )
}

export default CategoryNavbar