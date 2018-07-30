import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarouselContainer from './CarouselContainer.jsx'
import Wrapper from './Wrapper.jsx'
import CarouselSlot from './CarouselSlot.jsx'
import ArrowKeysReact from 'arrow-keys-react';

class Carousel extends Component {

  constructor(props){
    super(props)
    this.state = {
      position: 0,
      direction: 'next',
      sliding: false

    };
    ArrowKeysReact.config({
      left: () => {
        this.prevSlide();
        console.log('left key detected.');
      },
      right: () => {
        this.nextSlide();
        console.log('right key detected.');
      }
    });
    this.nextSlide = this.nextSlide.bind(this);
    this.getOrder = this.getOrder.bind(this);
    this.doSliding = this.doSliding.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }


  getOrder(itemIndex) {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position)
    }
    return itemIndex - position
  }

  nextSlide (){
    console.log('nextslide invoked')
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1
    this.doSliding('next', position === numItems - 1 ? 0 : position + 1)
    
  }

  prevSlide(){
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
  }

  doSliding (direction, position) {
    const { sliding } = this.state;
    console.log('dosliding is invoked')
    this.setState({
      sliding: true,
      direction,
      position
    })
    setTimeout(() => {
     this.setState({
        sliding: false
      })
    }, 50)
  }







  render() {
    const { title, children } = this.props
    return (
      <div>
        <h2>{ title }</h2>

            <Wrapper>
              <CarouselContainer sliding = {this.state.sliding} direction= {this.state.direction} >
                { children.map((child, index) => (
                  <CarouselSlot
                    key={ index }
                    order={ this.getOrder(index) }
                  >
                  
                    {child}
                    Photo{this.state.position + '/' + 4}
                  </CarouselSlot>
                )) }
              </CarouselContainer>
                <div {...ArrowKeysReact.events} tabIndex="1">
                </div>
            </Wrapper>
            <button onClick={ () => this.prevSlide() }>Prev</button>
            <button onClick={ () => this.nextSlide() }>Next</button>
    </div>
  )
  }
}

Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};


export default Carousel;