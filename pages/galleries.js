import React, { Component } from "react";
import { Layout, Gallery } from "../components";
import { photos } from "../assets/data/data";
import { LightgalleryItem } from "react-lightgallery";
import { LightgalleryProvider } from "react-lightgallery";
import {Card,CardColumns} from 'react-bootstrap'

const PhotoItem = ({ image, thumb, group }) => (
  <Card className="column masonry-post type2 type6">
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <figure>
        <div className="img-wrapper">
          <img src={thumb} style={{ width: "100%" }} />
          <div className="img-overlay figure-caption text-white">
            <div className="figcaption d-flex justify-content-around mt-2">
              <i className="icon-zoom-in s-48"></i>

              <a href="#">
                <i className="icon-share-1 s-48"></i>
              </a>
            </div>
          </div>
        </div>
      </figure>
      <Card.Body>
      <Card.Title>Card title</Card.Title>
  
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
    </LightgalleryItem>
  </Card>
);
// PhotoItem.propTypes = {
//   image: PT.string.isRequired,
//   thumb: PT.string,
//   group: PT.string.isRequired
// };
class Galleries extends Component {
  render() {
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
              <PhotoItem
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
}

export default Galleries;
