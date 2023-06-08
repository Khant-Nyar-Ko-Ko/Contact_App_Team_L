import { Navigate } from "react-router-dom";

const Guard = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default Guard;
