import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import { posts } from "../../assets/data/data";
import { Layout, Content, Comments } from "../../components";
import { Row, Col } from "react-bootstrap";
import { backgroundImage } from "../../helpers/Utils";

const Post = ({ post }) => {
  return (
    <Layout layout="full">
      <div
        className="relative xv-slide"
        data-bg-possition="top"
        style={backgroundImage(post.thumbnail)}
      >
        <div className="bottom-gradient "></div>
      </div>
      <Row>
        <Col lg={{ span: 8, offset: 2 }} className="p-3">
          <div className="my-5 d-flex align-items-center">
            <div className="d-flex align-items-center">
              <figure className="avatar avatar-md float-left mr-3 mt-1">
                <img src={post.author.avatar} alt="" />
              </figure>
              <div>
                <h6>{post.author.name}</h6>
                {post.author.email}
              </div>
            </div>
            <div className="ml-auto s-plugins">
              <a
                href="#"
                className="snackbar ml-3"
                data-text="Added to favourites"
                data-pos="top-right"
                data-showAction="true"
                data-actionText="ok"
                data-actionTextColor="#fff"
                data-backgroundColor="#0c101b"
              >
                <i className="icon-bookmark s-24"></i>
              </a>
              <a
                href="#"
                className="snackbar ml-3"
                data-text="Added to favourites"
                data-pos="top-right"
                data-showAction="true"
                data-actionText="ok"
                data-actionTextColor="#fff"
                data-backgroundColor="#0c101b"
              >
                <i className="icon-heart s-24"></i>
              </a>
              <a
                href="#"
                className="snackbar ml-3"
                data-text="Added to favourites"
                data-pos="top-right"
                data-showAction="true"
                data-actionText="ok"
                data-actionTextColor="#fff"
                data-backgroundColor="#0c101b"
              >
                <i className="icon-share-1 s-24"></i>
              </a>
            </div>
          </div>
          <article>
            <h1 className="font-weight-lighter">{post.title}</h1>

            <div className="cardx video-responsive">
              <Content className="my-5" content={post.content} />
            </div>
          </article>

          <Comments comments={post.comments} />
        </Col>
      </Row>
    </Layout>
  );
};

Post.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;
  console.log(slug);

  const post = posts.filter((post) => post.slug == slug)[0];

  console.log(post);
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const json = await res.json()
  return { post };
};

export default Post;
