import firebase from "../config/firebase";
import { setUserProfileData } from "./firestoreService";

export async function socialLogin() {
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

export function uploadBlogPicToFirebaseStorage(file, filename, postId) {
  const storageRef = firebase.storage().ref();
  return storageRef.child(`blog_images/${postId}/${filename}`).put(file);
}

export function deleteFromFirebaseStorage(filename, postId) {
  console.log(filename, postId);
  const storageRef = firebase.storage().ref();
  const photoRef = storageRef.child(`blog_images/${postId}/${filename}`);
  return photoRef.delete();
}
