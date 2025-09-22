"use client";

import Link from "next/link";
import { Home, Search, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-center px-6">
      {/* Glowing Icon */}
      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse mb-6">
        <Sparkles className="w-12 h-12 text-white" />
      </div>

      {/* Headline */}
      <h1 className="text-5xl font-bold text-white tracking-tight mb-4">
        404 - Page Not Found
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg max-w-xl mb-8">
        Oops! The page you are looking for doesn’t exist or has been moved.
        Let’s get you back on track.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out flex items-center"
        >
          <Home className="w-5 h-5 mr-2" />
          Go Home
        </Link>
      </div>
    </div>
  );
}
