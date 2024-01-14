"use client";

import Link from "next/link";
import DetailLink from "./DetailLink";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={"/detail/" + result[i]._id}>
              <h4>{result[i].title}</h4>
            </Link>
            <Link href={"/edit/" + result[i]._id} s>
              수정✍️
            </Link>
            <span
              onClick={(e) => {
                fetch("/api/post/delete", {
                  method: "DELETE",
                  body: result[i]._id,
                })
                  .then((r) => r.json())
                  .then(() => {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  });
                //   .then((r) => {
                //     if (r.status == 200) {
                //       return r.json();
                //     } else {
                //       //서버가 에러코드 전송시 실행할코드
                //     }
                //   })
                //   .then((result) => {
                //     //성공시 실행코드
                //   })
                //   .catch((error) => {
                //     //인터넷 문제로 실패시 실행할 코드
                //     console.log(error);
                //   });
              }}
            >
              🗑️
            </span>
            {/* <span
              onClick={() => {
                fetch("/api/time", {
                  method: "POST",
                  body: JSON.stringify([1, 2, 3]),
                }).then(() => {
                  console.log("time page");
                });
              }}
            ></span> */}
            {/* 서버로 array, object보낼때 JSON.stringify */}

            <br></br>
            <DetailLink />
            <p>{result[i].content}</p>
          </div>
        );
      })}
    </div>
  );
}
