const Artist = ({ artist }) => {
  return (
    <div>
      <figure className="avatar avatar-md float-left mr-3 mt-1">
        <img src={artist.avatar} alt="" />
      </figure>
      <div>
        <h6>{artist.name}</h6>{artist.albums} Albums
      </div>
    </div>
  );
};

export default Artist;
