import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return  (
    
    <>
  <nav className="navbar sticky-top navbar-expand-lg  navbar-dark bg-dark">
  <Link className="navbar-brand fs-3" href="#">Easy Finance</Link>
  <button className="navbar-toggler shadow-none border-0" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="myNavbar">
    <ul className="navbar-nav justify-content-evenly flex-grow-1 pe-1">
    <li className="nav-item">
        <Link className="nav-link" to={'/personaldetail'}>Personal Detail</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to={'/category'}>category</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/emicalculator'}>EMI Calulator</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/loandatas'}>Loan Datas</Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Loan List
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link class="dropdown-item" to={'/personalloandetail'}>Personal Loan</Link>
          <Link class="dropdown-item" to={'/personalloandetail'}>Home  Loan</Link>
          <Link class="dropdown-item" to={'/personalloandetail'}>Vehicle Loan</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Help</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Enquiries</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">About</Link>
      </li>
      
    </ul>
  </div>

</nav>
   
    </>
  )}

