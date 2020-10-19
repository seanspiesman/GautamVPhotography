import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import { deletePostInFirestore } from "../../../common/firestore/firestoreService";

const slide = [
  "First slide",
  "Second slide",
  "Third slide",
  "Fourth slide",
  "Fifth slide",
  "Sixth slide",
  "Seventh slide",
];
const BlogItem = ({ post, edit }) => {
  const { title, description, id, photoArray } = post;
  let postDate = format(post.date, "PPPPpppp");
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
              <div className="col-md-12 text-center">
                <div
                  id="carouselExampleControls"
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
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
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
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
                <br />
              </div>
            </>
          )}
          {edit && (
            <>
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="text-right">
                  <button
                    onClick={() => deletePostInFirestore(id)}
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
              <div className="col-md-3"></div>
            </>
          )}
        </div>
      </div>
      <br />
    </>
  );
};

export default BlogItem;
