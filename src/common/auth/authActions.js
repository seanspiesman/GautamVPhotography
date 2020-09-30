import { SIGN_IN_USER, SIGN_OUT_USER } from "./authConstants";
import firebase from "../config/firebase";

export function signInUser(creds) {
  return async function (dispatch) {
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
      dispatch({ type: SIGN_IN_USER, payload: result });
    } catch (error) {
      throw error;
    }
  };
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER,
  };
}
