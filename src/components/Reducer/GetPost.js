import React, { useState, useEffect } from 'react';

export default function GetPost() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setPost(data);     // ✅ put data in post
        setError('');      // ✅ clear error
      })
      .catch(() => {
        setLoading(false);
        setError('There was a problem'); // ✅ put message in error
        setPost({});                     // ✅ clear post
      });
  }, []);

    return (
        <div>
          {loading? 'loading....': post.title} 
          {error || null}
        </div>
    )
}

