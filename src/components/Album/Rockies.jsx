import React from "react";
import Album from "./Album";

const Rockies = ({ location }) => {
  const path = location.pathname.substring(1);
  return (
    <div>
      <div>
        <Album path={path} title={"Rocky Mountains"} />
      </div>
    </div>
  );
};

export default Rockies;
