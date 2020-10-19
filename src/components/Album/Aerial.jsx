import React from "react";
import Album from "./Album";

const Aerial = ({ location }) => {
  const path = location.pathname.substring(1);
  return (
    <div>
      <div>
        <Album path={path} title={"Aerial"} />
      </div>
    </div>
  );
};

export default Aerial;
