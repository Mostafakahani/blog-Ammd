import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const addPost = async () => {
    try {
      await axios.post('http://localhost:3001/api/posts', { title, content, author, imageUrl });
      fetchPosts();
      setTitle('');
      setContent('');
      setAuthor('');
      setImageUrl('');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div>
      <h1>بلاگ من</h1>
      <form onSubmit={addPost}>
        <input
          type="text"
          placeholder="عنوان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="متن"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="نویسنده"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="آدرس تصویر"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">ارسال</button>
      </form>
      {/* <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>نویسنده: {post.author}</p>
            <p>تاریخ انتشار: {post.publish_date}</p>
            {post.image_url && <img src={post.image_url} alt="تصویر پست" />}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default App;
