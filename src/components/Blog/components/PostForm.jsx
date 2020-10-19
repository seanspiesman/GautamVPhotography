import { Formik, Form } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import ImageDropzone from "../../ImageCropper/ImageDropzone";
import { listenToBlog } from "../redux/blogActions";
import LoadingComponent from "../../LoadingComponent";
import {
  addPostToFirestore,
  listenToPostFromFirestore,
  listenToPostsFromFirestore,
  updatePostInFirestore,
} from "../../../common/firestore/firestoreService";
import MyTextInput from "../../../common/form/MyTextInput";
import MyTextArea from "../../../common/form/MyTextArea";
import useFirestoreDoc from "../../../common/hooks/useFirestoreDoc";
import useFirestoreCollection from "../../../common/hooks/useFirestoreCollection";

const PostForm = (props) => {
  const { match, location, history } = props;
  const path = location.pathname.substring(1);
  const { loading } = useSelector((state) => state.async);
  const dispatch = useDispatch();
  let post = useSelector((state) =>
    state.blog.posts.find((e) => e.id === match.params.id)
  );
  const { blog } = useSelector((state) => state);

  const initialValues = post ?? {
    title: "",
    description: "",
    photoArray: [],
  };

  useEffect(() => {
    // Update the document title using the browser API
    if (path === "CreatePost") {
      addPostToFirestore(initialValues);
    }
  }, []);

  useFirestoreCollection({
    shouldExecute: location.pathname === "/CreatePost",
    query: () => listenToPostsFromFirestore(),
    data: (post) => dispatch(listenToBlog(post)),
    deps: [dispatch],
  });

  let id;
  if (blog.posts[0]) {
    id = blog.posts[blog.posts.length - 1].id;
    if (post === undefined) {
      post = blog.posts[blog.posts.length - 1];
    }
  }

  const validationSchema = Yup.object({
    title: Yup.string().required("You must provide a blog title"),
    description: Yup.string().required("You must provide post content"),
  });

  useFirestoreDoc({
    shouldExecute: !!match.params.id && location.pathname !== "/CreatePost",
    query: () => listenToPostFromFirestore(match.params.id || id),
    data: (post) => dispatch(listenToBlog([post])),
    deps: [match.params.id || id, dispatch],
  });

  if (!post) return <LoadingComponent />;

  return (
    <div className="container">
      <h1 style={{ color: "white" }}>
        {post.title.length === 0 ? "Edit the post" : "Create new post"}
      </h1>
      <Formik
        onSubmit={async (values, { setSubmitting }) => {
          try {
            // post
            //   ?
            await updatePostInFirestore(values);
            // : await addPostToFirestore(values);
            // history.push("/Blog");
          } catch (error) {
            console.log(error);
            setSubmitting(false);
            history.push("/Blog");
          }
        }}
        initialValues={post}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="form-group">
            <MyTextInput name="title" placeholder="Post title" />
            <MyTextArea name="description" placeholder="Blog text" rows={10} />
          </div>
          <div className="row text-center">
            {post &&
              post.photoArray &&
              post.photoArray[0] &&
              post.photoArray.map((image, index) => (
                <div
                  className="col-sm-2"
                  style={{ marginTop: "auto", marginBottom: "auto" }}
                  key={index}
                >
                  <img
                    src={image.downloadURL}
                    alt=""
                    className="d-block w-100"
                    style={{
                      maxWidth: "100%",
                      width: "auto",
                      maxHeight: "200px",
                      overflow: "hidden",
                    }}
                  />
                </div>
              ))}
          </div>
          <br />
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
