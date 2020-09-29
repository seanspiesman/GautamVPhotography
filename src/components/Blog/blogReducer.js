import {
  CREATE_BLOG,
  DELETE_BLOG,
  FETCH_BLOG,
  UPDATE_BLOG,
} from "./blogConstants";

const { sampleData } = require("./sampleData");

const initialState = {
  posts: [],
};

export default function blogReducer(state = initialState, { type, payload }) {
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
    case FETCH_BLOG:
      return {
        ...state,
        posts: payload,
      };

    default:
      return state;
  }
}
