
import { LightgalleryItem } from "react-lightgallery";
import {Card} from 'react-bootstrap'
const GalleryItem = ({ image, thumb, group }) => (
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
  export default GalleryItem;