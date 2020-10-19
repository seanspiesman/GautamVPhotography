import React from "react";
// import Sandbox from "../sandbox/Sandbox";
import Album from "./Album";

const Japan = ({ location }) => {
  const path = location.pathname.substring(1);
  return (
    <div>
      <div>
        <Album path={path} title={"Japan"} />
      </div>
    </div>
  );
};

export default Japan;
