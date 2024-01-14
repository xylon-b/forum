import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { SessionContext, SessionProvider } from "next-auth/react";

export default async function Write() {
  let session = await getServerSession(authOptions);
  console.log(session);

  if (session) {
    return (
      <div style={{ margin: "20px" }}>
        <h4>글작성</h4>
        <form action="/api/post/new" method="POST">
          <input name="title" placeholder="글 작성"></input>
          <input name="content" placeholder="내용"></input>
          <button type="submit"> 전송 </button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <alert>로그인하세요</alert>
      </div>
    );
  }

  // return (
  //   <div style={{ margin: "20px" }}>
  //     <h4>글작성</h4>
  //     <form action="/api/post/new" method="POST">
  //       <input name="title" placeholder="글 작성"></input>
  //       <input name="content" placeholder="내용"></input>
  //       <button type="submit"> 전송 </button>
  //     </form>
  //   </div>
  // );
}
