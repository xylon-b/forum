import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    let change = { title: req.body.title, content: req.body.content };
    const db = (await connectDB).db("forum2");
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: change });
    res.writeHead(302, { Location: "/list" });
    res.end();
  }
}

// #inc : 도큐먼트의 값이 숫자일때 #set처럼 덮어쓰는게 아닌 증감 연산을 한다.
