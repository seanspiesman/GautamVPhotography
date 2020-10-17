import React from "react";
import Album from "./Album";

const Adventure = (props) => {
  const path = props.location.pathname.substring(1);
  return (
    <div>
      <div>
        <Album path={path} title={"Alaska"} />
      </div>
    </div>
  );
};

export default Adventure;
