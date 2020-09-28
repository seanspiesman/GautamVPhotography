import cuid from "cuid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBlog, updateBlog } from "./blogActions";

const PostForm = ({ match }) => {
  const post = useSelector((state) =>
    state.blog.posts.find((e) => e.id === match.params.id)
  );

  const initialValues = post ?? {
    title: "",
    description: "",
  };

  let history = useHistory();

  const [values, setValues] = useState(initialValues);

  function handleFormSubmit(e) {
    e.preventDefault();
    post
      ? dispatch(updateBlog({ ...post, ...values }))
      : dispatch(
          createBlog({
            ...values,
            id: cuid(),
          })
        );
    history.push("/Blog");
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>{post ? "Edit the post" : "Create new post"}</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <h4 htmlFor="blogtitleinput">Title</h4>
          <input
            defaultValue={`${values.title}`}
            id="title"
            name="title"
            className="form-control form-control-lg"
            type="text"
            title="blogtitleinput"
            placeholder="Title here..."
            onChange={handleInputChange}
            autoFocus
          />
          <h4 htmlFor="blogpostbody">Post Body</h4>
          <textarea
            defaultValue={`${values.description}`}
            className="form-control form-control-lg"
            name="description"
            type="textarea"
            title="blogpostbody"
            placeholder="Body text here..."
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
