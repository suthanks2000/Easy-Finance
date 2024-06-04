 import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
export default function Category (){
  
    return(
      <>
           <Navbar/>
         <h1>Category</h1>
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

<Link to={"/loans/vehicleloan"} style={{ textDecoration: 'none' }}>
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

//     <div>
//     <h1 className='h1 mt-5'>Category</h1>
//     </div>
   



