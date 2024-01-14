export default function Handler(req, res) {
  console.log(req.query);

  return res.status(200).json("완료");
}

//서버기능 처리 성공시엔 status(200)
//실패시 500
//처리실패(유저잘못) 400
