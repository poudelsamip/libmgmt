import { Link } from "react-router-dom";
import "../logincss.css";

const SignUp = () => {
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
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control LogInInput"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control LogInInput"
                id="floatingPassword"
                placeholder="Confirm Password"
              />
              <label for="floatingPassword">Confirm Password</label>
            </div>

            <div className="signup">
              <p>
                Already have an account ?{"  "}
                <Link to="/mylibrary/login">Sign In</Link>
              </p>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign Up
            </button>

            <hr />
            <button className="btn btn-danger w-100 py-2" type="button">
              Continue with google
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
