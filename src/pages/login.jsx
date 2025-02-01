import "../logincss.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="form-signin w-100 m-auto secondContainer">
          <form>
            <p className="text-center mb-0 ">Login to</p>
            <h1 className="h3 mb-3 fw-normal text-center newFont">
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

            <div className="signup">
              <p>
                Don't have an account ?{"  "}
                <Link to="/mylibrary/signup">Create an Account</Link>
              </p>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign In
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

export default Login;
