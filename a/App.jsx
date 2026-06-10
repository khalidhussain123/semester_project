import { useState, useEffect } from "react";

const API = "http://localhost:5000/api/users";

// ── Inline styles (no extra deps needed) ────────────────────
const S = {
  root: {
    minHeight: "100vh",
    background: "#0f0f13",
    color: "#e8e6e0",
    fontFamily: "'Georgia', serif",
    padding: "48px 24px",
    boxSizing: "border-box",
  },
  container: {
    maxWidth: 720,
    margin: "0 auto",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    marginBottom: 4,
    color: "#f5f0e8",
  },
  sub: {
    fontSize: "0.9rem",
    color: "#888",
    marginBottom: 40,
  },
  card: {
    background: "#1a1a22",
    border: "1px solid #2a2a38",
    borderRadius: 12,
    padding: "32px",
    marginBottom: 36,
  },
  label: {
    display: "block",
    fontSize: "0.78rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "#aaa",
    marginBottom: 6,
    marginTop: 20,
  },
  input: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid #333",
    background: "#111118",
    color: "#e8e6e0",
    fontSize: "0.95rem",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.2s",
  },
  textarea: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid #333",
    background: "#111118",
    color: "#e8e6e0",
    fontSize: "0.95rem",
    boxSizing: "border-box",
    outline: "none",
    minHeight: 100,
    resize: "vertical",
    fontFamily: "inherit",
  },
  btnRow: {
    display: "flex",
    gap: 12,
    marginTop: 24,
    flexWrap: "wrap",
  },
  btnPrimary: {
    padding: "10px 28px",
    borderRadius: 8,
    border: "none",
    background: "#d4a843",
    color: "#0f0f13",
    fontWeight: 700,
    fontSize: "0.9rem",
    cursor: "pointer",
    letterSpacing: "0.05em",
    transition: "opacity 0.15s",
  },
  btnSecondary: {
    padding: "10px 28px",
    borderRadius: 8,
    border: "1px solid #444",
    background: "transparent",
    color: "#ccc",
    fontWeight: 600,
    fontSize: "0.9rem",
    cursor: "pointer",
    letterSpacing: "0.04em",
  },
  toast: (type) => ({
    padding: "10px 16px",
    borderRadius: 8,
    marginTop: 16,
    fontSize: "0.88rem",
    background: type === "success" ? "#1a3a2a" : "#3a1a1a",
    border: `1px solid ${type === "success" ? "#2d6e4a" : "#6e2d2d"}`,
    color: type === "success" ? "#6effa8" : "#ff8a8a",
  }),
  sectionTitle: {
    fontSize: "1.1rem",
    fontWeight: 700,
    marginBottom: 16,
    color: "#f5f0e8",
    borderBottom: "1px solid #2a2a38",
    paddingBottom: 10,
  },
  entryCard: {
    background: "#111118",
    border: "1px solid #2a2a38",
    borderRadius: 10,
    padding: "18px 20px",
    marginBottom: 12,
  },
  entryName: {
    fontWeight: 700,
    fontSize: "1rem",
    color: "#d4a843",
    marginBottom: 2,
  },
  entryEmail: {
    fontSize: "0.8rem",
    color: "#777",
    marginBottom: 10,
  },
  entryMsg: {
    fontSize: "0.92rem",
    color: "#ccc",
    lineHeight: 1.6,
  },
  entryDate: {
    fontSize: "0.72rem",
    color: "#555",
    marginTop: 8,
    textAlign: "right",
  },
  emptyNote: {
    color: "#555",
    fontSize: "0.9rem",
    textAlign: "center",
    padding: "24px 0",
  },
};

// ── Component ────────────────────────────────────────────────
export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState(null);       // { type, text }
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

  // ── Fetch all entries from backend ──────────────────────────
  async function fetchEntries() {
    setFetching(true);
    try {
      const res = await fetch(API);
      const json = await res.json();
      if (json.success) setEntries(json.data.slice().reverse()); // newest first
      else throw new Error("Fetch failed");
    } catch (err) {
      setToast({ type: "error", text: "Could not load entries. Is the backend running?" });
    } finally {
      setFetching(false);
    }
  }

  // ── Auto-fetch on mount ──────────────────────────────────────
  useEffect(() => { fetchEntries(); }, []);

  // ── Handle form submit ───────────────────────────────────────
  async function handleSubmit() {
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setToast({ type: "error", text: "Please fill in all fields." });
      return;
    }

    setLoading(true);
    setToast(null);
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setToast({ type: "success", text: "Entry saved successfully!" });
        setForm({ name: "", email: "", message: "" });
        fetchEntries();                        // refresh list
      } else {
        setToast({ type: "error", text: json.error || "Server error." });
      }
    } catch {
      setToast({ type: "error", text: "Network error — is the backend running on port 5000?" });
    } finally {
      setLoading(false);
    }
  }

  // ── Render ───────────────────────────────────────────────────
  return (
    <div style={S.root}>
      <div style={S.container}>

        {/* Header */}
        <h1 style={S.heading}>Form → File → Display</h1>
        <p style={S.sub}>React + Node.js · POST saves to file · GET reads from file</p>

        {/* ── FORM CARD ── */}
        <div style={S.card}>
          <h2 style={{ ...S.sectionTitle, marginTop: 0 }}>Submit Entry</h2>

          <label style={S.label}>Name</label>
          <input
            style={S.input}
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <label style={S.label}>Email</label>
          <input
            style={S.input}
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <label style={S.label}>Message</label>
          <textarea
            style={S.textarea}
            placeholder="Write something..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          {toast && <div style={S.toast(toast.type)}>{toast.text}</div>}

          <div style={S.btnRow}>
            <button
              style={{ ...S.btnPrimary, opacity: loading ? 0.6 : 1 }}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Saving…" : "Submit (POST)"}
            </button>
            <button
              style={{ ...S.btnSecondary, opacity: fetching ? 0.6 : 1 }}
              onClick={fetchEntries}
              disabled={fetching}
            >
              {fetching ? "Loading…" : "Refresh (GET)"}
            </button>
          </div>
        </div>

        {/* ── ENTRIES LIST ── */}
        <div style={S.card}>
          <h2 style={{ ...S.sectionTitle, marginTop: 0 }}>
            Stored Entries ({entries.length})
          </h2>

          {entries.length === 0 ? (
            <p style={S.emptyNote}>No entries yet — submit the form above!</p>
          ) : (
            entries.map((e) => (
              <div key={e.id} style={S.entryCard}>
                <div style={S.entryName}>{e.name}</div>
                <div style={S.entryEmail}>{e.email}</div>
                <div style={S.entryMsg}>{e.message}</div>
                <div style={S.entryDate}>
                  {new Date(e.createdAt).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
