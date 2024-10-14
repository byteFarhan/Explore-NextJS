// export const dynamic = "force-dynamic";
export async function GET() {
  return Response.json(comments, {
    headers: {
      "Set-Cookie": "theme=dark",
    },
  });
}

const comments = [
  {
    id: 1,
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
  },
  {
    id: 2,
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
  },
  {
    id: 3,
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
  },
  {
    id: 4,
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
  },
];
