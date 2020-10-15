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

const now = firestore.Timestamp.fromDate(new Date());

let postImageId = cuid();

export function addPostToFirestore(post) {
  return db.collection("Blog").add({
    ...post,
    date: now,
    id: postImageId,
    photoURL: "",
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

export async function updateBlogPhoto(downloadURL, filename, postId) {
  let blogDocRef;
  if (postId !== "undefined") {
    blogDocRef = db.collection("Blog").doc(postId);
  } else {
    blogDocRef = db.collection("Blog").doc(postImageId);
  }

  try {
    const blogDoc = await blogDocRef.get();
    // if (blogDoc.data().photoURL) {
    await db.collection("Blog").doc(postId).update({
      photoURL: downloadURL,
      filename: filename,
    });
    // }
    // return await db.collection("Blog").doc(postId).collection("photos").add({
    //   name: filename,
    //   url: downloadURL,
    // });
  } catch (error) {
    throw error;
  }
}
