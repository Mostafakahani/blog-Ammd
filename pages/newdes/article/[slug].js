// pages/article/[slug].js
import React from "react";
import { useRouter } from "next/router";

const ArticlePage = () => {
  const router = useRouter();
  const { slug } = router.query; // مقدار slug از URL دریافت می‌شود

  return (
    <div>
      <h1>صفحه‌ی مقاله</h1>
      <p>شناسه مقاله: {slug}</p>
      {/* محتوای مرتبط با مقاله را نمایش دهید */}
    </div>
  );
};

export default ArticlePage;
