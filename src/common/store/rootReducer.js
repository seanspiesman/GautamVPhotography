import { combineReducers } from "redux";
import blogReducer from "../../components/Blog/blogReducer";
import testReducer from "../../components/sandbox/testReducer";
import asyncReducer from "../async/asyncReducer";
import authReducer from "../auth/authReducer";
import modalReducer from "../modal/modalReducer";

const rootReducer = combineReducers({
  test: testReducer,
  blog: blogReducer,
  auth: authReducer,
  modal: modalReducer,
  async: asyncReducer,
});

export default rootReducer;
