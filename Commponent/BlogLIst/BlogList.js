// BlogList.js

import React from "react";
import { Container, Grid } from "@material-ui/core";
import BlogCard from "./BlogCard";

const BlogList = ({ blogPosts }) => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlogCard
              title={post.title}
              image={post.image}
              content={post.content}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogList;
