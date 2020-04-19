import { VideoWidget, EventWidget, TrackWidget } from ".";
import { posts, videos, events, tracks } from "../assets/data/data";

const Sidebar = () => {
  return (
    <React.Fragment>
      <VideoWidget title="Recommended Videos" videos={videos.slice(1, 5)} />
      <EventWidget title="Latest Events" events={events.slice(1, 4)} />
      <TrackWidget title="Latest Tracks" tracks={tracks.slice(1, 4)} />
    </React.Fragment>
  );
};

export default Sidebar;
