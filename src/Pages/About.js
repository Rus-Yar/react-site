import React, { Component } from 'react';
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap';
//import Tab, {Container} from 'react-bootstrap/lib/Tab'

export default class About extends Component {
  render() {
    return (
       
      <Container>
          <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
              <Row>
                  <Col sm={3}>
                      <Nav variant='pills' className='flex-column mt-2'>
                          <Nav.Item>
                              <Nav.Link eventKey='first'>Design</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey='second'>Team</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey='third'>Programming</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                          </Nav.Item>
                      </Nav>
                  </Col>
                  <Col sm={9}>
                      <Tab.Content className='mt-2'>
                          <Tab.Pane eventKey='first'>
                              <img src="https://supersklo.com.ua/wp-content/uploads/2018/05/steklyannye-peregorodki-s-raspashnymi-dveryami.jpg"/>
                              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey='second'>
                              <img src="https://supersklo.com.ua/wp-content/uploads/2018/05/steklyannye-peregorodki-s-raspashnymi-dveryami.jpg"/>
                              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey='third'>
                              <img src="https://supersklo.com.ua/wp-content/uploads/2018/05/steklyannye-peregorodki-s-raspashnymi-dveryami.jpg"/>
                              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey='fourth'>
                              <img src="https://supersklo.com.ua/wp-content/uploads/2018/05/steklyannye-peregorodki-s-raspashnymi-dveryami.jpg"/>
                              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey='fifth'>
                              <img src="https://supersklo.com.ua/wp-content/uploads/2018/05/steklyannye-peregorodki-s-raspashnymi-dveryami.jpg"/>
                              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                          </Tab.Pane>
                      </Tab.Content>
                  </Col>
              </Row>
          </Tab.Container>

      </Container>
    )
  }
}
