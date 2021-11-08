import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import hero from '../../images/family_hero.png';

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={hero} />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src={hero} />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src={hero} />
          <p className='legend'>Legend 1</p>
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
