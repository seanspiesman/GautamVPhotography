import { format } from "date-fns";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePostInFirestore } from "../../../common/firestore/firestoreService";

const BlogItem = ({ post, edit }) => {
  const { title, description, id, photoURL } = post;
  let postDate = format(post.date, "PPPPpppp");

  const dispatch = useDispatch();

  return (
    <>
      <div className="blog-post">
        <h1 className="blog-post-title">
          {title}
          <div style={{ fontSize: "12px" }} className="text-muted">
            {postDate}
          </div>
        </h1>
        <div className="row">
          <div className="col-md-6">
            <p className="blog-post-text">{description}</p>
          </div>
          <div className="col-md-6">
            {photoURL && (
              <img src={photoURL} alt="" style={{ width: "100%" }} />
            )}
            {edit && (
              <div className="text-right">
                <button
                  onClick={() => deletePostInFirestore(id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>{" "}
                <Link
                  className="btn btn-primary"
                  as={Link}
                  to={`/ManagePost/${id}`}
                >
                  Update
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default BlogItem;
