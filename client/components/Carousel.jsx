
import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from './Demo.jsx';
import CarouselSlot from './CarouselSlot.jsx';
import styles from './Carousel.css';

const Item = styled.div`
  background: darkorange;
  text-align: center;
  padding: 50px;
  color: white;
  width: 654px;
  height:438px;
  cursor: pointer;
  vertical-align: middle;
`

class CarouselPage extends Component {
  constructor(props){
    super(props);
    
  }





  render() {
    return (
      <div>
        <Carousel
          title="Carousel"
        >
          <Item><img class="fixed" src={this.props.photos[0].kitchen.kitchen_url} /></Item>
          <Item><img class="fixed" src={this.props.photos[0].dining.dining_url} /></Item>
          <Item><img class="fixed" src={this.props.photos[0].bathroom.bathroom_url} /></Item>
          <Item><img class="fixed" src={this.props.photos[0].bedroom.bedroom_url} /></Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselPage; 