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
        </div>
      </div>
    </MainProvider>
  );
}

export default App;
