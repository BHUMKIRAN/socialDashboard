const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://jsonplaceholder.typicode.com";

const fetchFromApi = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${API_URL}${path}`);

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
};

export const posts = () => fetchFromApi<Posts>("/posts");

export const users = () => fetchFromApi<Users>(`/users`);

export const comments = () => fetchFromApi<Comments>("/comments");

export const albums = () => fetchFromApi<Albums>("/albums");

export const photos = () => fetchFromApi<Photos>("/photos");

export const todos = () => fetchFromApi<Todos>("/todos");
