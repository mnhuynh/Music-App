import React, { Component } from 'react';

// There must be a media control UI that let users play and pause a song from any page
// The media control UI must function well. That is,
// Pressing the next or prev button while a song is being played will change the song and play it
// Pressing the next or prev button while no song is being played will only change the song
// Change in "current song" should be displayed to the user

class App extends Component {
    constructor(){
        super();
        this.state = {
            currentSong: 0,
            playing: false
        }
        //bind has to .bind(this) for it to work since the array is in the index.js
        // this.prevSong = this.prevSong.bind(this);
        // this.nextSong = this.nextSong.bind(this);
        this.prevNextSong = this.prevNextSong.bind(this);
        this.onPlay = this.onPlay.bind(this);
        this.onPause = this.onPause.bind(this);
        this.resetSong = this.resetSong.bind(this);
        this.playSong = this.playSong.bind(this);
      }

  // by requiring the songs & using modulus for the songs length, songs are able to be looped
  // 1st songs.length helps move backwards & 2nd songs.length helps move forward
  // if any is missing, one or the other button will not work or loop
  // prevSong(num) {
  //   const songs = this.props.route.songs;
  //   let prevSong = (this.state.currentSong - num) % songs.length
  //   this.setState({
  //     currentSong: prevSong
  //   })
  // }

  // nextSong(num) {
  //   const songs = this.props.route.songs;
  //   let nextSong = (this.state.currentSong + num) % songs.length
  //   this.setState({
  //     currentSong: nextSong
  //   })
  // }

  // rather than doing 2 separate events that are basically identical except for the minus/add, 
  // do 1 event that enables it to move prev & next
  prevNextSong(num){
      const songs = this.props.route.songs;
      // can't do both minus/plus at same time so added song.length inside
      // works with minus/plus together with songs.length in order for it to move prev & next
      // (i.e. (this.state.currentSong + songs.length -/+ num))
      let newSong = (this.state.currentSong + songs.length + num) % songs.length
      this.setState({
          currentSong: newSong
      })
  }

  // this event was created bc the play button on audio was disconnected with everything else
  // especially with componentDidUpdate
  onPlay(e) {
      this.setState({
          playing: true
      })
  }

  // this event was created bc after pressing & pausing the play button the 1st time,
  // when pressing the prev & next button even when the audioPlayer is paused the song it jumps to will still play
  onPause(e) {
      this.setState({
          playing:false
      })
  }

  // make a reset button so that the song resets currentTime to 0
  resetSong(num) {
      const audioPlayer = this.refs.audioPlayer; // can also create document.getElementById("audioPlayer");
      audioPlayer.currentTime = 0
      this.setState({
          currentSong: num,
          playing: true,
          currentTIme: audioPlayer.currentTime
      })
  }

  //play button function for song list & -details
  playSong(num) {
      this.setState({
          currentSong: num,
          playing: true
      })
  }

  componentDidUpdate() { //allows audioPlayer to continue playing even when going prev or next
      const audioPlayer = this.refs.audioPlayer;
      // console.log(this.state)
      if(this.state.playing === false){
          audioPlayer.pause();
      } else if (this.state.playing === true){
          audioPlayer.play();
      }
  }

  render() {
    // is this const songs linked to the index const songs??
      const songs = this.props.route.songs;
      const playSong = this.playSong;
      return (
          <div className="App">
              <h3>Currently Playing: {songs[this.state.currentSong].title}</h3>
              <audio controls="controls"
                  onPlay={this.onPlay} 
                  onPause={this.onPause}
                  ref="audioPlayer" 
                  src={songs[this.state.currentSong].source}>
              </audio>
              <div className="buttons">
                  {/*<button onClick={() => this.prevSong(-1)}>Prev</button>
                  <button onClick={() => this.nextSong(1)}>Next</button>*/}
                  <button onClick={() => this.prevNextSong(-1)}>Prev</button>
                  <button onClick={() => this.resetSong(this.state.currentSong)}>Reset</button>
                  <button onClick={() => this.prevNextSong(1)}>Next</button>
              </div>
              {/*remember this.props.children links to both song list & song details 
              so this is the page that doesn't change no matter where you navigate --put media control in this file*/}
              {React.cloneElement(this.props.children, {songs, playSong})}
          </div>
      );
  }
}

export default App;
