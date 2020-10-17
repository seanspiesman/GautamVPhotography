import { Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import ImageDropzone from "../../ImageCropper/ImageDropzone";
import { listenToBlog, listenToBlogPhotos } from "../redux/blogActions";
import LoadingComponent from "../../LoadingComponent";
import {
  addPostToFirestore,
  getBlogPhotos,
  listenToPostFromFirestore,
  updatePostInFirestore,
} from "../../../common/firestore/firestoreService";
import MyTextInput from "../../../common/form/MyTextInput";
import MyTextArea from "../../../common/form/MyTextArea";
import useFirestoreDoc from "../../../common/hooks/useFirestoreDoc";
import useFirestoreCollection from "../../../common/hooks/useFirestoreCollection";

const PostForm = (props) => {
  const { history, match, location } = props;
  const path = location.pathname.substring(1);
  const { loading } = useSelector((state) => state.async);
  const dispatch = useDispatch();
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

  useFirestoreDoc({
    shouldExecute: !!match.params.id && location.pathname !== "/CreatePost",
    query: () => listenToPostFromFirestore(match.params.id),
    data: (post) => dispatch(listenToBlog([post])),
    deps: [match.params.id, dispatch],
  });

  if (loading) return <LoadingComponent />;

  if (path === "CreatePost") {
    addPostToFirestore(initialValues);
  }
  return (
    <div className="container">
      <h1 style={{ color: "white" }}>
        {post ? "Edit the post" : "Create new post"}
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            post
              ? await updatePostInFirestore(values)
              : await addPostToFirestore(values);
            // history.push("/Blog");
          } catch (error) {
            console.log(error);
            setSubmitting(false);
          }
        }}
      >
        <Form>
          <div className="form-group">
            <MyTextInput name="title" placeholder="Post title" />
            <MyTextArea name="description" placeholder="Blog text" rows={10} />
          </div>
          <ImageDropzone post={post} path={"Blog"} />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default PostForm;
