import { useSelector } from "react-redux";
import { selectAllPosts } from "../../features/posts/postsSlice";
import Post from "../Post/Post";

export default function PostList() {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date));
  return (
    <>
      {orderedPosts.map((post) => (
       <Post key={post.id} props={post} />
      ))}
    </>
  );
}
