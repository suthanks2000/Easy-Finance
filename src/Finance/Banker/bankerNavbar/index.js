import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const BankerNavbar = () => {
  const Navigate =useNavigate()
  return (

<div>
            <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent">
                <div className="container ps-2 pe-0">
                    <Link className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-light" style={{ fontSize: '26px' }}>
                        Easy Finance
                    </Link>
                    <button className="navbar-toggler shadow-none ml-4" style={{border: 'none' }} type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon mt-2">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
                        <ul className="navbar-nav navbar-nav-hover ms-auto">
                            <li className="nav-item dropdown dropdown-hover mx-2">
                                <Link to="/banker/payment" role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" id="dropdownMenuPagesBankers" style={{ fontSize: '18px' }}>
                                    Banker Payment
                                </Link>
                            </li>
                            <li className="nav-item dropdown dropdown-hover mx-2">
                                <Link to="/banker/customerdata" role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" id="dropdownMenuPagesUsers" style={{ fontSize: '18px' }}>
                                    Customer Details
                                </Link>
                            </li>
                            <li className="nav-item dropdown dropdown-hover mx-2">
                                <Link to="/banker/home" role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" id="dropdownMenuPagesUsers" style={{ fontSize: '18px' }}>
                                    Home
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-lg-block d-none ms-auto">
                            <li className="nav-item">
                                <Link to="/banker/login" className="btn btn-sm bg-white mb-0 me-1">
                                    LogOut
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

  )}




export default BankerNavbar