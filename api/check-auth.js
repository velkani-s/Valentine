export default function handler(req, res) {
  const { auth } = req.cookies;

  if (auth === 'true') {
    return res.status(200).json({ authenticated: true });
  }

  return res.status(401).json({ authenticated: false });
}