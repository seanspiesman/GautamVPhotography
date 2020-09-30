import React from "react";
import ResponsiveGallery from "react-responsive-gallery";

const Album = ({ title, images }) => {
  return (
    <div className="container">
      <h3
        className="text-center"
        style={{ fontFamily: '"Shadows Into Light", cursive', color: "white" }}
      >
        {title}
      </h3>
      <ResponsiveGallery images={images} useLightBox={true} />{" "}
    </div>
  );
};

export default Album;
