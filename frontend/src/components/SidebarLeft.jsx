import React from "react";

export default function SidebarLeft() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <aside className="sidebar-left">
      <div className="profile-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
          alt="Profile"
        />
        <h3>{user?.name}</h3>
        <p>{user?.email}</p>
        <div className="connections">
          <p>Connections: 120</p>
          <p>Followers: 85</p>
        </div>
      </div>
    </aside>
  );
}
