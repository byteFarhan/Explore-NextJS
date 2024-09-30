import DisplayComments from "@/app/components/DisplayComments";
import Loader from "@/app/components/Loader";
import getAllPosts from "@/lib/getAllPosts";
import getPostComments from "@/lib/getPostComments";
import getSinglePost from "@/lib/getSinglePost";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getSinglePost(id);
  // console.log(post);
  return {
    title: post.title,
    description: post.body,
  };
}

const Post = async ({ params }) => {
  const { id } = params;
  // const getSinglePost = async (id) => {
  //   const result = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${id}`
  //   );
  //   return await result.json();
  // };

  // const post = await getSinglePost(id);
  // const comments = await getPostComments(id);
  // console.log(post);
  // console.log(comments);

  // If I fetch data in this way (above code). Then is now gonna be a best of optimize appraoch. Because in this until the promiss of post request get solve the code executing will be await/blocked, because of await keyword. When post request got solved and get post datas, then it will go to next line of code which is another promiss for post comments. So this is a lengthy process. And also not a best approach. A better approach mentioned below ->

  // const postPromiss = getSinglePost(id);
  // const commentsPromiss = getPostComments(id);
  // const [post, comments] = await Promise.all([postPromiss, commentsPromiss]);
  // console.log(post);
  // console.log(comments);

  //This(above code) is a better approach compare to above example. But there is also a issue. Which is Promiss.all() method resolve all promisses together (in this case two promisses). You will get all pormisses resolved together but you have to wait until all promisses are resolved. If there is a promiss which has minimal data and should have resolve in short time and Another data which has big operations/data which will take time to resolve. In this case you have to wait until big pormiss resolve to get all or both pormisses data. So this is no the efficient approach.

  // The most efficient approach mentioned below: ->
  //The most efficient way for fetching multiple data in one page is fetch promisses progrssively and use react Suspense component. If you don't understand the examples or context you can watch LWS Next.JS_14 crash course on YT example start from 1h-56min-30sec the link mentioned below ->
  //https://youtu.be/NgrljB7UU34?si=OdNZ6BU9itSkD0f4

  const postPromiss = getSinglePost(id);
  const post = await postPromiss;
  const commentsPromiss = getPostComments(id);

  return (
    <>
      <div className="my-6 space-y-3">
        <h3 className="text-xl font-semibold text-blue-700">{post.title}</h3>
        <p className="text-lg">{post.body}</p>
      </div>
      <hr />
      <div>
        <h3 className="my-3 text-2xl font-semibold">Comments: </h3>{" "}
        <Suspense fallback={<Loader />}>
          <DisplayComments commentsPromiss={commentsPromiss} />
        </Suspense>
      </div>
    </>
  );
};

export default Post;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
