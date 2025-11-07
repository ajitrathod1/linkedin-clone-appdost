import React, { useState } from "react";
import api from "../api";

export default function CreatePost({ onPostCreated }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    try {
      const res = await api.post("/posts", { content, image });
      onPostCreated(res.data);
      setContent("");
      setImage("");
    } catch (err) {
      alert("❌ Error creating post");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md mb-4">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Start a post..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded-lg dark:bg-gray-700"
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full mt-2 p-2 border rounded-lg dark:bg-gray-700"
        />
        <button
          type="submit"
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Post
        </button>
      </form>
    </div>
  );
}
