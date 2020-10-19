import React from "react";
import Album from "./Album";

const WestUS = ({ location }) => {
  const path = location.pathname.substring(1);
  return (
    <div>
      <div>
        <Album path={path} title={"West US"} />
      </div>
    </div>
  );
};

export default WestUS;
