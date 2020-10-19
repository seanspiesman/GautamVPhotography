import React from "react";
import Album from "./Album";

const C130 = ({ location }) => {
  const path = location.pathname.substring(1);
  return (
    <div>
      <div>
        <Album path={path} title={"C130"} />
      </div>
    </div>
  );
};

export default C130;
