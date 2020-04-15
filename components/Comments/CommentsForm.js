import { Form, Row, Col, Card, Button } from "react-bootstrap";
const CommentsForm = () => {
  return (
    <Card>
      <Card.Body className="p-5">
        <Form className="form-material">
          <Row>
            <Col md={6}>
              <Form.Group controlId="name" className="form-line">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="email" className="form-line">
                <Form.Control type="text" placeholder="Email" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="email" className="form-line">
            <Form.Control as="textarea" rows="5" placeholder="Message" />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Post Comment
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CommentsForm;
