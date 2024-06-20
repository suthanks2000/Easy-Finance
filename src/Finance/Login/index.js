import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setLoginData } from "../Redux-Toolkit/slices/RegLogCounter";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import LoginNavbar from "./loginNavbar.js";

export default function Login() {
  const logData = useSelector((state) => state.regisLogin.loginData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const backgroundImage =
    "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg')";

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default

    const formData = new FormData();
    formData.append("email", logData.Email);
    formData.append("password", logData.Password);

   
      await axios.post("https://PreethiJP.pythonanywhere.com/loginUser", formData)

        .then(response => {
          if (response.data.message) {
            alert(response.data.message);
            if (response.data.message === "Incomplete personal detail") {
             
              localStorage.setItem("Token", response.data.token);
              localStorage.setItem("loginUserId", JSON.stringify(response.data.uid));
              navigate("/register/personaldetail");
            }
            setLoading(false)
          } else {
            alert("You are authenticated!");
            alert(`Token: ${response.data.token}`);
            alert(`UID: ${response.data.uid}`);
        })
        .catch(err => {
          console.error("Login error:", err);
          setLoading(false);
        });
        
    
};

  return (
    <>
      <div className="container position-sticky z-index-sticky mt-0 ">
        <div className="row">
          <div className="col-12">
            <LoginNavbar />
          </div>
        </div>
      </div>

      <main className="main-content  mt-0">
        <section>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto mb-lg-0 mb-5">
                  <div className="card card-plain border-0 mb-5">
                    <div className="card-header pb-0 text-start border-0">
                      <h4 className="font-weight-bolder">Sign In</h4>
                      <p className="mb-0">
                        Enter your email and password to sign in
                      </p>
                    </div>
                    <div className="card-body">
                      <form role="form" onSubmit={handleLogin}>
                        <label for="useremail" class="form-label">
                          Email
                        </label>
  
       <main className="main-content  mt-0">
    <section>
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto mb-lg-0 mb-5">
              <div className="card card-plain border-0 mb-5">
                <div className="card-header pb-0 text-start border-0">
                  <h4 className="font-weight-bolder">Sign In</h4>
                  <p className="mb-0">Enter your email and password to sign in</p>
                </div>
                <div className="card-body">
      <form role="form" onSubmit={handleLogin}>
        
        <label>Email</label>
        <div className="mb-3">
          <input 
            type="email" 
            className="form-control form-control-lg" 
            placeholder="Email" 
            aria-label="Email" 
            style={{ fontSize: '16px' }}
            onChange={(e) => dispatch(setLoginData({ ...logData, Email: e.target.value })) }
            required/>
        </div>

       
        <label>Password</label>
        <div className="mb-3">
          <input 
            type="password" 
            className="form-control form-control-lg" 
            placeholder="Password" 
            aria-label="Password" 
            style={{ fontSize: '16px' }} 
            onChange={(e) => dispatch(setLoginData({ ...logData, Password: e.target.value })) }
            required/>
        </div>
                   
      
        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
                            disabled={loading}
                          >
                            {loading ? <Spinner animation="border" size="sm" /> : 'Sign in'}
                          </button>
                        </div>
                      </form>
                    </div>


                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-4 text-sm mx-auto">
                    Don't have an account?
                    <Link to="/register" className="text-primary text-gradient font-weight-bold">Sign up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
