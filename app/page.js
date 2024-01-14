import { connectDB } from "@/util/database";

export const revalidate = 60;

export default async function Home() {
  const db = (await connectDB).db("forum2");
  let result = await db.collection("post").find().toArray();
  //console.log(result);

  //await fetch("/URL", { cache: "force-cache" });
  // await fetch('/URL', {cache : 'no-store'})
  // await fetch('/URL', {next : {revalidate : 60}})//캐싱결과 60초만 보관

  return (
    <div className="main_title">
      HELLO!!!<br></br>this is main Page <br></br>dev by XYLON
    </div>
  );
}
