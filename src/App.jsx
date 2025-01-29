import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainProvider from "./store/provider";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [currentTab, setCurrentTab] = useState("Dashboard");
  return (
    <MainProvider>
      <div className="main">
        <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <div className="content">
          <Outlet></Outlet>
          {/* {currentTab === "Dashboard" && (
            <div>
              <center>
                <h1 style={{ fontFamily: "Poppins", marginTop: "250px" }}>
                  Library Management System
                </h1>
                <Footer />
              </center>
            </div>
          )}
          {currentTab === "ViewBooks" && <AllBooks />}
          {currentTab === "ViewStudents" && <AllStudents />}
          {currentTab === "IssueBook" && <IssueBook />}
          {currentTab === "ReceiveBook" && <ReceiveBook />} */}
        </div>
      </div>
    </MainProvider>
  );
}

export default App;
