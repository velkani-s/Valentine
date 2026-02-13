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

  // Add this safety check
  const body = req.body || {}; 
  const { username, password } = body;

  // Get environment variables - log them for debugging
  const envUsername = process.env.ADMIN_USERNAME;
  const envPassword = process.env.ADMIN_PASSWORD;

  console.log("LOGIN API CALLED");
  console.log("Received:", { username, password });
  console.log("Env vars exist:", { 
    usernameExists: !!envUsername, 
    passwordExists: !!envPassword 
  });
  console.log("Raw env values:", { envUsername, envPassword });

  // Check if env vars are set
  if (!envUsername || !envPassword) {
    console.error("MISSING ENV VARS - Config not set on Vercel");
    return res.status(500).json({ 
      message: "Server not configured",
      hasUsername: !!envUsername,
      hasPassword: !!envPassword
    });
  }

  // Check credentials
  if (username === envUsername && password === envPassword) {
    console.log("LOGIN SUCCESSFUL");
    
    const cookie = serialize("auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    res.setHeader("Set-Cookie", cookie);
    return res.status(200).json({ message: "Login successful" });
  }

  console.log("INVALID CREDENTIALS");
  return res.status(401).json({ message: "Invalid credentials" });
}
