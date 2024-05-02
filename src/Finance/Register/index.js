import { useSelector, useDispatch } from "react-redux";
import { setRegisterData } from "../Redux-Toolkit/slices/RegLogCounter";
import { auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
  const regData = useSelector((state) => state.counter.registerData);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleCreate = async () => {
    await createUserWithEmailAndPassword(auth, regData.Email, regData.Password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("User Added");
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

      <h1>Welcome to Register Page</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          onKeyUp={(e) =>
            dispatch(setRegisterData({ ...regData, Name: e.target.value }))
          }
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          onKeyUp={(e) =>
            dispatch(setRegisterData({ ...regData, Email: e.target.value }))
          }
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          onKeyUp={(e) =>
            dispatch(setRegisterData({ ...regData, Password: e.target.value }))
          }
        />
      </div>

      <div>
        <button type="button" onClick={handleCreate}>
          Register
        </button>
      </div>

      <div>
        Already have an account?<Link to={`/login`}>LoginHere!</Link>
      </div>
    </>
  );
}
