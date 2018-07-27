import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.getPhotos = this.getPhotos.bind(this);
        this.state = {
            photos: [],
            counter: 0
        }
    }


    getPhotos(){
        var that = this;
        axios.get('/photos')
        .then( (response) => {
            that.setState({
                photos: response.data,
                counter: 1
            })
            
        });
    }

    render() {
        return (
            <div>
                <h1> Photos </h1>
                <button onClick={this.getPhotos}> Get Photos </button>
                { this.state.counter === 1 &&  <div><img src={this.state.photos[0].dining.dining_url} /> </div> }
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('photos'));