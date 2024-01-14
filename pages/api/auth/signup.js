import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function handler(req, res) {
  //   let session = await getServerSession(authOptions);

  if (req.method == "POST") {
    let hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;

    //console.log(req.body);

    if (req.body.name == "") {
      return res.status(500).json("이름을 입력하세요");
    } else if (req.body.email == "") {
      return res.status(500).json("이메일을 입력하세요");
    }

    let db = (await connectDB).db("forum2");

    console.log(req.body);
    if (req.body.email == "admin") {
      req.body.role = "admin";
      await db.collection("user_cred").insertOne(req.body);
      res.status(200).json("관리자계정 가입 완료");
    }

    req.body.role = "normal";
    await db.collection("user_cred").insertOne(req.body);
    res.status(200).json("가입요청 완료");
  }
}
