"use client";
import UniversalSettings from "@/components/universal-settings";
import { useAuth } from "@/hooks/useAuth";
import { Navbar } from "@/components/Navbar";

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 pt-20">
      {/* Background Effects */}
      <Navbar />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(34,197,94,0.08),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <UniversalSettings user={user} />
      </div>
    </div>
  );
}
