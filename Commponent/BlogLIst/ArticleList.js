import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard"; // به توجه به مسیر فایل BlogCard

const ArticleList = ({ articles }) => {
    
  return (
    <div>
      {articles.map((article, index) => (
        <Link to={`/article/${article.slug}`} key={index}>
          <BlogCard
            title={article.title}
            image={article.image}
            content={article.content}
          />
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;
