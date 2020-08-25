import React from "react";
import {Layout, Album} from "../components";
import { albums } from "../assets/data/data";

const Albums = () => {
  return (
    <Layout
      title="Albums"
      subtitle={
        <>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
          Architecto atque aut blanditiis consectetur
        </>
      }
    >
      <div className="row has-items-overlay">
        {albums.map(album => (
          <Album album={album} key={album.id} />
        ))}
      </div>
    </Layout>
  );
}

export default Albums;
