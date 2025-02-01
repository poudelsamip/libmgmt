import { Link, useNavigate } from "react-router-dom";
import "../logincss.css";
import { useRef } from "react";
import { useAuth } from "../store/authentication";

const SignUp = () => {
  const navigate = useNavigate();
  const emailVal = useRef();
  const passwordVal = useRef();
  const confirmPasswordVal = useRef();
  const { signUp } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    const email = emailVal.current.value;
    const password = passwordVal.current.value;
    const confirmPassword = confirmPasswordVal.current.value;
    if (password === confirmPassword) {
      try {
        await signUp(email, password);
        navigate("/mylibrary/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <div className="mainContainer">
        <div className="form-signin w-100 m-auto secondContainer">
          <form>
            <p className="text-center mb-0 ">Create an Account</p>
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
            <div className="form-floating">
              <input
                type="password"
                className="form-control LogInInput"
                id="floatingConfirmPassword"
                placeholder="Confirm Password"
                ref={confirmPasswordVal}
              />
              <label htmlFor="floatingConfirmPassword">Confirm Password</label>
            </div>

            <div className="signup">
              <p>
                Already have an account ?{"  "}
                <Link to="/mylibrary/login">Sign In</Link>
              </p>
            </div>

            <button
              className="btn btn-primary w-100 py-2"
              type="submit"
              onClick={handleSignup}
            >
              Sign Up
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

export default SignUp;
