import cuid from "cuid";
import { Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBlog, updateBlog } from "./blogActions";
import * as Yup from "yup";
import MyTextInput from "../../common/form/MyTextInput";
import MyTextArea from "../../common/form/MyTextArea";

const PostForm = ({ match }) => {
  const post = useSelector((state) =>
    state.blog.posts.find((e) => e.id === match.params.id)
  );

  const initialValues = post ?? {
    title: "",
    description: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("You must provide a blog title"),
    description: Yup.string().required("You must provide post content"),
  });

  let history = useHistory();

  const dispatch = useDispatch();

  var today = new Date();

  var date =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2);

  return (
    <div className="container">
      <h1>{post ? "Edit the post" : "Create new post"}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(value) => {
          post
            ? dispatch(updateBlog({ ...post, ...value }))
            : dispatch(
                createBlog({
                  ...value,
                  date: date,
                  id: cuid(),
                })
              );
          history.push("/Blog");
        }}
      >
        <Form>
          <div className="form-group">
            <MyTextInput name="title" placeholder="Post title" />
            <MyTextArea name="description" placeholder="Blog text" rows={10} />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default PostForm;
