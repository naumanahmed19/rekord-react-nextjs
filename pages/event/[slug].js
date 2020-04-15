import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

import { events } from "../../assets/data/data";
import { html } from "../../helpers/Utils";

import { TrackList, Layout, Content } from "../../components";
import { backgroundImage } from "../../helpers/Utils";
import GoogleMapReact from "google-map-react";
import Countdown from "react-countdown";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Event = ({ event }) => {
  const router = useRouter();
  //   const { id } = router.query;
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  const mapStyles = [
    {
      featureType: "all",
      stylers: [
        {
          saturation: -100,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          hue: "#131722",
        },
        {
          saturation: 50,
        },
      ],
    },
    {
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ];
  const mapOptions = {
    styles: mapStyles,
    scrollwheel: false,
    draggable: false,
    mapTypeControl: false,
  };

  const Completionist = () => <span>This Event is now in progress!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, days, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="countDown text-white" data-date="2019/03/04">
          <div className="bg-primary">
            <span className="days">{days}</span>
            <span className="count-type">Days</span>
          </div>
          <div className="bg-primary">
            <span className="hours">{hours}</span>
            <span className="count-type">Hours</span>
          </div>
          <div className="bg-primary">
            <span className="minutes">{minutes}</span>
            <span className="count-type">Minutes</span>
          </div>
          <div className="bg-primary">
            <span className="seconds">{seconds}</span>
            <span className="count-type">Seconds</span>
          </div>
        </div>
      );
    }
  };

  return (
    <Layout layout="full">
      <div className="row grid">
        <div className="col-md-7">
          <div className="p-5 ">
            <div
              className="scrollable"
            >
              <div className="mb-5 theme-text">
                <h1 className="mb-2">{event.title}</h1>
                <div className="d-flex align-items-center mt-4">
                  <div>
                    <i className="icon-placeholder-3 mr-1"></i>
                    <span>{event.venue}</span>
                  </div>
                  <div className="ml-3">
                    <i className="icon-clock mr-2"></i>{" "}
                    <span>
                      {event.date} {event.startTime}
                    </span>
                  </div>
                </div>
              </div>
              <Countdown date={new Date(event.date)} renderer={renderer} />,
              <div className="pt-3">
                <a
                  href="events-single.html"
                  className="btn  btn-lg r-0 btn-outline-primary"
                >
                  Buy Tickets Now
                </a>
              </div>
              <Content className="my-5" content={event.content} />
              <div className="relative my-5">
                <h3 className="mb-2 text-primary">Performers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
              <div className="row">
                {event.artists.map((artist) => (
                  <div className="col-md-4 my-3">
                    <div className="text-center">
                      <figure className="avatar avatar-xl">
                        <img src={artist.avatar} alt="" />
                      </figure>
                      <a href="events-single.html">
                        <div className="my-1"> {artist.name}</div>
                      </a>
                      <div> {artist.role}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-5 m-5"></div>
            </div>
          </div>
        </div>
        <div className="col-md-5 height-full">
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyC3YkZNNySdyR87o83QEHWglHfHD_PZqiw",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              options={mapOptions}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Event.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;

  const event = events.filter((event) => event.slug == slug)[0];

  console.log(event);
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const json = await res.json()
  return { event };
};

export default Event;
