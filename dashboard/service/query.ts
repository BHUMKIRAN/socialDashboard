"use client";

import { posts, users, comments, albums, photos, todos } from "./fetchApi";
import { useQuery } from "@tanstack/react-query";

export const usePosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: posts,
  });

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: users,
  });

export const useComments = () =>
  useQuery({
    queryKey: ["comments"],
    queryFn: comments,
  });

export const useAlbums = () =>
  useQuery({
    queryKey: ["albums"],
    queryFn: albums,
  });

export const usePhotos = () =>
  useQuery({
    queryKey: ["photos"],
    queryFn: photos,
  });

export const useTodos = () =>
  useQuery({
    queryKey: ["todos"],
    queryFn: todos,
  });
