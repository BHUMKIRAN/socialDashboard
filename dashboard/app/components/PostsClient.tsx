"use client";

import React from "react";
import type { Post } from "@/service/fetchApi";
import { usePosts } from "@/service/query";
import PostsSkeleton from "./PostsSkeleton";

export default function PostsClient() {
  const { data, isLoading, isError, refetch } = usePosts();

  if (isLoading) return <PostsSkeleton />;
  if (isError)
    return (
      <div className="p-4 text-red-600">Failed to load posts</div>
    );

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Posts</h2>

        <button
          onClick={() => refetch()}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Refetch
        </button>
      </div>

      <div className="overflow-x-auto border rounded">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-2 border">ID</th>
              <th className="text-left p-2 border">Title</th>
              <th className="text-left p-2 border">User ID</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(data) &&
              data.slice(0, 10).map((post: Post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{post.id}</td>
                  <td className="p-2 border">{post.title}</td>
                  <td className="p-2 border">{post.userId}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
