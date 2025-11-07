import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }
      try {
        const res = await api.get("/auth/me", {
          headers: { "x-auth-token": token },
        });
        setUser(res.data);
      } catch {
        alert("Session expired. Please login again.");
        localStorage.clear();
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (loading) return <p>Loading your dashboard...</p>;

  return (
    <div className="dashboard">
      <nav className="navbar">
        <h2>LinkedIn Clone Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <div className="dashboard-content">
        <h3>Welcome, {user?.name} 👋</h3>
        <p>Email: {user?.email}</p>
        <div className="stats">
          <div>Followers: 12</div>
          <div>Connections: 45</div>
          <div>Posts: 8</div>
        </div>
      </div>
    </div>
  );
}
