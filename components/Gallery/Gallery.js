import { LightgalleryItem } from "react-lightgallery";
 
const Gallery = ({ image, url, title }) => {
  return (

    <div>
     <p>this working great </p>
    <LightgalleryItem group="any" src={image}>
    <a href={url}>
        <img src={image} />
        <ItemTitle>
            <LinesEllipsis
                text={title}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
            />
        </ItemTitle>
    </a>
</LightgalleryItem>
      </div>


 
  );
};

export default Gallery;
