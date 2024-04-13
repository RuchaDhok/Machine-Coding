import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const localStorageToken = localStorage.getItem("token");
  return localStorageToken ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
