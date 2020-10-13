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
  let newblog = blog.posts.slice().reverse();
  let edit, admin;
  if (auth.currentUser) admin = auth.currentUser.email;
  if (admin === "sean.spies@gmail.com" || admin === "slohaputra@gmail.com")
    edit = true;

  const dispatch = useDispatch();

  useFirestoreCollection({
    query: () => listenToPostsFromFirestore(),
    data: (posts) => dispatch(listenToBlog(posts)),
    deps: [dispatch],
  });

  return (
    <div className="container">
      <h1
        className="text-center"
        style={{ color: "white", fontFamily: '"Shadows Into Light", cursive' }}
      >
        A Day in the Life
      </h1>

      <br />
      <div className="row">
        {edit && (
          <Link className="btn btn-info" to={"/CreatePost"}>
            Create New Post
          </Link>
        )}
      </div>
      {newblog ? (
        newblog.map((post, index) => (
          <BlogItem key={index} index={index} post={post} edit={edit} />
        ))
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default Blog;
