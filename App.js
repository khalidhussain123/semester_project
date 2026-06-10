import { useState, useEffect } from "react";

const style = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.4s ease;
  }

  body.theme-1 { background: linear-gradient(135deg, #667eea, #764ba2); }
  body.theme-2 { background: linear-gradient(135deg, #ff7e5f, #feb47b); }
  body.theme-3 { background: linear-gradient(135deg, #43cea2, #185a9d); }
  body.theme-4 { background: linear-gradient(135deg, #ff9966, #ff5e62); }
  body.theme-5 { background: linear-gradient(135deg, #00c6ff, #0072ff); }

  .container {
    width: 360px;
    padding: 30px;
    border-radius: 20px;
    backdrop-filter: blur(15px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
    color: #fff;
  }

  .title {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
  }

  .input-group {
    position: relative;
    margin-bottom: 15px;
  }

  input {
    width: 100%;
    padding: 12px 45px 12px 12px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 14px;
    background: rgba(255,255,255,0.2);
    color: #fff;
  }

  input::placeholder { color: rgba(255,255,255,0.7); }

  .toggle-btn {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 12px;
  }

  .strength {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .badge {
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    transition: 0.3s;
  }

  .bar {
    height: 6px;
    width: 100%;
    border-radius: 5px;
    margin-top: 10px;
    background: rgba(255,255,255,0.2);
    overflow: hidden;
  }

  .progress {
    height: 100%;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  .weak { background: #ff4d4d; }
  .medium { background: #ffb84d; }
  .strong { background: #4dff88; }

  .themes {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .theme-btn {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid #fff;
    opacity: 0.7;
    transition: 0.3s;
  }

  .theme-btn.active {
    transform: scale(1.2);
    opacity: 1;
  }

  .t1 { background: #667eea; }
  .t2 { background: #ff7e5f; }
  .t3 { background: #43cea2; }
  .t4 { background: #ff5e62; }
  .t5 { background: #0072ff; }
`;

function getStrength(password) {
  if (!password) return null;
  if (password.length < 6) return "Weak";
  if (password.length >= 6 && password.length <= 9) return "Medium";
  if (password.length >= 10 && /[@#]/.test(password)) return "Strong";
  return "Medium";
}

export default function PasswordStrengthMeter() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [theme, setTheme] = useState("theme-1");

  // On page load: fetch saved data from backend
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("http://localhost:3001/data");
        if (res.ok) {
          const data = await res.json();
          if (data.password) setPassword(data.password);
          if (data.theme) setTheme(data.theme);
        }
      } catch (err) {
        console.error("Failed to load data:", err);
      }
    }
    loadData();
  }, []);

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Save to backend whenever password or theme changes
  useEffect(() => {
    async function saveData() {
      try {
        await fetch("http://localhost:3001/data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password, theme }),
        });
      } catch (err) {
        console.error("Failed to save data:", err);
      }
    }
    saveData();
  }, [password, theme]);

  const strength = getStrength(password);

  const progressWidth = strength === "Weak" ? "33%" : strength === "Medium" ? "66%" : strength === "Strong" ? "100%" : "0%";
  const strengthClass = strength ? strength.toLowerCase() : "";

  const themes = [
    { id: "theme-1", cls: "t1" },
    { id: "theme-2", cls: "t2" },
    { id: "theme-3", cls: "t3" },
    { id: "theme-4", cls: "t4" },
    { id: "theme-5", cls: "t5" },
  ];

  return (
    <>
      <style>{style}</style>
      <div className="container">
        <div className="title">Password Strength</div>

        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="toggle-btn" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="strength">
          <span>Strength:</span>
          <span className={`badge ${strengthClass}`}>{strength || "-"}</span>
        </div>

        <div className="bar">
          <div
            className={`progress ${strengthClass}`}
            style={{ width: progressWidth }}
          />
        </div>

        <div className="themes">
          {themes.map((t) => (
            <div
              key={t.id}
              className={`theme-btn ${t.cls} ${theme === t.id ? "active" : ""}`}
              data-theme={t.id}
              onClick={() => setTheme(t.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
