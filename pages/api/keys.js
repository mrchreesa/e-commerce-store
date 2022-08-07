export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      publishableKey: process.env.PUBLISH_KEY,
    });
  } else {
    res.status(404).end("Method not allowed");
  }
}
