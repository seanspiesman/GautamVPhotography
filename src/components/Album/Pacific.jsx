import React from "react";
import Album from "./Album";

const Pacific = ({ location }) => {
  const path = location.pathname.substring(1);
  return (
    <div>
      <div>
        <Album path={path} title={"Pacific"} />
      </div>
    </div>
  );
};

export default Pacific;
