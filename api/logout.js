import { serialize } from "cookie";

export default function handler(req, res) {
  // 1. Get the specific origin calling the API
  const allowedOrigin = req.headers.origin || "http://localhost:3000";

  // 2. Set headers specifically for that origin
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin); // No "*" allowed with credentials
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const cookie = serialize("auth", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });

  res.setHeader("Set-Cookie", cookie);
  return res.status(200).json({ message: "Logout successful" });
}
