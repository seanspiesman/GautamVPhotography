import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getBlogPhotos,
  listenToPostsFromFirestore,
} from "../../common/firestore/firestoreService";
import useFirestoreCollection from "../../common/hooks/useFirestoreCollection";
import LoadingComponent from "../LoadingComponent";
import BlogItem from "./components/BlogItem";
import { listenToBlog, listenToBlogPhotos } from "./redux/blogActions";

const Blog = () => {
  const { auth, blog } = useSelector((state) => state);
  let oragnizeBlog = blog.posts.slice().reverse();
  let edit, admin;
  if (auth.currentUser) admin = auth.currentUser.email;
  if (admin === "sean.spies@gmail.com" || admin === "slohaputra@gmail.com")
    edit = true;

  const dispatch = useDispatch();

  useFirestoreCollection({
    query: () => listenToPostsFromFirestore(),
    data: (post) => dispatch(listenToBlog(post)),
    deps: [dispatch],
  });

  console.log(blog);
  //  useFirestoreCollection({
  //    query: () => getBlogPhotos(id),
  //    data: (photos) => dispatch(listenToBlogPhotos(photos)),
  //    deps: [dispatch],
  //  });

  return (
    <div className="container">
      <br />
      <h1
        className="text-center"
        style={{ color: "white", fontFamily: '"Shadows Into Light", cursive' }}
      >
        A Day in the Life
      </h1>

      <br />
      <div className="row">
        {edit && (
          <Link
            className="btn btn-info"
            style={{ margin: "auto", marginBottom: 30 }}
            to={"/CreatePost"}
          >
            Create New Post
          </Link>
        )}
      </div>
      {oragnizeBlog ? (
        oragnizeBlog.map((post, index) => (
          <BlogItem key={index} index={index} post={post} edit={edit} />
        ))
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default Blog;
