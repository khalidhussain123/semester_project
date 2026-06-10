const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3001;
const filePath = path.join(__dirname, "data.json");

function readData() {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    return { password: "", theme: "theme-1" };
  }
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

const server = http.createServer((req, res) => {
  // CORS headers so React (localhost:3000) can talk to this server
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/data" && req.method === "GET") {
    const data = readData();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));

  } else if (req.url === "/data" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const parsed = JSON.parse(body);
        const toSave = {
          password: parsed.password || "",
          theme: parsed.theme || "theme-1",
        };
        writeData(toSave);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: true }));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });

  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
