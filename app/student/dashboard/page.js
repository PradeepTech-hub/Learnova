// app/student/dashboard/page.jsx
"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import StudentDashboard from "@/components/StudentDashboard";

export default function Student() {
  return (
    <ProtectedRoute allowedRoles={["student"]}>
        <StudentDashboard/>
    </ProtectedRoute>
  );
}
