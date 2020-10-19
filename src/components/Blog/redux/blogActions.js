import {
  CREATE_BLOG,
  DELETE_BLOG,
  FETCH_BLOG,
  UPDATE_BLOG,
} from "./blogConstants";

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
