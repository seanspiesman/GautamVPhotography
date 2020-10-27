import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageDropzone from "../ImageCropper/ImageDropzone";
import useFirestoreCollection from "../../common/hooks/useFirestoreCollection";
import {
  deleteAlbumPhotoFromCollection,
  listenToAlbumPhotosFromFirestore,
} from "../../common/firestore/firestoreService";
import { listenToPhotos } from "./redux/photoActions";
import "./album.css";

import ResponsiveGallery from "react-responsive-gallery";
import LoadingComponent from "../Loading/LoadingComponent";
import { deletePicFromFirebaseStorage } from "../../common/firestore/firebaseService";
import Navbar from "../Navbar/Navbar";

const Album = ({ title, path }) => {
  const { auth, albumPhotos, async } = useSelector((state) => state);
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

  if (!edit) {
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
  }

  if (async.loading) {
    return <LoadingComponent />;
  }

  async function handleDeleteAlbumPhoto(path, filename, id) {
    try {
      await deletePicFromFirebaseStorage(path, filename);
      await deleteAlbumPhotoFromCollection(path, id);
    } catch (error) {
      console.log(error);
    }
  }

  // if (!albumPhotos) {
  //   return <LoadingComponent />;
  // }

  const colOne = [];
  const colTwo = [];
  const colThree = [];
  const colFour = [];
  const allArray = [colOne, colTwo, colThree, colFour];
  let j = 0;

  if (albumPhotos) {
    const editGallery = () => {
      for (let i = 0; i < albumPhotos.photos.length; i++) {
        if (j === 0) {
          colOne.push(albumPhotos.photos[i]);
          j++;
        } else if (j === 1) {
          colTwo.push(albumPhotos.photos[i]);
          j++;
        } else if (j === 2) {
          colThree.push(albumPhotos.photos[i]);
          j++;
        } else if (j === 3) {
          colFour.push(albumPhotos.photos[i]);
          j = 0;
        }
      }
    };
    editGallery();
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center album-title">{title}</h1>

        {auth && edit && (
          <>
            <ImageDropzone path={path} />

            <div
              className="row"
              style={{ marginLeft: "0px", marginRight: "0px" }}
            >
              {allArray.map((item, index) => (
                <div
                  className="col-md-3"
                  key={index}
                  style={{
                    padding: 2,
                  }}
                >
                  {item.map((image, innerIndex) => {
                    return (
                      <div
                        key={innerIndex}
                        style={{
                          position: "relative",
                        }}
                      >
                        <img
                          alt={index}
                          src={image.photoURL}
                          style={{ width: "100%", paddingTop: "5px" }}
                        />
                        <button
                          className="btn btn-danger"
                          style={{
                            position: "absolute",
                            bottom: "0px",
                            right: "0px",
                            margin: "0px",
                          }}
                          onClick={() => {
                            handleDeleteAlbumPhoto(
                              path,
                              image.filename,
                              image.id
                            );
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </>
        )}
        {!edit && (
          <ResponsiveGallery images={formatPhotoArr} useLightBox={true} />
        )}
      </div>
    </>
  );
};

export default Album;
