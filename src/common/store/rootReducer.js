import { combineReducers } from "redux";
import blogReducer from "../../components/Blog/blogReducer";
import testReducer from "../../components/sandbox/testReducer";
import authReducer from "../auth/authReducer";

const rootReducer = combineReducers({
  test: testReducer,
  blog: blogReducer,
  auth: authReducer,
});

export default rootReducer;
