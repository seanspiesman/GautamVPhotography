import { CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG } from "./blogConstants";

export function createBlog(post) {
  return {
    type: CREATE_BLOG,
    payload: post,
  };
}

export function updateBlog(post) {
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
