const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://jsonplaceholder.typicode.com";

const fetchFromApi = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${API_URL}${path}`);

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
};

export const posts = () => fetchFromApi("/posts");

export const users = () => fetchFromApi("/users");

export const comments = () => fetchFromApi("/comments");

export const albums = () => fetchFromApi("/albums");

export const photos = () => fetchFromApi("/photos");

export const todos = () => fetchFromApi("/todos");
