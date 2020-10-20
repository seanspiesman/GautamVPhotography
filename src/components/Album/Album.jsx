import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageDropzone from "../ImageCropper/ImageDropzone";
import useFirestoreCollection from "../../common/hooks/useFirestoreCollection";
import {
  deleteAlbumPhotoFromCollection,
  listenToAlbumPhotosFromFirestore,
} from "../../common/firestore/firestoreService";
import { listenToPhotos } from "./redux/photoActions";

import ResponsiveGallery from "react-responsive-gallery";
import LoadingComponent from "../LoadingComponent";
import { deletePicFromFirebaseStorage } from "../../common/firestore/firebaseService";

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
    if (albumPhotos && albumPhotos.photos) {
      for (let i = 0; i < albumPhotos.photos.length; i++) {
        if (albumPhotos.photos[i].photoURL) {
          formatPhotoArr.push({ src: albumPhotos.photos[i].photoURL });
        }
      }
    }
  };
  formatPhotos(albumPhotos);

  if (!path) {
    return <LoadingComponent />;
  }

  const deleteImage = (path, filename, id) => {
    console.log({ path, filename, id });
  };

  async function handleDeleteAlbumPhoto(path, filename, id) {
    try {
      await deletePicFromFirebaseStorage(path, filename);
      await deleteAlbumPhotoFromCollection(path, id);
    } catch (error) {
      console.log(error);
    }
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

      {auth && edit && (
        <>
          <ImageDropzone path={path} />

          {albumPhotos.photos.reverse().map((image, index) => {
            return (
              <div key={index}>
                <div
                  style={{
                    width: "33.333%",
                    padding: 2,
                    boxSizing: "border-box",
                    float: "left",
                    position: "relative",
                  }}
                >
                  <img
                    alt={index}
                    src={image.photoURL}
                    style={{ width: "100%" }}
                  />
                  <button
                    className="btn btn-danger"
                    style={{
                      position: "absolute",
                      bottom: "0px",
                      right: "0px",
                      margin: 2,
                    }}
                    onClick={() => {
                      handleDeleteAlbumPhoto(path, image.filename, image.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}
      <br />
      {!edit && (
        <ResponsiveGallery
          images={formatPhotoArr.reverse()}
          useLightBox={true}
        />
      )}
    </div>
  );
};

export default Album;
