// app/admin/dashboard/page.jsx
"use client";
import SuperAdminDashboard from "@/components/AdminDashboard";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminDashboard() {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <SuperAdminDashboard/>
    </ProtectedRoute>
  );
}
