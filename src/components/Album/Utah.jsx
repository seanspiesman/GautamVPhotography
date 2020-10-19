import React from "react";
import Album from "./Album";

const Utah = ({ location }) => {
  const path = location.pathname.substring(1);
  return (
    <div>
      <div>
        <Album path={path} title={"Utah"} />
      </div>
    </div>
  );
};

export default Utah;
