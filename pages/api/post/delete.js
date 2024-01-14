import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  // if (req.method == "DELETE") {
  //   // console.log(req.body);
  //   const db = (await connectDB).db("forum2");
  //   let result = await db
  //     .collection("post")
  //     .deleteOne({ _id: new ObjectId(req.body) });
  //   // console.log(result);
  //   res.status(200).json("삭제완료");
  // }
  if (req.method == "DELETE") {
    console.log(req.body);
    let session = await getServerSession(req, res, authOptions);
    const db = (await connectDB).db("forum2");

    let find = await db.collection("post").findOne({
      _id: new ObjectId(req.body),
    });

    if (find.author == null) {
      return res.status(500).json("로그인 필요");
    }

    if (find.author == session.user.email) {
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.body) });
      console.log(result);
      return res.status(200).json("삭제완료");
    } else {
      return res.status(500).json("현재유저와 작성자 불일치");
    }
  }
}
