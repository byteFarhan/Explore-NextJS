import connectDB from "@/lib/connectDB";

export const POST = async (request) => {
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const newUser = await request.json();
    const resp = await userCollection.insertOne(newUser);
    return Response.json({ message: "user created successfully", resp });
  } catch (error) {
    return Response.json({ message: error.message });
  }
};
