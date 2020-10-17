import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../../../common/async/asyncReducer";
import { fetchSampleData } from "../../../common/mockAPI/mockApi";
import { CREATE_PHOTO, DELETE_PHOTO, FETCH_PHOTO } from "./photoConstants";

export function loadBlog() {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const photos = await fetchSampleData();
      dispatch({ type: FETCH_PHOTO, payload: photos });
      dispatch(asyncActionFinish);
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
}

export function listenToPhotos(photos) {
  return {
    type: FETCH_PHOTO,
    payload: photos,
  };
}

export function createPhoto(photo) {
  return {
    type: CREATE_PHOTO,
    payload: photo,
  };
}

export function deleteBlog(photoId) {
  return {
    type: DELETE_PHOTO,
    payload: photoId,
  };
}
