import React from "react";

const Empty = ({ name }) => {
  return (
    <div className="emptyContainer">
      <h6>{name} list is empty.</h6>
    </div>
  );
};

export default Empty;
