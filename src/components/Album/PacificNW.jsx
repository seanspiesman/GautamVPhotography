import React from "react";
import Album from "./Album";

const PacificNW = ({ location }) => {
  const path = location.pathname.substring(1);
  return (
    <div>
      <div>
        <Album path={path} title={"Pacific NW"} />
      </div>
    </div>
  );
};

export default PacificNW;
