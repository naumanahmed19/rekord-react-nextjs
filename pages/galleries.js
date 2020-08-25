import React, { Component } from "react";
import { Layout, GalleryItem } from "../components";
import { photos } from "../assets/data/data";
import {CardColumns} from 'react-bootstrap'
import { LightgalleryProvider } from "react-lightgallery";

const Galleries = () => {
  return (
    <Layout
      title="Galleries"
      subtitle={
        <>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Architecto atque aut blanditiis consectetur
        </>
      }
    >
      <LightgalleryProvider>
      <CardColumns className="masonry-container">
          {photos.map((photo, idx) => (
            <GalleryItem
              key={photo.id}
              image={photo.image}
              thumb={photo.thumbnail}
              group="photo.category"
            />
          ))}
        </CardColumns>
      </LightgalleryProvider>
    </Layout>
  );
}
 
export default Galleries;
