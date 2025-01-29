import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import AllStudents from "./components/AllStudents.jsx";
import AllBooks from "./components/AllBooks.jsx";
import IssueBook from "./components/IssueBook.jsx";
import ReceiveBook from "./components/ReceiveBook.jsx";
import Footer from "./components/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <div className="heroSection">
            <center>
              <h1>Library Management System</h1>
              <Footer />
            </center>
          </div>
        ),
      },
      { path: "/allbooks", element: <AllBooks /> },
      { path: "/allstudents", element: <AllStudents /> },
      { path: "/issuebook", element: <IssueBook /> },
      { path: "/receivebook", element: <ReceiveBook /> },
    ],
  },
  {
    path: "*",
    element: (
      <center style={{ marginTop: "20px" }}>
        <h1>ERROR 404 : PAGE NOT FOUND :(</h1>
        <h6>
          Given URL is not valid. <Link to="/">Click Here</Link> to go to My
          Library Dashboard.
        </h6>
      </center>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
