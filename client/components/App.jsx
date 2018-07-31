import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowseRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import styles from './App.css'
import axios from 'axios';
import CarouselPage from './Carousel.jsx'
import Modal from './Modal.jsx'


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          counter: 0,
          photos:[],
          isOpen: false,
          showModal: false,
          count: 0,
        }
        this.getPhotos = this.getPhotos.bind(this);
        this.showCarousel = this.showCarousel.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);

    }
    incrementCount () {
        if (this.state.count=== 3) {
    
          this.setState({ 
            count: 0
           })
        } else {
        this.setState({ count: this.state.count + 1 })
        }
      }
    
    decrementCount () {
        if(this.state.count === 0){
          this.setState({
            count: 3,
          })
        } else {
          this.setState({
            count: this.state.count - 1,
          })
        }
    }

    componentDidMount(){
      this.getPhotos();
    }
    toggleModal(){
      console.log('toggled modal', this.state.isOpen)
      var that = this;
      this.setState({
        isOpen: !that.state.isOpen
      });
    }
    
    getPhotos() {
        var that = this;
        axios.get('/photos')
        .then( (response) => {
            that.setState({
                photos: response.data,
                counter: 1,
            }, () => console.log( that.state.photos))
            
        });
    }
    showCarousel(){
      this.setState({
        counter: 2
      })
    }


    render() {
        return (
            <div >
                <h1> Photos </h1>
                { this.state.counter === 1 &&  <div class="container" onClick={this.showCarousel}><button class="btn"><i class="far fa-share-square"></i> Share </button><button class="btns"> <i class="heart far fa-heart"></i> Save</button><button class="viewphotos">View Photos</button><img class="responsive" src={this.state.photos[0].dining.dining_url} /> </div> }
                { this.state.counter === 2 && <CarouselPage photos={this.state.photos} />}
                <div className="App">
                  <button onClick={this.toggleModal}>
                  Open the modal
                  </button>

                  <Modal show={this.state.isOpen}
                         onClose={this.toggleModal}
                         onCloseRequest={() => this.toggleModal()}
                         count= {this.state.count}
                         increment= {this.incrementCount}
                         decrement= {this.decrementCount}
                  >
                    <CarouselPage 
                    photos={this.state.photos}
                    count= {this.state.count}
                    incrementCount= {this.incrementCount}
                    decrementCount= {this.decrementCount}

                     />
                  </Modal>
                </div>
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('photos'));