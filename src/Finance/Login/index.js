import { auth } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoginData,
  setuserdata,
  setIsLogin,
} from "../Redux-Toolkit/slices/RegLogCounter";
import { Link } from "react-router-dom";

export default function Login() {
  const isLogin = useSelector((state) => state.regisLogin.isLogin);
  const logData = useSelector((state) => state.regisLogin.loginData);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, logData.Email, logData.Password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("userToken", user.accessToken);
        dispatch(setuserdata(user));
        dispatch(setIsLogin(true));
        console.log(user);
        alert("login success");
        Navigate("/personalDetail");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Error");
      });
  };

  return (
    <>
      <h1>Welcome to Login Pages</h1>

      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          onKeyUp={(e) =>
            dispatch(setLoginData({ ...logData, Email: e.target.value }))
          }
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          onKeyUp={(e) =>
            dispatch(setLoginData({ ...logData, Password: e.target.value }))
          }
        />
      </div>
      <div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </div>

      <div>
        Dont have an account?<Link to={"/register"}>RegisterHere!</Link>
      </div>
    </>
  );
}
