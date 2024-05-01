import { auth } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoginData,
  setuserdata,
} from "../Redux-Toolkit/slices/RegLogCounter";
import { Link } from "react-router-dom";

export default function Login() {
  const logData = useSelector((state) => state.counter.loginData);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const Handlelogin = () => {
    signInWithEmailAndPassword(auth, logData.Email, logData.Password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("user-token", user.accessToken);
        dispatch(setuserdata(user));

        console.log(user);
        alert("login sucess");
        Navigate("/PersonalDetail");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("error");
      });
  };

  return (
    <>
      <h1>Welcome to Login Pages</h1>

      <div>
        <label>Email</label>
        <input
          type="email"
          onKeyUp={(e) =>
            dispatch(setLoginData({ ...logData, Email: e.target.value }))
          }
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          onKeyUp={(e) =>
            dispatch(setLoginData({ ...logData, Password: e.target.value }))
          }
        />
      </div>
      <div>
        <button type="button" onClick={Handlelogin}>
          Login
        </button>
      </div>

      <div>
        Dont have an account?<Link to={`/Register`}>RegisterHere!</Link>
      </div>
    </>
  );
}
