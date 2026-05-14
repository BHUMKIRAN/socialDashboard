"use server";

import { dehydrate } from "@tanstack/react-query";
import { makeQueryClient } from "@/service/queryClient";
import { posts } from "@/service/fetchApi";
import TanstackProvider from "@/provider/tanstackProvider";
import PostsClient from "./components/PostsClient";

const MainPage = async () => {
  const queryClient = makeQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: posts,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Home</h1>

      <TanstackProvider dehydratedState={dehydratedState}>
        <PostsClient />
      </TanstackProvider>
    </div>
  );
};

export default MainPage;
