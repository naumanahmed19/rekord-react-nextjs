import { PlayButton, AvatarGroup,TrackDownloadButton, ShareButton } from "..";

const Podcast = ({ className, podcast }) => {
  return (
    <div className={className}>
      <div className="card mb-3">
        <div className="card-body">
          <div className=" d-flex align-items-center">
            <div className="col-8 p-0">
              <div className="float-left mr-3 mt-2">
                <PlayButton track={podcast.url} primary small />
              </div>
              <h6 className="text-primary">{podcast.title}</h6>
              <small>Episode 1 - April 26, 2019 </small>
            </div>
            <span className=" ml-auto">{podcast.time}</span>
            <div className="relative ml-3">
              <TrackDownloadButton path={podcast.url} name={podcast.title} />
            </div>
          </div>
          <div className="d-flex align-items-center mt-4">
            <div className=" d-none d-lg-block">
              <div className="mt-3">
                {podcast.artists && <AvatarGroup data={podcast.artists} />}
              </div>
            </div>

            <ShareButton />
            <div className="relative ml-auto mt-3">
              <a href="#" className="ml-3 sharer">
                <i className="icon-share-1 s-24"></i>
              </a>
              <div className="sharer-bar d-flex justify-content-around">
                <a
                  href="#"
                  className="social_share no-ajaxy"
                  data-title="Podcasts Home"
                  data-url="
http://xvelopers.com/wp/themes/rekord/podcasts-home/"
                  data-image=""
                  data-type="fb"
                  data-fb-api-id="288785018619405"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="social_share no-ajaxy"
                  data-title="Podcasts Home"
                  data-url="
http://xvelopers.com/wp/themes/rekord/podcasts-home/"
                  data-image=""
                  data-type="tw"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="social_share no-ajaxy"
                  data-title="Podcasts Home"
                  data-url="
http://xvelopers.com/wp/themes/rekord/podcasts-home/"
                  data-image=""
                  data-type="whatsapp"
                >
                  <i className="fa fa-whatsapp"></i>
                </a>
                <a
                  href="#"
                  className="social_share no-ajaxy"
                  data-title="Podcasts Home"
                  data-url="
http://xvelopers.com/wp/themes/rekord/podcasts-home/"
                  data-image=""
                  data-type="email"
                >
                  <i className="fa fa-envelope-o"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Podcast;
