import React from "react";
import Album from "./Album";
import "./album.css";

const Alaska = ({ location }) => {
  const path = location.pathname.substring(1);
  return (
    <div>
      <Album path={path} title={"Alaska"} />
    </div>
  );
};

export default Alaska;
