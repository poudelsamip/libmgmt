import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import MainProvider from "./store/provider";
import AllBooks from "./components/AllBooks";
import AllStudents from "./components/AllStudents";
import IssueBook from "./components/IssueBook";
import { useState } from "react";
import ReceiveBook from "./components/ReceiveBook";
import IssueToast from "./components/IssueToast";

function App() {
  const [currentTab, setCurrentTab] = useState("Dashboard");
  return (
    <MainProvider>
      <div className="main">
        <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <div className="content">
          {currentTab === "Dashboard" && (
            <div>
              {/* <IssueToast
                message={"This is test message"}
                onClose={() => console.log("Closed clicked")}
              /> */}

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
          {currentTab === "ReceiveBook" && <ReceiveBook />}
        </div>
      </div>
    </MainProvider>
  );
}

export default App;
