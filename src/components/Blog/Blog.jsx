import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BlogItem from "./BlogItem";

const Blog = () => {
  const { posts } = useSelector((state) => state.blog);
  return (
    <div className="container">
      <h1 className="text-center">Blog</h1>
      <div className=" text-center">
        <Link className="btn btn-info" to={"/CreatePost"}>
          Create New event
        </Link>
      </div>
      {posts &&
        posts.map((post, index) => (
          <BlogItem key={index} index={index} post={post} />
        ))}
    </div>
  );
};

export default Blog;
