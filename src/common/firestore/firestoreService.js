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

var now = firestore.Timestamp.fromDate(new Date());

export function addPostToFirestore(post) {
  return db.collection("Blog").add({
    ...post,
    date: now,
    id: cuid(),
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
