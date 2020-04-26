import { Layout, Post, Sidebar } from "../components";
import { Row, Col } from "react-bootstrap";
import { posts } from "../assets/data/data";

const Posts = ({ posts }) => {
  return (
    <Layout
      title="Blog"
      subtitle={
        <>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Architecto atque aut blanditiis consectetur
        </>
      }
    >
      <Row>
        <Col md={8}>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </Col>
        <Col md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Layout>
  );
};

Posts.getInitialProps = async (ctx) => {
  // Make fetch request here...
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const posts = await res.json()

  return { posts };
};

export default Posts;
