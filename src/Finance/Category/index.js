import 'bootstrap/dist/css/bootstrap.min.css';  
import { Link } from 'react-router-dom';


export default function Category (){
  
    return(
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
        <Link className="nav-link" href="#">EMI Calulator</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/personaldatas'}>Your Datas</Link>
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
  <form className="d-flex">
    <input type="text" className="form-control me-2" placeholder="Search"/>
    <button type="button" className="btn btn-primary rounded-pill">Search</button>
  </form>
</nav>
    <div>
    <h1 className='h1 mt-5'>Category</h1>
    </div>
   
<div className="col d-flex justify-content-center mt-5"
style={{display:"flex",gap:"170px"}}>
    
    <Link to={"/loans/personalloan"} style={{ textDecoration: 'none' }}>
<div className="card text-bg-dark text-warning" style={{width:"200px"}}>
  <img src="category.png" className="card-img" alt="..." style={{width:"200px"}}/>
  <div className="card-img-overlay">
    <h5 className="card-title">Personal Loan</h5>
  
  </div>
</div>
</Link>

<Link to={"/vehicleloandetail"} style={{ textDecoration: 'none' }}>
<div className="card text-bg-dark text-warning" style={{width:"200px"}}>
  <img src="category.png" className="card-img" alt="..." style={{width:"200px"}}/>
  <div className="card-img-overlay">
    <h5 className="card-title">Vehicle Loan</h5>
  
  </div>
</div>
</Link>
</div>

<div className="col d-flex justify-content-center mt-5" style={{display:"flex",gap:"170px"}}>
<Link to={"/loans/homeloan"} style={{ textDecoration: 'none' }}>
<div className="card text-bg-dark text-warning" style={{width:"200px"}}>
  <img src="category.png" className="card-img" alt="..." style={{width:"200px"}}/>
  <div className="card-img-overlay">
    <h5 className="card-title">Home Loan</h5>
  
  </div>
</div>
</Link>

<Link to={"/loans/businessloan"} style={{ textDecoration: 'none' }}>
<div className="card text-bg-dark text-warning" style={{width:"200px"}}>
  <img src="category.png" className="card-img" alt="..." style={{width:"200px"}}/>
  <div className="card-img-overlay">
    <h5 className="card-title">Business Loan</h5>
  
  </div>
</div>
</Link>
</div>

      
</>
    )
}