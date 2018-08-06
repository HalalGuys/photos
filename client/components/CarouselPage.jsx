
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
const CarouselPage = props => {
 
    return (

  <div
    className="wrapper"
  >
    <div>
    <img class="responsives" alt={props.photos[props.count].content_type} id="Main" src={props.photos[props.count].url} />
    <div class="description">
      {`${props.count + 1}/${props.photos.length}:${props.photos[props.count].content_type}`}
    </div>
    </div>
    <Carousel
      class="slider overlay"
      title="Carousel"
      decrement = {props.decrementCount}
      increment={props.incrementCount}
    >
      {
        props.photos.map((photo,index) =>
        <Item key={index} onClick={() => props.clickImage(index)} class="fixed">
          <img className="fixed opacity" alt={photo.content_type} src={photo.url} />
        </Item>
      )
      }
      
    </Carousel>
  </div>

);
};

export default CarouselPage;
