import { formatRelative, subDays } from "date-fns";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePostInFirestore } from "../../common/firestore/firestoreService";

const BlogItem = ({ post, match }) => {
  const { title, description, id } = post;
  // const blog = useSelector((state) =>
  //   // console.log(state)
  //   state.blog.posts.find((e) => e.id === match.params.id)
  // );
  // console.log(blog);

  const dispatch = useDispatch();
  let postDate = formatRelative(subDays(post.time, 3), post.time);
  return (
    <>
      <div>
        <h2>
          {title}{" "}
          <div style={{ fontSize: "12px" }} className="text-muted">
            {postDate}
          </div>
        </h2>

        <p>{description}</p>
        <br />
        <div className="text-right">
          <button
            onClick={() => deletePostInFirestore(id)}
            className="btn btn-danger"
          >
            Delete
          </button>{" "}
          <Link className="btn btn-primary" as={Link} to={`/ManagePost/${id}`}>
            Update
          </Link>
        </div>
      </div>
      <br />
    </>
  );
};

export default BlogItem;
