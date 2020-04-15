
import { useRouter } from "next/router";
import Link from "next/link";
import {PlayButton, Like} from "."; 
const Album = props => {
  const { id, title, slug, image, artists, tracks, liked=false } = props.album;

  const router = useRouter();

  const PostLink = props => (
    <li>
      
      <Link href="/album/[slug]" as={`/album/${slug}`}>
        {props.id}
      </Link>
      
    </li>
  );

  const handleClick = () => {
    router.push(`/album/${slug}`, `/album/${slug} `);
  };

  const content = $classes => {
    return (
      <Link href="/album/[slug]" as={`/album/${slug}`}>
      <div className={$classes} >
      
        <h5>{title}</h5>
        <span>{artists[0].name}</span>
    
      
      </div>
      </Link>
    );
  };
  //   .fav-count {
  //     background: #ff1744;
  //     color: #fff;
  //     border-radius: 50%;
  //     width: 15px;
  //     height: 15px;
  //     display: block;
  //     position: absolute;
  //     line-height: 15px;
  //     text-align: center;
  //     top: -6px;
  //     left: 17px;
  //     font-size: 9px;
  // }
  return (
    <div className="m-3">
      <figure>
        <div className="img-wrapper">
          <img src={image} alt="/" />
          <div className="img-overlay text-white">
            <div className="figcaption">
              <ul className="list-inline d-flex align-items-center justify-content-between">
                <li className="list-inline-item">
                  <Like liked={liked} />
                </li>
                <li className="list-inline-item ">
                  <PlayButton large track={tracks[0]} />
                </li>
                <li
                  className="list-inline-item clickable"
                  onClick={handleClick}
                >
                  <i className="icon-more s-18 pt-3"></i>
                </li>
              </ul>
              {content("text-center mt-5 clickable")}
            </div>
          </div>
          {content("figure-title text-center p-2")}
        </div>
      </figure>
    </div>
  );
};
export default Album;
