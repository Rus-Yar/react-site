import React, { Component } from 'react';
import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import DushOne from '../assets/pexels-curtis-adams-3990586.jpg';
import DushTwo from '../assets/pexels-curtis-adams-4800174.jpg';

export default class CarouselBox extends Component {
  render() {
    return (
      <div>
        <Carousel>
            <CarouselItem>
                <img
                  className='d-block w-100'
                  src={DushOne}
                  alt='Forest'
                />
                <Carousel.Caption>
                    <h3>Dush One</h3>
                    <p>Lorem iposul dolor, site</p>
                </Carousel.Caption>
            </CarouselItem>
                <CarouselItem>
                <img
                  className='d-block w-100'
                  src={DushTwo}
                  alt='Forest'
                />
                <Carousel.Caption>
                    <h3>Dush Two</h3>
                    <p>Lorem iposul dolor, site</p>
                </Carousel.Caption>
            </CarouselItem>
                <CarouselItem>
                <img
                  className='d-block w-100'
                  src={DushOne}
                  alt='Forest'
                />
                <Carousel.Caption>
                    <h3>Dush One</h3>
                    <p>Lorem iposul dolor, site</p>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>
      </div>
    )
  }
}
