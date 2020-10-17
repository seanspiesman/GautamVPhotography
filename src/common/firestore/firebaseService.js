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

export function uploadPicToFirebaseStorage(path, file, filename, postId) {
  const storageRef = firebase.storage().ref();
  if (postId === undefined) {
    return storageRef.child(`${path}/${filename}`).put(file);
  }
  return storageRef.child(`${path}/${postId}/${filename}`).put(file);
}

export function deletePicFromFirebaseStorage(path, filename, locationId) {
  console.log(filename, locationId);
  const storageRef = firebase.storage().ref();
  const photoRef = storageRef.child(`${path}/${locationId}/${filename}`);
  return photoRef.delete();
}
