import { Card } from "react-bootstrap";
import { Content } from "..";
import Link from "next/link";
import { Animated } from "react-animated-css";
const Post = ({ post }) => {
  const post_date = post.date.split(" ");

  return (
    <Animated animationIn="fadeInUp" isVisible={true}>
      <Card className="mb-3">
        <div className="p-3">
          <div className="d-md-flex align-items-center">
            <div className="mr-3 ml-md-4 text-md-center">
              <div className="s-24">{post_date[0]}</div>
              <small>
                {post_date[1]} {post_date[2]}
              </small>
            </div>
            <div>
              <a href="blog-single.html">
                <h2 className="font-weight-lighter h3 my-3 text-primary">
                  {post.title}
                </h2>
              </a>
              <ul className="align-baseline list-inline">
                <li className="list-inline-item">
                  <i className="icon-folder text-primary mr-2"></i>
                  {post.category}
                </li>
                <li className="list-inline-item">
                  <i className="icon-list-1 text-primary mr-2"></i>
                  {post.comments.length} Comments
                </li>
              </ul>
            </div>
          </div>
        </div>
        <figure className="mb-3">
          <img src={post.thumbnail} alt="" />
        </figure>
        <Card.Body className="p-4">
          <Content className="mb-3" content={post.excerpt} />
          <div className="d-flex align-items-center mt-4">
            <div>
              <div className="avatar avatar-sm mr-2">
                {<img src={post.author.avatar} alt="" />}
              </div>
              {post.author.name}
            </div>
            <Link href="/post/[slug]" as={`/post/${post.slug}`}>
              <a className="ml-auto">
                <i className="icon icon-link mr-2 "></i>Read More
              </a>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Animated>
  );
};

export default Post;
