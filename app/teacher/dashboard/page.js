// app/teacher/dashboard/page.jsx
"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import TeacherDashboard from "@/components/TeacherDashboardComponent "

export default function Teacher() {
  return (
    <ProtectedRoute allowedRoles={["teacher"]}>
      <TeacherDashboard/>
    </ProtectedRoute>
  );
}
