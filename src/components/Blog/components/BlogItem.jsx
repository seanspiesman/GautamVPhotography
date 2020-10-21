import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
// import { array } from "yup";
import { deletePicFromFirebaseStorage } from "../../../common/firestore/firebaseService";
import { deletePostInFirestore } from "../../../common/firestore/firestoreService";

const BlogItem = ({ post, edit }) => {
  const { title, description, id, photoArray } = post;
  let postDate = format(post.date, "PPPPpppp");

  async function handleDeletePost(path, id, photoArray) {
    try {
      let filename;
      for (let photo of photoArray) {
        filename = photo.filename;
        await deletePicFromFirebaseStorage(path, filename, id);
      }
      await deletePostInFirestore(id);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="blog-post">
        <h1 className="blog-post-title">
          {title}
          <div style={{ fontSize: "12px" }} className="text-muted">
            {postDate}
          </div>
        </h1>
        <div className="row">
          <div className="col-md-12">
            <p className="blog-post-text">{description}</p>
          </div>
          {photoArray && photoArray[0] && (
            <>
              <div className="col-md-3"></div>
              <div className="col-md-6 text-center">
                <div
                  id={`carousel${id}`}
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        style={{ height: "300px" }}
                        src={photoArray[0].downloadURL}
                        alt="First slide"
                      />
                    </div>
                    {photoArray[1] && (
                      <div className="carousel-item">
                        <img
                          style={{ height: "300px" }}
                          src={photoArray[1].downloadURL}
                          alt="Second slide"
                        />
                      </div>
                    )}
                    {photoArray[2] && (
                      <div className="carousel-item">
                        <img
                          style={{ height: "300px" }}
                          src={photoArray[2].downloadURL}
                          alt="Third slide"
                        />
                      </div>
                    )}
                    {photoArray[3] && (
                      <div className="carousel-item">
                        <img
                          style={{ height: "300px" }}
                          src={photoArray[3].downloadURL}
                          alt="Fourth slide"
                        />
                      </div>
                    )}
                    {photoArray[4] && (
                      <div className="carousel-item">
                        <img
                          style={{ height: "300px" }}
                          src={photoArray[4].downloadURL}
                          alt="Fifth slide"
                        />
                      </div>
                    )}
                    {photoArray[5] && (
                      <div className="carousel-item">
                        <img
                          style={{ height: "300px" }}
                          src={photoArray[5].downloadURL}
                          alt="Sixth slide"
                        />
                      </div>
                    )}
                    {photoArray[6] && (
                      <div className="carousel-item">
                        <img
                          style={{ height: "300px" }}
                          src={photoArray[6].downloadURL}
                          alt="Seventh slide"
                        />
                      </div>
                    )}
                  </div>
                </div>
                {photoArray[1] && (
                  <>
                    <a
                      className="carousel-control-prev"
                      href={`#carousel${id}`}
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href={`#carousel${id}`}
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </>
                )}
                <br />
              </div>
              <div className="col-md-3"></div>
            </>
          )}
          {edit && (
            <>
              <div className="col-md-12">
                <div className="text-right">
                  <button
                    onClick={() => {
                      handleDeletePost("Blog", id, photoArray);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>{" "}
                  <Link
                    className="btn btn-primary"
                    as={Link}
                    to={`/ManagePost/${id}`}
                  >
                    Update
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <br />
    </>
  );
};

export default BlogItem;
