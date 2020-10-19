import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageDropzone from "../ImageCropper/ImageDropzone";
import useFirestoreCollection from "../../common/hooks/useFirestoreCollection";
import { listenToAlbumPhotosFromFirestore } from "../../common/firestore/firestoreService";
import { listenToPhotos } from "./redux/photoActions";

import ResponsiveGallery from "react-responsive-gallery";
import LoadingComponent from "../LoadingComponent";

const Album = ({ title, path }) => {
  const { auth, albumPhotos } = useSelector((state) => state);
  let edit, admin;
  if (auth.currentUser) admin = auth.currentUser.email;
  if (admin === "sean.spies@gmail.com" || admin === "slohaputra@gmail.com")
    edit = true;

  const dispatch = useDispatch();
  useFirestoreCollection({
    query: () => listenToAlbumPhotosFromFirestore(path),
    data: (images) => dispatch(listenToPhotos(images)),
    deps: [dispatch],
  });

  const formatPhotoArr = [];

  const formatPhotos = (albumPhotos) => {
    if (albumPhotos) {
      for (let i = 0; i < albumPhotos.photos.length; i++) {
        formatPhotoArr.push({ src: albumPhotos.photos[i].photoURL });
      }
    }
  };
  formatPhotos(albumPhotos);

  if (!path) {
    return <LoadingComponent />;
  }

  return (
    <div className="container">
      <h1
        className="text-center"
        style={{
          fontFamily: '"Shadows Into Light", cursive',
          color: "white",
          marginTop: "20px",
        }}
      >
        {title}
      </h1>

      {auth && edit && <ImageDropzone path={path} />}
      <br />
      <ResponsiveGallery images={formatPhotoArr.reverse()} useLightBox={true} />
    </div>
  );
};

export default Album;
