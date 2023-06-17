import { Card, Container, Row, Col } from 'react-bootstrap';
import CustomMap from '@/components/Map';

const About = () => {
  const trip = {
    'start station location': {
      coordinates: [-79.34943616, 43.79514851],
    },
    'end station location': {
      coordinates: [-79.36750352, 43.85012304],
    },
    'start station name': 'Seneca College Newnham Campus',
    'end station name': 'Seneca College Markham Campus',
  };

  return (
    <Container>
      <Row>
        <Col>
        <Card>
  <Card.Body>
    <Card.Title><strong>Seneca Polytechnic College Newnham Campus</strong></Card.Title>
    <Card.Text>
      <strong>Seneca College of Applied Arts and Technology</strong> operating as Seneca Polytechnic is a multiple-campus public
      college in the Greater Toronto Area and Peterborough, Ontario, Canada regions. It offers full-time and part-time
      programs at the baccalaureate, diploma, certificate, and graduate levels. Wikipedia
    </Card.Text>
    <Card.Text>
      <strong>Address</strong>: 1750 Finch Ave &. North York, ON M2J 2X5
    </Card.Text>
    <Card.Text>
      <strong>Phone</strong>: (416) 491-5050
    </Card.Text>
    <Card.Text>
      <strong>Undergraduate tuition and fees</strong>: 2.686 CAD, International tuition 11,970 CAD (2014-15)
    </Card.Text>
    <Card.Text>
      <strong>Total enrollment</strong>: 97,500 (2014)
    </Card.Text>
    <Card.Text>
      <strong>President</strong>: David Agnew
    </Card.Text>
    <Card.Text>
      <strong>Mascot</strong>: Sammy Sting
    </Card.Text>
    <Card.Text>
      <strong>Founded</strong>: 1967
    </Card.Text>
  </Card.Body>
</Card>
        </Col>
        <Col>
          <CustomMap trip={trip} />
        </Col>
      </Row>
    </Container>
  );
};

export default About;

