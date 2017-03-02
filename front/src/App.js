import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      artist: []
    }
    this.artist = this.artist.bind(this);
  }

  artist() {
    let artist = [];
    axios.get('http://localhost:8080/')
      .then(res => {
        // console.log(res.data);
        artist.push(res.data);
        console.log(artist)
        this.setState({
          artist: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div className="App">
        <div>
          {/*search bar will be here -- flex box right side of page*/}
          <h1>Spotify</h1>
          {/*playlist will be on the left hand side*/}
          <div>
            <p>{this.artist}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
