import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

const MainNav = () => {
  return (
    <div>
      <Navbar className="fixed-top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand>New York Citibike Trips</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Full List</Nav.Link>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link>About</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </div>
  );
};

export default MainNav;
