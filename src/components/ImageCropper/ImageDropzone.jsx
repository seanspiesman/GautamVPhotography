import cuid from "cuid";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { getFileExtension } from "../../common/util/util";
import "./image-dropzone.css";
import ImageCropper from "./ImageCropper";
import {
  addPhotoToFirestore,
  updateBlogPhoto,
} from "../../common/firestore/firestoreService";
import {
  // deletePicFromFirebaseStorage,
  uploadPicToFirebaseStorage,
} from "../../common/firestore/firebaseService";

function ImageDropzone({ post, path }) {
  const uploadStyles = {
    height: 250,
    border: "dashed 3px white",
    borderRadius: "5px",
    padding: "5px",
    textAlign: "center",
  };
  const uploading = {
    height: 250,
    border: "dashed 3px green",
    borderRadius: "5px",
    padding: "5px",
    textAlign: "center",
  };

  var postId;
  if (post && post.id) {
    postId = post.id;
  }

  const [image, setImage] = useState(null);

  const [files, setFiles] = useState([]);

  const [loading, setLoading] = useState(false);

  function handleCancelCrop() {
    setFiles([]);
    setImage(null);
  }

  function handleUploadImageToBlog() {
    setLoading(true);
    const filename = cuid() + "." + getFileExtension(files[0].name);
    const uploadTask = uploadPicToFirebaseStorage(
      path,
      image,
      filename,
      postId
    );
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          if (postId) {
            updateBlogPhoto(downloadURL, filename, postId, path, post)
              .then((results) => {
                console.log(results.data());
                setLoading(false);
                handleCancelCrop();
              })
              .catch((error) => {
                setLoading(false);
                handleCancelCrop();
              });
          } else {
            addPhotoToFirestore(downloadURL, filename, path)
              .then((results) => {
                console.log(results.data());
                setLoading(false);
                handleCancelCrop();
              })
              .catch((error) => {
                setLoading(false);
                handleCancelCrop();
              });
          }
        });
      }
    );
  }

  // async function handleDeletePhoto(filename, postId) {
  //   try {
  // await deletePicFromFirebaseStorage(filename, postId);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [setFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="container">
      <div
        className={`row upload`}
        style={{ color: "white", border: "2px solid white", height: 300 }}
      >
        <div className="col-md-4">
          <h4 className="text-center">Add Photo</h4>
          <div
            {...getRootProps()}
            style={isDragActive ? uploading : uploadStyles}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <svg
                style={{ margin: 60 }}
                width="8em"
                height="8em"
                viewBox="0 0 16 16"
                className="bi bi-cloud-upload-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z"
                />
              </svg>
            ) : (
              <svg
                style={{ margin: 60 }}
                width="8em"
                height="8em"
                viewBox="0 0 16 16"
                className="bi bi-cloud-upload"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                />
              </svg>
            )}
          </div>
        </div>

        <div className="col-md-4">
          <h4 className="text-center"> Crop Photo</h4>
          {files.length > 0 && (
            <ImageCropper setImage={setImage} imagePreview={files[0].preview} />
          )}
        </div>

        <div className="col-md-4">
          <h4 className="text-center"> Preview</h4>
          <div
            className="img-preview"
            style={{
              height: 200,
              width: "100%",
              overflow: "hidden",
              margin: "auto",
            }}
          />
          {files.length > 0 && (
            <div className="text-center">
              <button
                className="btn btn-success"
                // className="upload-image-button"
                onClick={handleUploadImageToBlog}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 15 15"
                  className="bi bi-check"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                  />
                </svg>
              </button>
              <button
                className="btn btn-light"
                // className="cancel-upload-image-button"
                onClick={handleCancelCrop}
                disabled={loading}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 15 15"
                  className="bi bi-x"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageDropzone;
