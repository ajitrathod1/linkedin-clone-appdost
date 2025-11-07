import React from "react";

export default function Login() {
  async function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("❌ Please enter both email and password");
      return;
    }

    try {
      // ✅ Correct backend API (Render)
      const res = await fetch("https://linkedin-clone-appdost-m3go.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // ✅ Safe JSON parsing (handle HTML error responses)
      const contentType = res.headers.get("content-type") || "";
      let data;
      if (contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(`Unexpected response: ${text.slice(0, 100)}...`);
      }

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert(`✅ Welcome back, ${data.user.name || "User"}!`);
        // ✅ Use React route instead of hard redirect
        window.location.href = "/feed"; // or "/feed.html" if static
      } else {
        alert(data.message || "❌ Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert(`❌ ${err.message || "Server error"}`);
    }
  }

  return (
    <div className="login-container">
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <input type="email" id="email" placeholder="Email address" required />
        <input type="password" id="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account?{" "}
        <a href="/signup">Create new account</a>
      </p>
    </div>
  );
}
