import React from "react";
import Album from "./Album";

const Alaska = ({ location }) => {
  const path = location.pathname.substring(1);
  return (
    <div>
      <div>
        <Album path={path} title={"Alaska"} />
      </div>
    </div>
  );
};

export default Alaska;
