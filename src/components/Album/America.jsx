import React from "react";
import Album from "./Album";

const America = ({ location }) => {
  const path = location.pathname.substring(1);
  return (
    <div>
      <div>
        <Album path={path} title={"America"} />
      </div>
    </div>
  );
};

export default America;
