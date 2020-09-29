import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listenToPostsFromFirestore } from "../../common/firestore/firestoreService";
import useFirestoreCollection from "../../common/hooks/useFirestoreCollection";
import LoadingComponent from "../LoadingComponent";
import { listenToBlog } from "./blogActions";
import BlogItem from "./BlogItem";

const Blog = () => {
  const { auth, blog } = useSelector((state) => state);
  const dispatch = useDispatch();

  useFirestoreCollection({
    query: () => listenToPostsFromFirestore(),
    data: (posts) => dispatch(listenToBlog(posts)),
    deps: [dispatch],
  });

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
      {blog.posts ? (
        blog.posts.map((post, index) => (
          <BlogItem key={index} index={index} post={post} />
        ))
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default Blog;
