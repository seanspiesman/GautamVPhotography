import {
  CREATE_BLOG,
  DELETE_BLOG,
  FETCH_BLOG,
  LISTEN_TO_BLOG_PHOTOS,
  UPDATE_BLOG,
} from "./blogConstants";

const initialState = {
  posts: [],
};

export default function blogReducer(state = initialState, { type, payload }) {
  console.log(state);
  switch (type) {
    case CREATE_BLOG:
      return {
        ...state,
        posts: [...state.posts, payload],
      };
    case UPDATE_BLOG:
      return {
        ...state,
        posts: [...state.posts.filter((pst) => pst.id !== payload.id), payload],
      };
    case DELETE_BLOG:
      return {
        ...state,
        posts: [...state.posts.filter((pst) => pst.id !== payload)],
      };
    case LISTEN_TO_BLOG_PHOTOS:
      return {
        ...state,
        blogPhotos: payload,
      };
    case FETCH_BLOG:
      return {
        ...state,
        posts: payload,
      };

    default:
      return state;
  }
}
