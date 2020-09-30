import firebase from "../config/firebase";
import { setUserProfileData } from "./firestoreService";

export async function socialLogin(selectedProvider) {
  let provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    console.log(result);
    if (result.additionalUserInfo.isNewUser) {
      await setUserProfileData(result.user);
    }
  } catch (error) {
    console.log(error);
  }
}
