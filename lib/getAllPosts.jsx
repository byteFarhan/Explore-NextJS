// export default async function getAllPosts() {
const getAllPosts = async () => {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=11",
    {
      // cache: "force-cache" // Default beheviour
      // cache: "no-store", // not the best option
      next: {
        revalidate: 120, // this is the best approach. It will fetch posts every 120s leater so users can get updated datas/posts.
      },
    }
  );
  if (!result.ok) {
    throw new Error("There is an error getting all posts!");
  }
  return result.json();
};

export default getAllPosts;
