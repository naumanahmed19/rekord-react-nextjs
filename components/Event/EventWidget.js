import { date } from "../../helpers/Utils";
import { BaseWidget } from "..";
const EventWidget = ({ title, events }) => {
  return (
    <BaseWidget title={title}>
              <ul className="list-group list-group-flush">
        {events.map((event) => (
          <li className="list-group-item" key={event.id}>
            <div className="d-flex align-items-center ">
              <div className="col-8 ">
                <a href="video-single.html">
                  <h6>{event.title}</h6>
                </a>
                <small className="mt-1">
                  <i className="icon-placeholder-3 mr-1 "></i> {event.venue}
                </small>
              </div>
              <div className="ml-auto">
                <div className="text-lg-center  bg-primary r-10 p-2 text-white primary-bg">
                  <div className="s-18">{date(event.date, "d")}</div>
                  <small>
                    {date(event.date, "m")}, {date(event.date, "y")}
                  </small>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </BaseWidget>
  );
};
export default EventWidget;