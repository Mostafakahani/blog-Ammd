import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: "عنوان مطلب اول",
    content: "محتوای مطلب اول ..."
  },
  {
    id: 2,
    title: "عنوان مطلب دوم",
    content: "محتوای مطلب دوم ..."
  }
];

const Blog = () => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          {/* ایجاد لینک با آدرس متغیر */}
          <Link to={`/posts/${post.id}`}>ادامه مطلب</Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
