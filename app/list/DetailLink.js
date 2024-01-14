"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useReducer } from "react";

export default function DetailLink() {
  let router = useRouter();
  let url = usePathname();
  let queryStream = useSearchParams();
  return (
    <button
      onClick={() => {
        router.push("/");
      }}
    >
      홈
    </button>
  );
}

//Link태그 쓰면 편한데 왜 useRouteㄹㄹ 쓰는가?
//useRoute를 쓰면 back, forword, refresh등을 할 수 있다.
//자세한 정보는 soft Refresh찾아보기
//prefetch : 링크를 해두면 페이지를 미리 로딩해줄 수 있다.
//그치만 link태그를 쓰면 prefetch기능은 쓸 수 있다.
