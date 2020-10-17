import React, { useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export const ImageCropper = ({ imagePreview, setImage }) => {
  const cropperRef = useRef(null);

  function cropImage() {
    if (typeof cropperRef.current.getCroppedCanvas() === "undefined") {
      return;
    }
    cropperRef.current.getCroppedCanvas().toBlob((blob) => {
      setImage(blob);
    }, "image/jpeg");
  }

  return (
    <div>
      <div style={{ width: "100%" }}>
        <Cropper
          ref={cropperRef}
          style={{ height: 250, width: "100%" }}
          preview=".img-preview"
          src={imagePreview}
          viewMode={1}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false}
          crop={cropImage}
        />
      </div>
    </div>
  );
};

export default ImageCropper;
