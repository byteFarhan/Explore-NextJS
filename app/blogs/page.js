import Link from "next/link";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, iure?
        Tenetur, in recusandae ab eveniet saepe est incidunt eius fugiat,
        possimus at voluptates distinctio accusantium voluptatibus quos et autem
        accusamus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Nam, iure? Tenetur, in recusandae ab eveniet saepe est incidunt eius
        fugiat, possimus at voluptates distinctio accusantium voluptatibus quos
        et autem accusamus`,
    },
    {
      id: 2,
      title: "Blog 2",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, iure?
        Tenetur, in recusandae ab eveniet saepe est incidunt eius fugiat,
        possimus at voluptates distinctio accusantium voluptatibus quos et autem
        accusamus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Nam, iure? Tenetur, in recusandae ab eveniet saepe est incidunt eius
        fugiat, possimus at voluptates distinctio accusantium voluptatibus quos
        et autem accusamus`,
    },
    {
      id: 3,
      title: "Blog 3",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, iure?
        Tenetur, in recusandae ab eveniet saepe est incidunt eius fugiat,
        possimus at voluptates distinctio accusantium voluptatibus quos et autem
        accusamus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Nam, iure? Tenetur, in recusandae ab eveniet saepe est incidunt eius
        fugiat, possimus at voluptates distinctio accusantium voluptatibus quos
        et autem accusamus`,
    },
  ];
  return (
    <main>
      <ul className="mt-6 space-y-6">
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blogs;
