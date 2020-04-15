import React, { useContext } from "react";
import { PlayListContext } from "../PlaylistContext";


const AddToPlaylistButton = ({ track }) => {
    const { handleAddToPlayList } = useContext(
        PlayListContext
      );
    
  return (
    <span onClick={() => handleAddToPlayList(track)}>
      <i className="icon-add text-primary ml-3"></i>
    </span>
  );
};

export default AddToPlaylistButton;
