export default function Time(req, res) {
  var now = new Date();
  return res.status(200).json(now);
}
