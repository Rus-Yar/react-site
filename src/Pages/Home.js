import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import {Container, Row, Card, Button} from 'react-bootstrap'

export default class Home extends Component {
  render() {
    return (
      <>
      <CarouselBox/>
      <Container>
        <h2 className='text-center m-4'>Our team</h2>
          <Row md={3}  >
            <Card bg='info' text='primary' border='success'>
              <Card.Img
                variant='top'
                src='https://media.istockphoto.com/photos/lady-with-kayak-picture-id520984558?k=20&m=520984558&s=612x612&w=0&h=2mCQbTmxizfUKeL-kSgEpBSot4QAGDjzPBtpMSed5OQ='
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
              </Card.Body>
              <Card.Text>
                lorem dgfds gdd ggd dgdgd dgdgd dgd dgd
              </Card.Text>
              <Button variant='primary'>About team</Button>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Developers</Card.Title>
              </Card.Body>
              <Card.Text>
                lorem dgfds gdd ggd dgdgd dgdgd dgd dgd
              </Card.Text>
              <Card.Img
                variant='bottom'
                src='https://media.istockphoto.com/photos/lady-with-kayak-picture-id520984558?k=20&m=520984558&s=612x612&w=0&h=2mCQbTmxizfUKeL-kSgEpBSot4QAGDjzPBtpMSed5OQ='
              />
              <Button variant='primary'>About team</Button>
            </Card>

            <Card>
              <Card.Img
                variant='top'
                src='https://media.istockphoto.com/photos/lady-with-kayak-picture-id520984558?k=20&m=520984558&s=612x612&w=0&h=2mCQbTmxizfUKeL-kSgEpBSot4QAGDjzPBtpMSed5OQ='
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
              </Card.Body>
              <Card.Text>
                lorem dgfds gdd ggd dgdgd dgdgd dgd dgd
              </Card.Text>
              <Button variant='primary'>About team</Button>
            </Card>
          </Row>
      </Container>
      </>
    );
  }
}
