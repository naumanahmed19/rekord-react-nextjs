const AvatarGroup = ({data}) => {
  return (
    <div className="avatar-group">
      {data.map((item,index) => (
        <figure className="avatar no-shadow" key={index}>
          <img src={item.avatar} alt="" />
        </figure>
      ))}
    </div>
  );
};

export default AvatarGroup;
