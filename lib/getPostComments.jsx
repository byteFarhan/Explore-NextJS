export default async function getPostComments(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  if (!result.ok) {
    throw new Error("There was an error getting post comments!");
  }
  return result.json();
}
