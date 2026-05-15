"use client";

import React from "react";
import {
  usePosts,
  useUsers,
  useComments,
  useAlbums,
  usePhotos,
} from "@/service/query";

const PostsClient = () => {
  const { data: users = [] } = useUsers();
  const { data: posts = [] } = usePosts();
  const { data: comments = [] } = useComments();
  const { data: albums = [] } = useAlbums();
  const { data: photos = [] } = usePhotos();

  // Get first post per user
  function getUsersFirstPost() {
    const map = new Map<number, any>();

    posts.forEach((post) => {
      if (!map.has(post.userId)) {
        map.set(post.userId, post);
      }
    });

    return map;
  }

  // Group albums by user
  function groupedAlbumsByUser() {
    const map = new Map<number, any[]>();

    albums.forEach((album) => {
      if (!map.has(album.userId)) {
        map.set(album.userId, []);
      }
      map.get(album.userId)!.push(album);
    });

    return map;
  }

  // Group photos by album
  function groupedPhotosByAlbum() {
    const map = new Map<number, any[]>();

    photos.forEach((photo) => {
      if (!map.has(photo.albumId)) {
        map.set(photo.albumId, []);
      }
      map.get(photo.albumId)!.push(photo);
    });

    return map;
  }

  const usersFirstPostMap = getUsersFirstPost();
  const albumsByUserMap = groupedAlbumsByUser();
  const photosByAlbumMap = groupedPhotosByAlbum();

  function getPhotosByUserAlbum(userId: number) {
    const userAlbums = albumsByUserMap.get(userId) || [];

    const photosByAlbum = userAlbums.map(
      (album) => photosByAlbumMap.get(album.id) || [],
    );

    return photosByAlbum.flat();
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <section className="max-w-2xl mx-auto space-y-6">
        {Array.from(usersFirstPostMap.values()).map((post) => {
          const user = users.find((u) => u.id === post.userId);
          const userPhotos = getPhotosByUserAlbum(post.userId);
          const profile = users;

          return (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-sm border p-5 space-y-4"
            >
              {/* HEADER */}
              <header className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">
                    {user?.name || "Unknown User"}
                  </span>
                </div>
              </header>

              {/* CONTENT */}
              <section className="space-y-2">
                <h2 className="font-semibold text-lg">{post.title}</h2>
                <p className="text-gray-600 text-sm">{post.body}</p>

                {/* PHOTO GRID */}
                {userPhotos.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {userPhotos.slice(0, 1).map((photo) => (
                      <img
                        key={photo.id}
                        src={
                          photo.thumbnailUrl ||
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGa70BgePn1Rsf41oiG6ac0_TAzpKXj4d9qg&s"
                        }
                        alt={photo.title}
                        className="rounded-lg object-cover h-28 w-full"
                      />
                    ))}
                  </div>
                )}
              </section>

              {/* FOOTER */}
              <footer className="text-sm text-gray-500 flex justify-between border-t pt-3">
                <span>
                  💬 {comments.filter((c) => c.postId === post.id).length}{" "}
                  comments
                </span>
                <span>❤️ Like</span>
              </footer>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default PostsClient;
