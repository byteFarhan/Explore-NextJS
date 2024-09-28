// export default async function getAllPosts() {
const getAllPosts = async () => {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  if (!result.ok) {
    throw new Error("There is an error getting all posts!");
  }
  return result.json();
};

export default getAllPosts;
