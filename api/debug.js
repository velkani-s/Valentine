export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow GET
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Debug info
  const debugInfo = {
    nodeEnv: process.env.NODE_ENV,
    adminUsernameExists: !!process.env.ADMIN_USERNAME,
    adminPasswordExists: !!process.env.ADMIN_PASSWORD,
    adminUsernameLength: (process.env.ADMIN_USERNAME || "").length,
    adminPasswordLength: (process.env.ADMIN_PASSWORD || "").length,
    adminUsernameValue: process.env.ADMIN_USERNAME,
    adminPasswordValue: process.env.ADMIN_PASSWORD,
    timestamp: new Date().toISOString(),
  };

  console.log("Debug endpoint called:", JSON.stringify(debugInfo, null, 2));

  return res.status(200).json(debugInfo);
}
