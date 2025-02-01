import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import AllStudents from "./components/AllStudents.jsx";
import AllBooks from "./components/AllBooks.jsx";
import IssueBook from "./components/IssueBook.jsx";
import ReceiveBook from "./components/ReceiveBook.jsx";
import Hero from "./pages/Hero.jsx";
import Login from "./pages/login.jsx";
import SignUp from "./pages/signup.jsx";
import AuthProvider from "./store/authentication.jsx";
import Dashboard from "./components/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/mylibrary/",
    element: <Hero />,
  },
  {
    path: "/mylibrary",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "allbooks", element: <AllBooks /> },
      { path: "allstudents", element: <AllStudents /> },
      { path: "issuebook", element: <IssueBook /> },
      { path: "receivebook", element: <ReceiveBook /> },
    ],
  },
  { path: "/mylibrary/login", element: <Login /> },
  { path: "/mylibrary/signup", element: <SignUp /> },
  {
    path: "*",
    element: (
      <center style={{ marginTop: "20px" }}>
        <h1>ERROR 404 : PAGE NOT FOUND :(</h1>
        <h6>
          Given URL is not valid. <Link to="/mylibrary">Click Here</Link> to go
          to home page.
        </h6>
      </center>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
