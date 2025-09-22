"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthContext } from "@/contexts/AuthContext";

export default function ProtectedRoute({
  children,
  allowedRoles = null, // null = all roles allowed
  requireEmailVerification = true,
}) {
  const { user, userProfile, loading, isAuthenticated, hasProfile } =
    useAuthContext();
  const router = useRouter();
  const pathname = usePathname();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (loading) return;

    // Not logged in → go to auth
    if (!isAuthenticated) {
      safeRedirect("/auth");
      return;
    }

    // Email not verified (if required) → go to verify page
    if (requireEmailVerification && user && !user.emailVerified) {
      safeRedirect("/verify");
      return;
    }

    // No profile yet → force profile creation
    if (isAuthenticated && !hasProfile) {
      safeRedirect("/profile");
      return;
    }

    // Role-based access control
    if (
      allowedRoles && // only check if not null
      userProfile &&
      !allowedRoles.includes(userProfile.role)
    ) {
      // redirect user to their dashboard
      let target = "/auth"; // fallback
      switch (userProfile.role) {
        case "student":
          target = "/student/dashboard";
          break;
        case "teacher":
          target = "/teacher/dashboard";
          break;
        case "institute":
          target = "/institute/dashboard";
          break;
        case "admin":
          target = "/admin/dashboard";
          break;
      }
      safeRedirect(target);
      return;
    }
  }, [
    user,
    userProfile,
    loading,
    isAuthenticated,
    hasProfile,
    requireEmailVerification,
    allowedRoles,
  ]);

  // Prevent infinite redirects by checking current pathname
  const safeRedirect = (target) => {
    if (pathname !== target) {
      setRedirecting(true);
      router.push(target);
    }
  };

  // Loading spinner while auth state is resolving
  if (loading || redirecting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  // If redirect conditions triggered, don’t render children
  if (!isAuthenticated || !hasProfile) return null;
  if (requireEmailVerification && user && !user.emailVerified) return null;
  if (allowedRoles && userProfile && !allowedRoles.includes(userProfile.role))
    return null;

  // ✅ Allowed → show children
  return children;
}
