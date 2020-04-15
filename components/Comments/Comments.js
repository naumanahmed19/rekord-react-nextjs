import CommentForm from "./CommentsForm";
import Comment from "./Comment";
const Comments = ({ comments }) => {
  return (
    <div>
      <h3>
        <i class="icon-list-1 s-24 text-primary mr-3"></i>
        {comments.length} Comments
      </h3>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}

      <hr />
      <div className="post-comments my-5">
        <div>
          <CommentForm />
        </div>
      </div>
    </div>
  );
};

export default Comments;
