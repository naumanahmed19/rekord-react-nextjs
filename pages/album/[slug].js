import React, { useContext } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

import { albums } from "../../assets/data/data";
import { html } from "../../helpers/Utils";

import { Layout, TrackList,Like } from "../../components";
import { backgroundImage } from "../../helpers/Utils";
import { PlayListContext } from "../../components/PlaylistContext";

const Album = ({ album }) => {

  const { handlePlayAll} = useContext(PlayListContext);

  return (
    <Layout layout="full">
      <section
        className="relative"
        style={album.cover && backgroundImage(album.cover)}
      >
        
        <div className="has-bottom-gradient">
          <div className="row pt-5 ml-lg-5 mr-lg-5">
            <div className="col-md-10 offset-1">
              <div className="row my-5 pt-5">
                <div className="col-xl-2 col-md-3">
                  <img src={album.image} alt="/" />
                </div>
                <div className="col-md-9">
                  <div className="d-md-flex align-items-center justify-content-between">
                    <h1 className="my-3 text-white ">{album.title}</h1>
                    <div className="ml-auto mb-2">
                      <a
                        href="#"
                      >
                        <i className="icon-bookmark s-24"></i>
                      </a>
                      <Like className="ml-3" likes={album.liked} likes={album.likes} size="s-24"/>
                      <a
                        href="#"
                      >
                        <i className="icon-share-1 s-24"></i>
                      </a>
                    </div>
                  </div>

                  <div
                    className="text-white my-2"
                    dangerouslySetInnerHTML={html(album.subtitle)}
                  />
                  <div className="pt-3">
                  <button  className="btn btn-primary btn-lg mr-3 btn-line" onClick={()=>handlePlayAll(album.tracks)}>
                      <i className="icon-play mr-2"></i>
                      Play All
                    </button>
                    <a href={album.btnUrl} className="btn btn-primary btn-lg">
                      {album.btnLabel}
                    </a>

          
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-gradient "></div>
      </section>
      <div className="p-3 p-lg-5">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              <div className="offset-xl-2 offset-lg-3 col-md-9">
                <TrackList tracks={album.tracks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Album.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;

  const album = albums.filter((album) => album.slug == slug)[0];

  console.log(album);
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const json = await res.json()
  return { album };
};

export default Album;
