import React, { Component } from 'react';
import './index.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            currentSong: 0,
            playing: false
        }
        this.prevNextSong = this.prevNextSong.bind(this);
        this.onPlay = this.onPlay.bind(this);
        this.onPause = this.onPause.bind(this);
        this.playSong = this.playSong.bind(this);
      }

  prevNextSong(num){
      const songs = this.props.route.songs;
      let newSong = (this.state.currentSong + songs.length + num) % songs.length
      this.setState({
          currentSong: newSong
      })
  }

  onPlay(e) {
      this.setState({
          playing: true
      })
  }
  
  onPause(e) {
      this.setState({
          playing:false
      })
  }

  playSong(num) {
      this.setState({
          currentSong: num,
          playing: true
      })
  }

  componentDidUpdate() { 
      const audioPlayer = this.refs.audioPlayer;
      // console.log(this.state)
      if(this.state.playing === false){
          audioPlayer.pause();
      } else if (this.state.playing === true){
          audioPlayer.play();
      }
  }

  render() {
      const songs = this.props.route.songs;
      console.log(songs)
      const playSong = this.playSong;
      return (
          <div className="App">
              {React.cloneElement(this.props.children, {songs, playSong})}
              <h3>Currently Playing: {songs[this.state.currentSong].title}</h3>
              <audio id="audioPlayer"
                  controls="controls"
                  onPlay={this.onPlay} 
                  onPause={this.onPause}
                  ref="audioPlayer" 
                  src={songs[this.state.currentSong].source}>
              </audio>
              <div className="playButton">
                  <button onClick={() => this.prevNextSong(-1)}>Prev</button>
                  <button onClick={() => this.prevNextSong(1)}>Next</button>
              </div>
          </div>
      );
  }
}

export default App;
