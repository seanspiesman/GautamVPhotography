import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageDropzone from "../ImageCropper/ImageDropzone";
import useFirestoreCollection from "../../common/hooks/useFirestoreCollection";
import { listenToAdventurePhotosFromFirestore } from "../../common/firestore/firestoreService";
import { listenToPhotos } from "./redux/photoActions";

import ResponsiveGallery from "react-responsive-gallery";

const Album = ({ title, path }) => {
  const { auth, photos } = useSelector((state) => state);
  let edit, admin;
  if (auth.currentUser) admin = auth.currentUser.email;
  if (admin === "sean.spies@gmail.com" || admin === "slohaputra@gmail.com")
    edit = true;

  const dispatch = useDispatch();
  useFirestoreCollection({
    query: () => listenToAdventurePhotosFromFirestore(),
    data: (images) => dispatch(listenToPhotos(images)),
    deps: [dispatch],
  });

  const formatPhotoArr = [];

  const formatPhotos = ({ photos }) => {
    if (photos) {
      for (let i = 0; i < photos.length; i++) {
        formatPhotoArr.push({ src: photos[i].photoURL });
      }
    }
  };
  formatPhotos(photos);

  return (
    <div className="container">
      <h3
        className="text-center"
        style={{ fontFamily: '"Shadows Into Light", cursive', color: "white" }}
      >
        {title}
      </h3>

      {auth && edit && <ImageDropzone path={path} />}
      <br />
      <ResponsiveGallery images={formatPhotoArr.reverse()} useLightBox={true} />
    </div>
  );
};

export default Album;
