import Link from "next/link";
import { Content } from "..";

const AutorPostType = ({ post }) => {
  return (
    <div>
      <div className="card-body">
        <h5 className="card-title text-truncate">
          <Link href="/post/[slug]" as={`/post/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </h5>
        <Content className="mb-3" content={post.excerpt} length={150} />
      </div>

      <div className="p-3 d-none d-lg-block">
        <figure className="avatar avatar-md float-left mr-3 mt-1">
          <img
            alt=""
            src={post.author.avatar}
            className="avatar avatar-50 photo circle"
            height="50"
            width="50"
          />
        </figure>
        <div>
          <h6> {post.author.name}</h6>
          {post.author.email}
        </div>
      </div>
    </div>
  );
};

const VideoPostType = ({ post }) => {
  return (
    <Link href="/post/[slug]" as={`/post/${post.slug}`}>
      <a>
        <div className="card  mr-2 r-5">
          <figure className="card-img figure">
            <div className="img-wrapper">
              <img src={post.thumbnail} height="250" alt="" />
            </div>
            <div className="img-overlay text-white">
              <div className="figcaption"></div>
            </div>
            <div className="has-bottom-gradient">
              <div className="d-flex">
                <div className="card-img-overlay">
                  <div className="pt-3 pb-3">
                    <figure className="float-left mr-3 mt-1">
                      <i className="icon-play s-36"></i>
                    </figure>
                    <div>
                      <h5>{post.title}</h5>
                      <small>{post.comments.length} comments</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>
          <div className="bottom-gradient bottom-gradient-thumbnail"></div>
        </div>
      </a>
    </Link>
  );
};
const PostWidget = ({ post }) => {
  return (
    <div>
      {post.type && post.type == "video" ? (
        <VideoPostType post={post} />
      ) : (
        <AutorPostType post={post} />
      )}
    </div>
  );
};

export default PostWidget;
