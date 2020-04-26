import { useRouter } from "next/router";
import Link from "next/link";
import { PlayButton, Like } from ".";
import { Component } from "react";
class Album extends Component {

  state = {  }
  // const {
  //   id,
  //   title,
  //   slug,
  //   image,
  //   artists,
  //   tracks,
  //   liked = false,
  // } = props.album;




 handleClick = () => {
  const {album} = this.props;
    router = useRouter();
    router.push(`/album/${slug}`, `/album/${album.slug} `);
  };

  content = ($classes) => {
    const {album} = this.props;
    return (
      <Link href="/album/[slug]" as={`/album/${album.slug}`}>
        <div className={$classes}>
          <h5>{album.title}</h5>
          <span>{album.artists[0].name}</span>
        </div>
      </Link>
    );
  };

  //Allow LoggedIn user - Add To Favourites
  handleLike = () => {
    const {album} = this.props;
    album.liked = !album.liked;

    this.setState({
      album: album,
    });
    console.log(album);
  };
  render(){
    const {album} = this.props;
    return (
      <div className="m-3">
        <figure>
          <div className="img-wrapper">
            <img src={album.image} alt="/" />
            <div className="img-overlay text-white">
              <div className="figcaption">
                <ul className="list-inline d-flex align-items-center justify-content-between">
                  <li className="list-inline-item">
                    <Like liked={album.liked} onClick={this.handleLike} />
                  </li>
                  <li className="list-inline-item ">
                    <PlayButton large track={album.tracks[0]} />
                  </li>
                  <li
                    className="list-inline-item clickable"
                    onClick={this.handleClick}
                  >
                    <i className="icon-more s-18 pt-3"></i>
                  </li>
                </ul>
                {this.content("text-center mt-5 clickable")}
              </div>
            </div>
            {this.content("figure-title text-center p-2")}
          </div>
        </figure>
      </div>
    );
  }
};
export default Album;
