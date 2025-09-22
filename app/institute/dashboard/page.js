// app/institute/dashboard/page.jsx
"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import InstituteDashboard from "@/components/InstituteDashboard";

export default function Institute() {
  return (
    <ProtectedRoute allowedRoles={["institute"]}>
      <InstituteDashboard />
    </ProtectedRoute>
  );
}
