const Commnet = ({ comment }) => {
  const commentTemplate =comment => (
    <li className="media my-5 ">
      <div className="avatar avatar-md mr-3 mt-1">
        <img src={comment.user.avatar} alt="" />
      </div>

      <div className="media-body">
        <h6 className="mt-0">{comment.user.name}</h6>
        {comment.content}

        <ul className="p-0">
          {comment.replies &&
            comment.replies.map((comment) => commentTemplate(comment))}
        </ul>
      </div>
    </li>
  );
  return <React.Fragment>{commentTemplate(comment)}</React.Fragment>;
};

export default Commnet;
