import React from "react";
import Album from "./Album";

const India = ({ location }) => {
  const path = location.pathname.substring(1);
  return (
    <div>
      <div>
        <Album path={path} title={"India"} />
      </div>
    </div>
  );
};

export default India;
