import Link from "next/link";
import { date } from "../../helpers/Utils";
import { Animated } from "react-animated-css";
import {AvatarGroup} from '..';

const Event = ({ className, event, type = "grid" }) => {
  const event_date = event.date.split(" ");

  const details = (
    <div>
      <div>
        <div className="mr-3 float-left text-center">
          <div className="s-36">{date(event.date,'d')}</div>
          <span>{date(event.date,'m')}</span>
        </div>
        <div>
          <Link href="/event/[event.slug]" as={`/event/${event.slug}`}>
            <a><h4 className="text-primary">{event.title}</h4></a>
          </Link>
        </div>
        <small> {event.venue}</small>
        <div className="mt-2">
          <i className="icon-clock-o mr-1"> </i>
          {event.startTime}- {event.endTime}
        </div>
      </div>
      {event.artists && (
        <div className="mt-3">
          <small className="my-3">Artist Performing</small>
        </div>
      )}
      <div className="d-flex justify-content-between align-items-center my-3">
        {event.artists &&   <AvatarGroup data={event.artists}/>}
      

        <div className="ml-auto">
          <Link href="/event/[slug]" as={`/event/${event.slug}`}>
           <a> View Details</a>
          </Link>
        </div>
      </div>
    </div>
  );

  const list = (
    <div className="mb-3 card">
      <figure className="card-img figure">
        <div className="img-wrapper">
          <img className="r-3" src={event.thumbnail} alt="" />
        </div>
        <div className="img-overlay text-white">
          <div className="figcaption"></div>
        </div>
        <div className="has-bottom-gradient">
          <div className="d-flex">
            <div className="card-img-overlay">{details}</div>
          </div>
        </div>
      </figure>
      <div className="bottom-gradient"></div>
    </div>
  );

  const grid = <div className="mb-3 card p-3">{details}</div>;

  return (
    <Animated className={className} animationIn="fadeInUp" isVisible={true}>
      {type == "grid" ? grid : list}
    </Animated>
  );
};

export default Event;
