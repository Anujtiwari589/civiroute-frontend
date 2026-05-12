import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute"
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Complaints from "./pages/citizen/Complaints";
import Dashboard from "./pages/citizen/Dashboard";
import CreateComplaint from "./pages/citizen/CreateComplaint";
import Profile from "./pages/citizen/Profile";
import DepartmentDashboard from "./pages/department/DepartmentDashboard";
import ManageComplaint from "./pages/department/ManageComplaint";
import SuperAdminDashboard from "./pages/admin/SuperAdminDashboard";
import ManageDepartments from "./pages/admin/ManageDepartments";
import Analytics from "./pages/admin/Analytics";


function App() {
  return (
    <Routes>

  {/* AUTH */}
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />

  {/* CITIZEN */}
  <Route
    path="/citizen"
    element={
      <ProtectedRoute allowedRole="citizen">
        <Dashboard />
      </ProtectedRoute>
    }
  />

  <Route
    path="/citizen/complaints"
    element={
      <ProtectedRoute allowedRole="citizen">
        <Complaints />
      </ProtectedRoute>
    }
  />

  <Route
    path="/create-complaint"
    element={
      <ProtectedRoute allowedRole="citizen">
        <CreateComplaint />
      </ProtectedRoute>
    }
  />

  {/* DEPARTMENT */}
  <Route
    path="/department"
    element={
      <ProtectedRoute allowedRole="department">
        <DepartmentDashboard />
      </ProtectedRoute>
    }
  />

  {/* ADMIN */}
  <Route
    path="/admin"
    element={
      <ProtectedRoute allowedRole="admin">
        <SuperAdminDashboard/>
      </ProtectedRoute>
    }
  />

</Routes>
  );
}

export default App;