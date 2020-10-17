import { DELETE_BLOG } from "../../Blog/redux/blogConstants";
import { CREATE_PHOTO, FETCH_PHOTO } from "./photoConstants";

const initialState = {
  photos: [],
  //   Alaska: [],
  //   Japan: [],
  //   PacificNW: [],
};

export default function photoReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_PHOTO:
      return {
        ...state,
        photos: [...state.photos, payload],
      };
    case DELETE_BLOG:
      return {
        ...state,
        photos: [...state.photos.filter((pst) => pst.id !== payload)],
      };
    case FETCH_PHOTO:
      return {
        ...state,
        photos: payload,
      };

    default:
      return state;
  }
}
