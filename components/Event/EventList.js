import {Event} from '..';

const EventList = ({events}) => {
  return (
    <React.Fragment>
         {events.map(event => (
          <Event event={event} key={event.id} />
        ))}
    </React.Fragment>
  );
};

export default EventList;
