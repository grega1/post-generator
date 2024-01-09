import { useSelector } from "react-redux";
import { selectAllPosts } from "../../features/posts/postsSlice";
import Post from "../Post/Post";

export default function PostList() {
  const posts = useSelector(selectAllPosts);
  return (
    <>
      {posts.map((post) => (
       <Post key={post.id} props={post} />
      ))}
    </>
  );
}
