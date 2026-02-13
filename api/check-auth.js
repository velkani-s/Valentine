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

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Parse cookies manually (Vercel doesn't auto-parse)
  const cookieHeader = req.headers.cookie || "";
  const cookies = {};
  
  if (cookieHeader) {
    cookieHeader.split(";").forEach((cookie) => {
      const trimmed = cookie.trim();
      if (trimmed) {
        const [key, value] = trimmed.split("=");
        if (key) {
          cookies[key.trim()] = (value || "").trim();
        }
      }
    });
  }

  const authCookie = cookies.auth;

  if (authCookie === "true") {
    return res.status(200).json({ authenticated: true });
  }

  return res.status(401).json({ authenticated: false });
}
