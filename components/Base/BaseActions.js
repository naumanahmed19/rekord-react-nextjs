import React from "react";

const BaseActions = ({$className}) => {
  return (
    <div className={$className}>
      <a href="#">
        <i className="icon-bookmark s-24"></i>
      </a>
      <Like
        className="ml-3"
        likes={album.liked}
        likes={album.likes}
        size="s-24"
      />
      <a href="#">
        <i className="icon-share-1 s-24"></i>
      </a>
    </div>
  );
};

export default BaseActions;
