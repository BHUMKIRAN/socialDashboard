"use client";

import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen  w-full flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-md space-y-6">
        {/* BIG NUMBER */}
        <h1 className="text-8xl font-extrabold text-gray-900 tracking-tight">
          404
        </h1>

        {/* MESSAGE */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            Page not found
          </h2>
          <p className="text-gray-500 text-sm">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="px-5 py-2 rounded-xl bg-black text-white text-sm hover:bg-gray-800 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-xl border text-sm hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>

        {/* DECORATION */}
      </div>
    </main>
  );
};

export default NotFound;
