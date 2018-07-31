
import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from './Demo.jsx';
import CarouselSlot from './CarouselSlot.jsx';
import styles from './Carousel.css';

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
    this.state   = {
      counter: 0
    }

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    
  }

  incrementCounter () {
    if (this.state.counter === 3) {

      this.setState({ 
        counter: 0
       })
    } else {
    this.setState({ counter: this.state.counter + 1 })
    }
  }

  decrementCounter () {
    if(this.state.counter === 0){
      this.setState({
        counter: 3,
      })
    } else {
      this.setState({
        counter: this.state.counter - 1,
      })
    }
  }




  render() {
    return (
      <div className="wrapper" >
        <div> 
        
        { this.state.counter=== 0 && <img id="Main" src={this.props.photos[0].kitchen.kitchen_url}  /> }
        { this.state.counter=== 1 && <img id="Main" src={this.props.photos[0].dining.dining_url}  /> }
        { this.state.counter=== 2 && <img id="Main" src={this.props.photos[0].bathroom.bathroom_url}  /> }
        { this.state.counter=== 3 && <img id="Main" src={this.props.photos[0].bedroom.bedroom_url}  /> }
         
         </div>
        <Carousel
          counter = {this.state.counter}
          title="Carousel"
          decrement = {this.decrementCounter}
          increment={this.incrementCounter}
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