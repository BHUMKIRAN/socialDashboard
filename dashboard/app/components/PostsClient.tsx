"use client";

import { photos } from "@/service/fetchApi";
import {
  usePosts,
  useUsers,
  useComments,
  useAlbums,
  usePhotos,
} from "@/service/query";
import { map } from "motion/react-client";
import { matchHas } from "next/dist/shared/lib/router/utils/prepare-destination";
import React from "react";

const PostsClient = () => {
  const { data: users } = useUsers();
  const { data: posts } = usePosts();
  const { data: comments } = useComments();
  const { data: albums } = useAlbums();
  const { data: photos } = usePhotos();

  function getUsersFirstPost() {
    const map = new Map();

    posts?.forEach((post) => {
      if (!map.has(post.userId)) {
        map.set(post.userId, post);
      }
    });
    return map;
  }

  function groupedalbumsByUser() {
    const map = new Map();

    albums?.forEach((album) => {
      if (!map.has(album.userId)) {
        map.set(album.userId, []);
      }
      map.get(album.userId).push(album);
    });
    return map;
  }

  function groupedPhotosByAlbum() {
    const map = new Map();

    photos?.forEach((photo) => {
      if (!map.has(photo.albumId)) {
        map.set(photo.albumId, []);
      }
      map.get(photo.albumId).push(photo);
    });
    return map;
  }

  function getPhotosByUserAlbum(userId: number) {
    const userAlbums = albumsByUserMap.get(userId) || [];
    const photosByAlbum = userAlbums.map(
      (album) => photosByAlbumMap.get(album.id) || [],
    );
    return photosByAlbum.flat();
  }
  const usersFirstPostMap = getUsersFirstPost();
  const albumsByUserMap = groupedalbumsByUser();
  const photosByAlbumMap = groupedPhotosByAlbum();

  return (
    <div>
      {Array.from(usersFirstPostMap.values()).map((p) => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
};

export default PostsClient;
