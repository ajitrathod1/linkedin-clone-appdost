import React, { useEffect, useState } from "react";
import api from "../api";

export default function HomeFeed() {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function loadPosts() {
      const res = await api.get("/posts", { headers: { "x-auth-token": token } });
      setPosts(res.data);
    }
    loadPosts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {posts.map((p) => (
        <div key={p._id} className="bg-white shadow p-4 rounded-lg">
          <h4 className="font-semibold">{p.name}</h4>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
}
