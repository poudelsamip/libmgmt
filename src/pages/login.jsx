import { useRef } from "react";
import "../logincss.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/authentication";

const Login = () => {
  const emailVal = useRef();
  const passwordVal = useRef();
  const navigate = useNavigate();
  const { logIn } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailVal.current.value;
    const password = passwordVal.current.value;
    emailVal.current.value = "";
    passwordVal.current.value = "";
    try {
      await logIn(email, password);
      localStorage.setItem("isLoggedIn", true);
      navigate("/mylibrary/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="mainContainer">
        <div className="form-signin w-100 m-auto secondContainer">
          <form>
            <p className="text-center mb-0 ">Login to</p>
            <h1 className="h1 mb-3 fw-normal text-center newFont">
              My Library
            </h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control LogInInput"
                id="floatingInput"
                placeholder="name@example.com"
                ref={emailVal}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control LogInInput"
                id="floatingPassword"
                placeholder="Password"
                ref={passwordVal}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="signup">
              <p>
                Don't have an account ?{"  "}
                <Link to="/mylibrary/signup">Create an Account</Link>
              </p>
            </div>

            <button
              className="btn btn-primary w-100 py-2"
              type="submit"
              onClick={handleLogin}
            >
              Sign In
            </button>

            <hr />
            <button
              className="btn btn-danger w-100 py-2"
              type="button"
              disabled
            >
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
