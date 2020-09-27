import React from "react";
import Gallery from "react-photo-gallery";

const Album = ({ title, photoset }) => {
  return (
    <div className="container">
      <h4
        className="text-center"
        style={{ fontFamily: '"Shadows Into Light", cursive' }}
      >
        {title}
      </h4>
      <Gallery photos={photoset} />
    </div>
  );
};

export default Album;
