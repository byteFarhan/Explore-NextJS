import getSinglePost from "@/ilb/getSinglePost";

const Post = async ({ params }) => {
  const { id } = params;
  // const getSinglePost = async (id) => {
  //   const result = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${id}`
  //   );
  //   return await result.json();
  // };
  const post = await getSinglePost(id);
  // console.log(post);
  return (
    <div className="my-6 space-y-3">
      <h3 className="text-xl font-semibold text-blue-700">{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
