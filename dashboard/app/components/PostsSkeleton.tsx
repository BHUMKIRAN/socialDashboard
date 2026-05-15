"use client";

import React from "react";

export default function PostsSkeleton() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="h-5 w-24 bg-gray-200 animate-pulse rounded" />
        <div className="h-8 w-24 bg-gray-200 animate-pulse rounded" />
      </div>

      <div className="border rounded overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">User ID</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 8 }).map((_, i) => (
              <tr key={i} className="animate-pulse">
                <td className="p-2 border">
                  <div className="h-4 bg-gray-200 rounded w-10" />
                </td>
                <td className="p-2 border">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                </td>
                <td className="p-2 border">
                  <div className="h-4 bg-gray-200 rounded w-12" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
