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
            <a
              href="#"
              className={`nav-link text-white ${
                currentTab === "Dashboard" && "active"
              }`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Dashboard
            </a>
          </li>

          <li onClick={() => setCurrentTab("ViewBooks")}>
            <a
              href="#"
              className={`nav-link text-white ${
                currentTab === "ViewBooks" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              View All Books
            </a>
          </li>

          <li onClick={() => setCurrentTab("ViewStudents")}>
            <a
              href="#"
              className={`nav-link text-white ${
                currentTab === "ViewStudents" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              View All Students
            </a>
          </li>

          <li onClick={() => setCurrentTab("IssueBook")}>
            <a
              href="#"
              className={`nav-link text-white ${
                currentTab === "IssueBook" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              Issue Book
            </a>
          </li>

          <li onClick={() => setCurrentTab("ReceiveBook")}>
            <a
              href="#"
              className={`nav-link text-white ${
                currentTab === "ReceiveBook" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              Receive Book
            </a>
          </li>
        </ul>

        <hr />
      </div>
    </>
  );
};

export default Sidebar;
