import { Link, useNavigate } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useEffect } from "react";

const Hero = () => {
  return (
    <>
      <div className="text-center d-flex justify-content-center align-items-center hero">
        <div>
          <h1 className="display-5 fw-bold  heroHeading newFont">My Library</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Efficiently manage your library with our all-in-one system.
              Streamline book issuing and returns, maintain records, and gain
              insights into collection usage. Simplify operations and enhance
              service delivery. Contact us today!
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to={"/mylibrary/login"}>
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 gap-3 d-flex justify-content-center align-items-center"
                >
                  Continue <FaArrowAltCircleRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
