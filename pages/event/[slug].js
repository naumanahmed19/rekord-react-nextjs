
import { events } from "../../assets/data/data";
import { Layout, Content } from "../../components";
import GoogleMapReact from "google-map-react";
import Countdown from "react-countdown";
import { configure } from "nprogress";
import { GOOGLE_API_KEY } from '../../config/Config'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Event = ({ event }) => {
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
    <div>
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: GOOGLE_API_KEY,
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

      <Layout>
        <div className="row grid">
          <div className="col-md-7">
            <div className="p-5 ">
              <div>
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
            <Countdown date={new Date(event.date)} renderer={renderer} />
            <div className="pt-3">
              <a
                href="events-single.html"
                className="btn  btn-lg r-0 btn-outline-primary"
              >
                Buy Tickets Now
                </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

Event.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;
  const event = events.filter((event) => event.slug == slug)[0];
  return { event };
};

export default Event;
