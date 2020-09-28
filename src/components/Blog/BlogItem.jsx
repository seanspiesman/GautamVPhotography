import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { deleteBlog } from "./blogActions";

const BlogItem = ({ post, match }) => {
  const { title, date, description, id } = post;
  //   const blog = useSelector((state) =>
  //     state.post.events.find((e) => e.id === match.params.id)
  //   );
  //   console.log(blog);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>{title}</h2>
        <h4>{date}</h4>
        <p>{description}</p>
        <br />
        <div className="text-right">
          <button
            onClick={() => dispatch(deleteBlog(id))}
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
