import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export const metadata = {
  title: "Posts",
};

const PostPage = async () => {
  // async function getAllPosts() {
  //   const result = await fetch(
  //     "https://jsonplaceholder.typicode.com/posts?_limit=10"
  //   );
  //   const posts = result.json();
  //   // console.log(posts);
  //   return posts;
  // }
  // const posts = await getAllPosts();
  //   console.log(posts);

  const posts = await getAllPosts();
  // console.log(posts);

  return (
    <div>
      <h3 className="my-6 text-2xl font-medium text-blue">All Posts</h3>
      <ul className="space-y-1  *:text-blue-700 font-medium text-lg">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostPage;
