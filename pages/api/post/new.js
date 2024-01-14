import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function Handler(req, res) {
  let session = await getServerSession(req, res, authOptions);

  if (session) {
    req.body.author = session.user.email;
  }

  //console.log(req.body);

  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("제목을 쓰세요");
    }
    const db = (await connectDB).db("forum2");
    let result = await db.collection("post").insertOne(req.body);
    res.writeHead(302, { Location: "/list" });
    res.end();
  }
}
