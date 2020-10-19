import cuid from "cuid";
import { firestore } from "firebase";
import firebase from "../config/firebase";

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return { ...data, id: snapshot.id };
}

export function listenToPostsFromFirestore() {
  return db.collection("Blog").orderBy("date");
}

export function listenToPostFromFirestore(postId) {
  return db.collection("Blog").doc(postId);
}

export function getBlogPhotos(postId) {
  return db.collection("Blog").doc(postId).collection("photos");
}

const now = firestore.Timestamp.fromDate(new Date());

let postImageId = cuid();

export function addPostToFirestore(post) {
  return db.collection("Blog").add({
    ...post,
    date: now,
    id: postImageId,
    photoArray: [],
  });
}

export function updatePostInFirestore(post) {
  return db.collection("Blog").doc(post.id).update(post);
}

export function deletePostInFirestore(postId) {
  return db.collection("Blog").doc(postId).delete();
}

export function setUserProfileData(user) {
  return db.collection("users").doc(user.uid).set({
    displayName: user.displayName,
    email: user.email,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

export async function updateBlogPhoto(
  downloadURL,
  filename,
  postId,
  path,
  post
) {
  // let DocRef = await db.collection(path).doc(postId);
  try {
    // const blogDoc = await DocRef.get();
    // const objData = blogDoc.data().photoArray;
    let photoObj = { filename, downloadURL };
    console.log(post.photoArray);
    await db
      .collection(path)
      .doc(postId)
      .update({
        photoArray: [...post.photoArray, photoObj],
      });
  } catch (error) {
    throw error;
  }
}

//=====================ALBUMS=============================

export function addPhotoToFirestore(downloadURL, filename, path) {
  let newPath = path.split("/")[1];
  console.log({ downloadURL, filename, newPath });
  return db.collection(newPath).add({
    date: now,
    id: filename,
    photoURL: downloadURL,
  });
}

export function listenToAlbumPhotosFromFirestore(path) {
  if (path) {
    let newPath = path.split("/")[1];
    return db.collection(newPath).orderBy("date");
  }
}

export function deleteAdventurePhotoInFirestore(path, id) {
  let newPath = path.split("/")[1];

  return db.collection(newPath).doc(id).delete();
}
