import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = (props) => {
  return (
    <div className = "container">
      <Jumbotron fluid>
        <Container fluid>
          <h1>INTERNSHIP SIGNUP FORM</h1>
          <hr />
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
