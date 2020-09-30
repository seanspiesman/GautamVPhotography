import { format } from "date-fns";
import React from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePostInFirestore } from "../../common/firestore/firestoreService";

const BlogItem = ({ post, match, edit }) => {
  const { title, description, id } = post;
  let postDate = format(post.date, "PPPPpppp");
  return (
    <>
      <div style={{ color: "white" }}>
        <h2>
          {title}{" "}
          <div style={{ fontSize: "12px" }} className="text-muted">
            {postDate}
          </div>
        </h2>

        <p>{description}</p>
        <br />
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
      <br />
    </>
  );
};

export default BlogItem;
