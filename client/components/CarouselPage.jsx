
import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import CarouselSlot from './CarouselSlot';
import styles from './CarouselPage.css';

const Item = styled.div`
  text-align: center;
  padding: 0px;
  color: white;
  width: 100px;
  height: 67px;
  cursor: pointer;
  vertical-align: middle;
  background-color: transparent;
`;

// const Main = styled.main`
//   padding: 0px;
//   color: white;
//   width: 654px;
//   height: 438px;
//   cursor: pointer;
//   vertical-align: middle;
//   background-color: transparent;
// `
const CarouselPage = props => (

  <div
    className="wrapper"
  >
    <div>
      { props.count === 0 && <img alt="kitchen" id="Main" src={props.photos[0].kitchen.kitchen_url} /> }
      { props.count === 1 && <img alt="dining" id="Main" src={props.photos[0].dining.dining_url} /> }
      { props.count === 2 && <img alt="bathroom" id="Main" src={props.photos[0].bathroom.bathroom_url} /> }
      { props.count === 3 && <img alt="bedroom" id="Main" src={props.photos[0].bedroom.bedroom_url} /> }
    </div>
    <Carousel
      title="Carousel"
      decrement = {props.decrementCount}
      increment={props.incrementCount}
    >
      <Item class="fixed">
        <img className="fixed" alt="" src={props.photos[0].kitchen.kitchen_url} />
      </Item>
      <Item className="fixed">
        <img className="fixed" alt="" src={props.photos[0].dining.dining_url} />
      </Item>
      <Item className="fixed">
        <img className="fixed" alt="" src={props.photos[0].bathroom.bathroom_url} />
      </Item>
      <Item className="fixed">
        <img className="fixed" alt="" src={props.photos[0].bedroom.bedroom_url} />
      </Item>
    </Carousel>
  </div>

);

export default CarouselPage;
