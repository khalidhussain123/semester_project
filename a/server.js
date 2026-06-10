// ============================================================
//  backend/server.js  —  Node.js + Express REST API
//  POST /api/users  → save user to data.json
//  GET  /api/users  → read all users from data.json
// ============================================================

const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;
const DATA_FILE = path.join(__dirname, "data.json");

// ── Middleware ───────────────────────────────────────────────
app.use(cors());                          // allow React dev-server (port 3000)
app.use(express.json());                  // parse JSON request bodies

// ── Helper: read users from file ────────────────────────────
function readUsers() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

// ── Helper: write users to file ─────────────────────────────
function writeUsers(users) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2), "utf-8");
}

// ── POST /api/users ──────────────────────────────────────────
//    Body: { name, email, message }
app.post("/api/users", (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email and message are required." });
  }

  const newEntry = {
    id: Date.now(),            // simple unique ID
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
  };

  const users = readUsers();
  users.push(newEntry);
  writeUsers(users);

  console.log(`[POST] Saved entry #${newEntry.id} — ${name}`);
  res.status(201).json({ success: true, data: newEntry });
});

// ── GET /api/users ───────────────────────────────────────────
app.get("/api/users", (req, res) => {
  const users = readUsers();
  console.log(`[GET]  Returning ${users.length} entries`);
  res.json({ success: true, data: users });
});

// ── Start server ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀  Backend running at http://localhost:${PORT}`);
  console.log(`   POST http://localhost:${PORT}/api/users`);
  console.log(`   GET  http://localhost:${PORT}/api/users\n`);
});
