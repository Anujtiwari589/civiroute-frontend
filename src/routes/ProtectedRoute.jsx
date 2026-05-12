import { Navigate } from "react-router-dom";
import { getAuth } from "../utils/auth";

function ProtectedRoute({
  children,
  allowedRole = [],
}) {

  const auth = getAuth();

  // No Login
  if (!auth?.token) {
    return <Navigate to="/login" replace />;
  }

  // Wrong Role
  if (!allowedRole.includes(auth.role)) {
    return <Navigate to="/login" replace />;
  }

  // Allowed
  return children;
}

export default ProtectedRoute;