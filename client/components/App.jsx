import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './App.css';
import CarouselPage from './CarouselPage';
import Modal from './Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      photos: [],
      isOpen: false,
      showModal: false,
      count: 0,
      positionFromModal:667

    };


    this.onChangePositionFromModal = position => {
      this.setState({
        positionFromModal: position
      })
    }
    this.getPhotos = this.getPhotos.bind(this);
    this.showCarousel = this.showCarousel.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    const that = this;
    const getListingIdFromUrl = () => parseInt(window.location.pathname.split('listing/')[1], 10) || 0;
    const index = getListingIdFromUrl();
    axios.get(`/api/listing/${index}`)
      .then((response) => {
        console.log('got a response', response.data);
        that.setState({
          photos: response.data,
          counter: 1,
        }, () => console.log(that.state.photos));   
      });
    }

  incrementCount() {
    if (this.state.count === 3) {
      this.setState({
        count: 0,
      });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  }

  decrementCount() {
    if (this.state.count === 0) {
      this.setState({
        count: 3,
      });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }

  toggleModal() {
    console.log('toggled modal', this.state.isOpen)
    const that = this;
    this.setState({
      isOpen: !that.state.isOpen,
    });
  }

  closeModal() {
    console.log('here in close modal', this.state.isOpen)
    this.setState({
      isOpen: false,
    });
  }

  showCarousel() {
    this.setState({
      counter: 2,
    });
  }

  render() {
    return (
      <div class="photomargin">
        { this.state.counter === 1
        &&  <div className="container" onClick={this.toggleModal}>
            <button class="btn desktopbutton"><i class="far fa-share-square"></i> Share </button>
            <button class="btns desktopbutton"> <i class="heart far fa-heart"></i> Save</button>
            <button class="btns mobilebutton"> <i class="heart far fa-heart fa-2x"></i> </button>
            <button class="btn mobilebutton"><i class="far fa-share-square fa-2x"></i></button>
            <button onClick={this.toggleModal} class="viewphotos right">View Photos</button>
          <img class="responsive" src={this.state.photos[0].dining.dining_url} />
        </div> }
        { this.state.counter === 2 && <CarouselPage photos={this.state.photos} />}
        <div className="App">
          <Modal 
            onChangePositionFromModal={this.onChangePositionFromModal}
            show={this.state.isOpen}
            onCloseRequest={() => this.closeModal()}
            count={this.state.count}
            increment={this.incrementCount}
            decrement={this.decrementCount}
          >
            <CarouselPage
            positionFromModal={this.state.count}
              photos={this.state.photos}
              count={this.state.count}
              incrementCount={this.incrementCount}
              decrementCount={this.decrementCount}
            />
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
