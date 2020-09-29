import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BlogItem from "./BlogItem";

const Blog = () => {
  const { auth, blog } = useSelector((state) => state);
  console.log(auth);

  return (
    <div className="container">
      <h1 className="text-center">Blog</h1>
      <div className="text-right">
        {auth.authenticated ? (
          <span className="oi oi-account-logout "></span>
        ) : (
          <span className="oi oi-account-login "></span>
        )}
      </div>
      <div className=" text-center">
        <Link className="btn btn-info" to={"/CreatePost"}>
          Create New event
        </Link>
      </div>
      {blog.posts &&
        blog.posts.map((post, index) => (
          <BlogItem key={index} index={index} post={post} />
        ))}
    </div>
  );
};

export default Blog;
