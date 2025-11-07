import React from "react";

export default function PostCard({ post, onLike }) {
  return (
    <div className="post-card">
      <h4>{post.user}</h4>
      <p>{post.content}</p>
      <div className="post-actions">
        <button onClick={onLike}>👍 Like ({post.likes})</button>
        <button>💬 Comment ({post.comments.length})</button>
        <button>🔁 Share</button>
      </div>
    </div>
  );
}
