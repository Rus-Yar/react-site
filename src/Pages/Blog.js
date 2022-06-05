import React, { Component } from 'react';
import {Container, Row, Col, ListGroup, Card} from 'react-bootstrap'

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md='9'>
            <div class="d-flex align-items-center my-5">
              <div class="flex-shrink-0">
                <img src='https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' height="100"/>
              </div>
                <div class="flex-grow-1 ms-3">
                  <h5>Blog post</h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur
                  </p>
              </div>
            </div>  

            <div class="d-flex align-items-center my-5">
              <div class="flex-shrink-0">
                <img src='https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' height="100"/>
              </div>
                <div class="flex-grow-1 ms-3">
                  <h5>Blog post</h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur
                  </p>
              </div>
            </div>  

            <div class="d-flex align-items-center my-5">
              <div class="flex-shrink-0">
                <img src='https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' height="100"/>
              </div>
                <div class="flex-grow-1 ms-3">
                  <h5>Blog post</h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur
                  </p>
              </div>
            </div>  

            <div class="d-flex align-items-center my-5">
              <div class="flex-shrink-0">
                <img src='https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' height="100"/>
              </div>
                <div class="flex-grow-1 ms-3">
                  <h5>Blog post</h5>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </div>
            </div>  
          </Col>
          <Col md='3'>
            <h5 className='text-center mt-5'>Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>Html/Css</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className='mt-3' bg='light'>
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

