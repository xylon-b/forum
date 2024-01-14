import { connectDB } from "@/util/database";

export default async function AllData(req, res) {
  console.log("모든데이터");
  const db = (await connectDB).db("forum2");
  let result = await db.collection("post").find().toArray();
  return res.status(200).json(result);
}
