import { Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { listenToBlog } from "./blogActions";
import * as Yup from "yup";
import MyTextInput from "../../common/form/MyTextInput";
import MyTextArea from "../../common/form/MyTextArea";
import useFirestoreDoc from "../../common/hooks/useFirestoreDoc";
import {
  addPostToFirestore,
  listenToPostFromFirestore,
  updatePostInFirestore,
} from "../../common/firestore/firestoreService";
import LoadingComponent from "../LoadingComponent";
import ImageDropzone from "./ImageDropzone";

const PostForm = ({ match, history }) => {
  const { loading } = useSelector((state) => state.async);

  const dispatch = useDispatch();
  // console.log(listenToPostFromFirestore(match.params.id));
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
    shouldExecute:
      !!match.params.id && history.location.pathname !== "/CreatePost",
    query: () => listenToPostFromFirestore(match.params.id),
    data: (post) => dispatch(listenToBlog([post])),
    deps: [match.params.id, dispatch],
  });

  if (loading) return <LoadingComponent />;

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
            history.push("/Blog");
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
          {post && post.photoURL && <ImageDropzone post={post} />}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default PostForm;
