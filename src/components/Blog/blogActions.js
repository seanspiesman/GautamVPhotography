import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../../common/async/asyncReducer";
import { fetchSampleData } from "../../common/mockAPI/mockApi";
import {
  CREATE_BLOG,
  DELETE_BLOG,
  FETCH_BLOG,
  UPDATE_BLOG,
} from "./blogConstants";

export function loadBlog() {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const posts = await fetchSampleData();
      dispatch({ type: FETCH_BLOG, payload: posts });
      dispatch(asyncActionFinish);
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
}

export function listenToBlog(posts) {
  return {
    type: FETCH_BLOG,
    payload: posts,
  };
}

export function createBlog(post) {
  return {
    type: CREATE_BLOG,
    payload: post,
  };
}

export function updateBlog(post) {
  console.log("update", post);
  return {
    type: UPDATE_BLOG,
    payload: post,
  };
}

export function deleteBlog(postId) {
  return {
    type: DELETE_BLOG,
    payload: postId,
  };
}
