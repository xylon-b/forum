import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";

export const revalidate = 20;

export default async function List() {
  const db = (await connectDB).db("forum2");
  let result = await db.collection("post").find().toArray();
  // console.log(result[0].content);

  return (
    <div className="list-bg">
      <ListItem result={result}></ListItem>
    </div>
  );
  //글 작성기능 만들기
  //1. 글 작성페이지 필요
  //2. 버튼 누르면 작성한 글 DB에 저장231129(수)
}
