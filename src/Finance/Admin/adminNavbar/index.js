import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (



    <div>
    <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent mt-4">
        <div className="container ps-2 pe-0">
            <Link className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-light" to="/dashboard" style={{ fontSize: '24px' }}>
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
                <li className="nav-item  dropdown dropdown-hover mx-2">
                  <Link to="/admin" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" style={{ fontSize: '18px' }}>
                    Dasborad
                  </Link>
                </li>
                    <li className="nav-item dropdown dropdown-hover mx-2">
                        <Link role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" id="dropdownMenuPagesBankers" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '18px' }}>
                            Bankers
                            <img src="/assets/img/down-arrow-white.svg" alt="down-arrow" className="arrow ms-1 d-lg-block d-none"/>
                            <img src="/assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-1 d-lg-none d-block"/>
                        </Link>
                        
                        <ul className="dropdown-menu custom-dropdown-menu" aria-labelledby="dropdownMenuPagesBankers">
                            <li><Link className="dropdown-item text-dark" to="/admin/banker/alldatas">Banker Datas</Link></li>
                            <li><Link className="dropdown-item text-dark" to="/admin/banker/plans">Banker Plans</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown dropdown-hover mx-2">
                        <Link role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" id="dropdownMenuPagesUsers" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '18px' }}>
                            Users
                            <img src="/assets/img/down-arrow-white.svg" alt="down-arrow" className="arrow ms-1 d-lg-block d-none"/>
                            <img src="/assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-1 d-lg-none d-block"/>
                        </Link>
                        <ul className="dropdown-menu custom-dropdown-menu" aria-labelledby="dropdownMenuPagesUsers">
                            <li><Link className="dropdown-item text-dark" to="/admin/userdatas">User Datas</Link></li>
                            <li><Link className="dropdown-item text-dark" to="/admin/loandatas">User Loan Datas</Link></li>
                        </ul>
                    </li>
                </ul>
                <ul className="navbar-nav d-lg-block d-none ms-auto">
                    <li className="nav-item">
                        <Link href="javascript:;" className="btn btn-sm bg-white mb-0 me-1">
                            LogOut
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>



)
}


export default AdminNavbar