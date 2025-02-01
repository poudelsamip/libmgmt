import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../store/authentication";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/mylibrary");
    }
  }, [user]);
  return user ? children : null;
};

export default ProtectedRoute;
