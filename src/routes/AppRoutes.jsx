import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

// Auth Pages
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

// Citizen
import CitizenDashboard from "../pages/citizen/Dashboard";
import Complaints from "../pages/citizen/Complaints";
import CreateComplaint from "../pages/citizen/CreateComplaint";

// Department
import DepartmentDashboard from "../pages/department/Dashboard";

// Admin
import AdminDashboard from "../pages/admin/Dashboard";

// Common
import NotFound from "../pages/NotFound";

function AppRoutes() {

  return (
    <Routes>

      {/* Default Redirect */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* Public Routes */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* Citizen Routes */}
      <Route
        path="/citizen"
        element={
          <ProtectedRoute
            allowedRole={["citizen"]}
          >
            <CitizenDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/citizen/complaints"
        element={
          <ProtectedRoute
            allowedRole={["citizen"]}
          >
            <Complaints />
          </ProtectedRoute>
        }
      />

      <Route
        path="/citizen/create"
        element={
          <ProtectedRoute
            allowedRole={["citizen"]}
          >
            <CreateComplaint />
          </ProtectedRoute>
        }
      />

      {/* Department Routes */}
      <Route
        path="/department"
        element={
          <ProtectedRoute
            allowedRole={["department"]}
          >
            <DepartmentDashboard />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute
            allowedRole={["admin"]}
          >
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default AppRoutes;