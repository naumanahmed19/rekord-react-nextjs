
import { useRouter } from "next/router";
import Link from "next/link";
import {PlayButton, Like} from "."; 

const Album = props => {
  const { id, title, slug, image, artists, tracks, liked=false,likes } = props.album;

  const router = useRouter();

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
  return (
    <div className="mr-3">
      <figure>
        <div className="img-wrapper">
          <img src={image} alt="/" />
          <div className="img-overlay text-white">
            <div className="figcaption">
              <ul className="list-inline d-flex align-items-center justify-content-between">
                <li className="list-inline-item">
                  <Like liked={liked} likes={likes} />
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
