import { notFound } from "next/navigation";

const BlogPage = ({ params }) => {
  const { id } = params;
  if (id > 3) {
    // return notFound();
    notFound();
  }
  return (
    <main>
      <h3 className="my-6 text-3xl font-bold text-black">This is blog {id}</h3>
    </main>
  );
};

export default BlogPage;
