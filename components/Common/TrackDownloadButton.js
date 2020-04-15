const TrackDownloadButton = ({ path ,name}) => {

  return (
    <a href={path} download>
      <i className="icon-download"></i>
    </a>
  );
};

export default TrackDownloadButton;
