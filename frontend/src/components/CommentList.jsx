import React, { useState, useEffect } from 'react';
import api from '../api';

export default function Comments({ postId, onRefresh }){
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  const fetch = async () => {
    try {
      const res = await api.get(`/comments/${postId}`);
      setComments(res.data);
    } catch(err){ console.error(err); }
  };

  useEffect(()=>{ fetch(); }, []);

  const add = async (e) => {
    e.preventDefault();
    if(!text.trim()) return;
    try {
      await api.post(`/comments/${postId}`, { text });
      setText('');
      fetch();
      onRefresh && onRefresh();
    } catch(err){ alert('Comment failed'); }
  };

  const del = async (id) => {
    if(!confirm('Delete comment?')) return;
    try {
      await api.delete(`/comments/${id}`);
      fetch();
      onRefresh && onRefresh();
    } catch(err){ alert('Delete failed'); }
  };

  return (
    <div>
      <div style={{marginBottom:8}}>
        {comments.map(c => (
          <div key={c._id} className="comment">
            <div style={{flex:1}}>
              <span className="c-user">{c.user?.name}</span>
              <span style={{color:'#6b7280', fontSize:13}}> {new Date(c.createdAt).toLocaleString()}</span>
              <div>{c.text}</div>
            </div>
            <div>
              {(() => {
                try {
                  const token = localStorage.getItem('token');
                  const id = JSON.parse(atob(token.split('.')[1])).id;
                  if(id === c.user?._id) return <button onClick={()=>del(c._id)} style={{background:'none',border:'none',color:'#ef4444',cursor:'pointer'}}>Delete</button>;
                } catch(e){}
                return null;
              })()}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={add}>
        <input className="input" placeholder="Write a comment..." value={text} onChange={e=>setText(e.target.value)} />
        <div style={{textAlign:'right', marginTop:6}}>
          <button className="btn" type="submit" style={{width:'auto', padding:'6px 10px'}}>Comment</button>
        </div>
      </form>
    </div>
  );
}
