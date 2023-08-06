import React from "react";
import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";

const Article = ({ blogPosts }) => {
  const { slug } = useParams();



  const selectedArticle = blogPosts.find((post) => post.slug === slug);

  if (!selectedArticle) {
    return <div>مقاله موردنظر یافت نشد</div>;
  }

  return (
    <div>
      <BlogCard
        title={selectedArticle.title}
        image={selectedArticle.image}
        content={selectedArticle.content}
      />
    </div>
  );
};

export default Article;
