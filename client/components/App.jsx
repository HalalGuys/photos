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
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          counter: 0,
          photos:[]
        }
        this.getPhotos = this.getPhotos.bind(this);
        this.showCarousel = this.showCarousel.bind(this);
    }
    componentDidMount(){
      this.getPhotos();
    }
    getPhotos() {
        var that = this;
        axios.get('/photos')
        .then( (response) => {
            that.setState({
                photos: response.data,
                counter: 1
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
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('photos'));