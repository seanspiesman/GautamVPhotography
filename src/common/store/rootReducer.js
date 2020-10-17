import { combineReducers } from "redux";
import photoReducer from "../../components/Album/redux/photoReducer";
import blogReducer from "../../components/Blog/redux/blogReducer";
import testReducer from "../../components/sandbox/testReducer";
import asyncReducer from "../async/asyncReducer";
import authReducer from "../auth/authReducer";

const rootReducer = combineReducers({
  test: testReducer,
  albumPhotos: photoReducer,
  blog: blogReducer,
  auth: authReducer,
  async: asyncReducer,
});

export default rootReducer;
