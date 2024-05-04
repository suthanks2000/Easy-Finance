import 'bootstrap/dist/css/bootstrap.min.css';  
import { Link } from 'react-router-dom';


export default function Category (){
    return(
       <>
   
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className='d-flex'>
        <div>
        {/* Brand/logo */}
        <Link className="navbar-brand" to="/">Easy Finance</Link>
        <Link className="navbar-brand" to="/">Personal Detail Data</Link>

        {/* Toggler button for mobile */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>

        {/* Navbar links */}
        <div className=" collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">EMI calculator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Enquiries</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Help</Link>
            </li>
          </ul>
        </div>
      </div>
        
    </nav>


       <h1 className='h1 mt-5'>Category</h1>
   
<div className="col d-flex justify-content-center mt-5"
style={{display:"flex",gap:"170px"}}>
    
    <Link to={"/financedetail"} style={{ textDecoration: 'none' }}>
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
<Link to={"/financedetail"} style={{ textDecoration: 'none' }}>
<div className="card text-bg-dark text-warning" style={{width:"200px"}}>
  <img src="category.png" className="card-img" alt="..." style={{width:"200px"}}/>
  <div className="card-img-overlay">
    <h5 className="card-title">Home Loan</h5>
  
  </div>
</div>
</Link>

<Link to={"/financedetail"} style={{ textDecoration: 'none' }}>
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