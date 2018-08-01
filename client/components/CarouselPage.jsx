
import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';
import CarouselSlot from './CarouselSlot.jsx';
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
`

// const Main = styled.main`
//   padding: 0px;
//   color: white;
//   width: 654px;
//   height: 438px;
//   cursor: pointer;
//   vertical-align: middle;
//   background-color: transparent;
// `

class CarouselPage extends Component {
  constructor(props){
    super(props);
    
  }






  render() {
    return (
      <div className="wrapper" >
        <div> 
        
        { this.props.count === 0 && <img id="Main" src={this.props.photos[0].kitchen.kitchen_url}  /> }
        { this.props.count === 1 && <img id="Main" src={this.props.photos[0].dining.dining_url}  /> }
        { this.props.count === 2 && <img id="Main" src={this.props.photos[0].bathroom.bathroom_url}  /> }
        { this.props.count === 3 && <img id="Main" src={this.props.photos[0].bedroom.bedroom_url}  /> }
         
         </div>
        <Carousel
          title="Carousel"
          decrement = {this.props.decrementCount}
          increment={this.props.incrementCount}
        >
          <Item class="fixed"><img class="fixed" src={this.props.photos[0].kitchen.kitchen_url} /></Item>
          <Item class="fixed"><img class="fixed" src={this.props.photos[0].dining.dining_url} /></Item>
          <Item class="fixed"><img class="fixed" src={this.props.photos[0].bathroom.bathroom_url} /></Item>
          <Item class="fixed"><img class="fixed" src={this.props.photos[0].bedroom.bedroom_url} /></Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselPage; 