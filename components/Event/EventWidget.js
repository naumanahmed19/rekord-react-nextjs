import { date } from "../../helpers/Utils";
import { Widget } from "..";
const EventWidget = ({ title, events }) => {
  return (
    <Widget title={title}>
              <ul class="list-group list-group-flush">
        {events.map((event) => (
          <li class="list-group-item">
            <div class="d-flex align-items-center ">
              <div class="col-8 ">
                <a href="video-single.html">
                  <h6>{event.title}</h6>
                </a>
                <small class="mt-1">
                  <i class="icon-placeholder-3 mr-1 "></i> {event.venue}
                </small>
              </div>
              <div class="ml-auto">
                <div class="text-lg-center  bg-primary r-10 p-2 text-white primary-bg">
                  <div class="s-18">{date(event.date, "d")}</div>
                  <small>
                    {date(event.date, "m")}, {date(event.date, "y")}
                  </small>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Widget>
  );
};
export default EventWidget;