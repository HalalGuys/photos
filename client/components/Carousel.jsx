import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarouselContainer from './CarouselContainer';
import Wrapper from './Wrapper';
import CarouselSlot from './CarouselSlot';
import styles from './Carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      direction: 'next',
      sliding: false,

    };

    this.nextSlide = this.nextSlide.bind(this);
    this.getOrder = this.getOrder.bind(this);
    this.doSliding = this.doSliding.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.handleKeyright = e => {
      if (e.keyCode === 39) {

      this.nextSlide();
      props.increment();
      } else if(e.keyCode === 37) {

        this.prevSlide();
        props.decrement();
      }
      
    };
    
  }


  componentWillReceiveProps(nextProps) {
  this.setState({
    position: nextProps.positionFromModal
  })
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyright, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyright, false);
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
    const numItems = children.length || 1;
  
    this.doSliding('next', position === numItems - 1 ? 0 : position + 1)
    
  }

  componentWillReceiveProps() {
    console.log(this.props.positionFromModal)
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
      <div id="wrapper">

            <Wrapper>
              <CarouselContainer sliding = {this.state.sliding} direction= {this.state.direction} >
                { children.map((child, index) => (
                  <CarouselSlot
                    key={ index }
                    order={ this.getOrder(index) }
                  >
                  
                    {child}
                  </CarouselSlot>
                )) }
              </CarouselContainer>
            </Wrapper>

          <div
            className="left chev"
            onClick={() => {
              this.prevSlide();
              this.props.decrement();
            } }
          >
            <i className="fas fa-chevron-left fa-5x" />
          </div>
          <div
            class= "right chev"
            onClick ={()=> {
              this.nextSlide();
              this.props.increment()
            }} 
          >
            <i className="fas fa-chevron-right fa-5x" />
          </div>
        
    </div>
  )
  }
}

Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};


export default Carousel;
