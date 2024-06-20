import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (


    <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-blue mt-4">
    <div className="container ps-2 pe-0">
        <Link className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-black" to="/dashboard">
            Argon Dashboard 2 PRO
        </Link>
        <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon mt-2">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
            </span>
        </button>
        <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
            <ul className="navbar-nav navbar-nav-hover mx-auto">
                <li className="nav-item dropdown dropdown-hover mx-2">
                    <a role="button" className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
                        Pages
                        <img src="%PUBLIC_URL%/assets/img/down-arrow-white.svg" alt="down-arrow" className="arrow ms-1 d-lg-block d-none"/>
                        <img src="%PUBLIC_URL%/assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-1 d-lg-none d-block"/>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuPages">
                        {/* Dropdown menu items here */}
                        <li><Link className="dropdown-item" to="/banker-datas">Banker Datas</Link></li>
                        <li><Link className="dropdown-item" to="/user-datas">User Datas</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>

)
}
{/* //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top align-items-center">
      
//     <Link className="navbar-brand fs-3" to="/admin">Easy Finance</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
// <div className="collapse navbar-collapse align-items-center" id="myNavbar">
//   <ul className="navbar-nav justify-content-center flex-grow-1 pe-1">
//   <li className="nav-item">
//       <Link className="nav-link" to={'/admin'}>Dasborad</Link>
//     </li> */}
  {/* <li className="nav-item">
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
    </li> */}
    {/* // <li className="nav-item dropdown">
    //   <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //     user
    //   </Link>
    //   <ul className="dropdown-menu bg-dark " aria-labelledby="navbarDropdown">
    //     <li>
    //     <Link className="nav-link" to={'/admin/userdatas'}>UserDatas</Link>
    //     </li>
    //     <li>
    //     <Link className="nav-link" to={'/admin/loandatas'}>userLoanDatas</Link>
    //     </li>
    //   </ul>
    // </li>
//     <li className="nav-item dropdown">
//       <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//         banker
//       </Link>
//       <ul className="dropdown-menu bg-dark " aria-labelledby="navbarDropdown">
//         <li>
//         <Link className="nav-link" to={'/admin/userdatas'}>userLoanDatas</Link>
//         </li>
//         <li>
//         <Link className="nav-link" to={'/admin/loandatas'}>bankerPayment</Link>
//         </li>
//         <li>
//         <Link className="nav-link" to={'/admin/banker/alldatas'}>BankerDatas</Link>
//         </li>
//         <li>
//         <Link className="nav-link" to={'/admin/banker/plans'}>banker plans</Link>
//         </li>
//       </ul>
//     </li>
//   </ul>
// </div>
    
// </nav> */}


export default AdminNavbar