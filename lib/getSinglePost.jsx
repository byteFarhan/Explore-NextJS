export default async function getSinglePost(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!result.ok) {
    throw new Error("There was an error getting single post!");
  }
  return result.json();
}
