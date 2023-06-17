import React from 'react';
import { Card } from 'react-bootstrap';

const PageHeader = ({ title, text, showSubscriber, showCustomer }) => {
  return (
    <div>
      <Card className="bg-light">
        <Card.Body>
          <h3>{title}</h3>
          <p>{text}</p>
          <div className="float-end">
          {showSubscriber && <button className="Subscriber">Subscriber</button>}
          {showCustomer && <button className="Customer">Customer</button>}
          </div>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default PageHeader;
