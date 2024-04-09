"use client";
import { GET_USER_POST } from "@/lib/query/query";
import { client } from "@/lib/utils/request";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { Post as PostType } from "@/gql/graphql";
import Post from "../home/post";

export default function UserProfilePosts() {
  const { id } = useParams();
  const { data, isPending } = useQuery({
    queryKey: ["post", id],
    queryFn: (): Promise<{ getPostsByUserId: PostType[] }> =>
      client.request(GET_USER_POST, { userId: id }),
    enabled: !!id,
  });

  return (
    <div>
      {data?.getPostsByUserId?.map((post, index) => (
        <Post data={post} key={post.postId} />
      ))}
    </div>
  );
}
