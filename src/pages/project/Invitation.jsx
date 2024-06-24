
import { Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Invitation = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const back = () => {
    window.history.back()
  }

  return (
    <Card className="max-w-sm mx-auto mt-10 bg-gray-800">
      <Card.Header className="p-5">
        <Card.Title className="font-bold">Inviter des personnes</Card.Title>
      </Card.Header>
      <Card.Body className="p-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formInvitationEmail">
            <Form.Label >Entrer un adresse email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez l'email de votre ami"
              required
              className="w-full p-2 border rounded mt-5"
            />
          </Form.Group>
          <div className="flex justify-between mt-4">
            <Link 
            onClick={back}
             className="btn btn-secondary">
              Retour
            </Link>
            <Button variant="primary" type="submit">
              Inviter
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Invitation;
