export default function Handler(req, res) {
  console.log(req.query);

  return res.status(200).json("완료");
}
