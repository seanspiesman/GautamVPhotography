import { combineReducers } from "redux";
import blogReducer from "../components/Blog/blogReducer";
import testReducer from "../components/sandbox/testReducer";

const rootReducer = combineReducers({
  test: testReducer,
  blog: blogReducer,
});

export default rootReducer;
