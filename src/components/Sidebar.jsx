import { Link } from "react-router-dom";

const Sidebar = ({ currentTab, setCurrentTab }) => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "250px", height: "100vh" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">My Library</span>
        </a>
        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={() => setCurrentTab("Dashboard")}>
            <Link
              to="/mylibrary"
              className={`nav-link text-white ${
                currentTab === "Dashboard" && "active"
              }`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Dashboard
            </Link>
          </li>

          <li onClick={() => setCurrentTab("ViewBooks")}>
            <Link
              to="/mylibrary/allbooks"
              className={`nav-link text-white ${
                currentTab === "ViewBooks" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              View All Books
            </Link>
          </li>

          <li onClick={() => setCurrentTab("ViewStudents")}>
            <Link
              to="/mylibrary/allstudents"
              className={`nav-link text-white ${
                currentTab === "ViewStudents" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              View All Students
            </Link>
          </li>

          <li onClick={() => setCurrentTab("IssueBook")}>
            <Link
              to="/mylibrary/issuebook"
              className={`nav-link text-white ${
                currentTab === "IssueBook" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              Issue Book
            </Link>
          </li>

          <li onClick={() => setCurrentTab("ReceiveBook")}>
            <Link
              to="/mylibrary/receivebook"
              className={`nav-link text-white ${
                currentTab === "ReceiveBook" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              Receive Book
            </Link>
          </li>
        </ul>

        <hr />
      </div>
    </>
  );
};

export default Sidebar;
