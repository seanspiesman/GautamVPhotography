import { format } from "date-fns";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  // getBlogPhotos,
  listenToPostsFromFirestore,
} from "../../common/firestore/firestoreService";
import useFirestoreCollection from "../../common/hooks/useFirestoreCollection";
import LoadingComponent from "../LoadingComponent";
import BlogItem from "./components/BlogItem";
// import { listenToBlogPhotos } from "./photoRedux/blogPhotoActions";
import { listenToBlog } from "./redux/blogActions";

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

  let formattedDate;
  let sidebarArr = [];
  for (let i = 0; i < blog.posts.length; i++) {
    formattedDate = format(blog.posts[i].date, "PP");
    sidebarArr.push(formattedDate);
  }

  return (
    <div className="container">
      <br />
      <h1
        className="text-center"
        style={{ color: "white", fontFamily: "sans serif" }}
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
      <div className="row">
        {oragnizeBlog ? (
          <>
            <div className="col-md-2">
              <ul className="sidebar">
                {sidebarArr.reverse().map((date, index) => {
                  return (
                    <li key={index} className="sidebar-link">
                      <a className="sidebar-link-a" href={`#${date}`}>
                        {date}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-md-10">
              {oragnizeBlog.map((post, index) => (
                <BlogItem key={index} index={index} post={post} edit={edit} />
              ))}
            </div>
          </>
        ) : (
          <LoadingComponent />
        )}
      </div>
    </div>
  );
};

export default Blog;
