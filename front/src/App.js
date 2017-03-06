import React, { Component } from 'react';
import './index.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentSong: 0,
            playing: false
        }
        this.prevNextSong = this.prevNextSong.bind(this);
        this.onPlay = this.onPlay.bind(this);
        // this.onPause = this.onPause.bind(this);
        this.playSong = this.playSong.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
    }

    prevNextSong(num) {
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
        // console.log("work?")
    }

    // onPause(e) {
    //     this.setState({
    //         playing: false
    //     })
    // }

    playSong(num) {
        // console.log(this.state.playing);
        const audioPlayer = this.refs.audioPlayer;
        if (this.state.playing === true) {
            audioPlayer.pause()
        } else audioPlayer.play()
        
        this.setState({
            currentSong: num,
            playing: !this.state.playing 
        })
    
    }

    handlePlay(){
        const audioPlayer = this.refs.audioPlayer
        if (this.state.playing === true) {
            audioPlayer.pause()
        } else audioPlayer.play()
        
        this.setState({
            playing: !this.state.playing 
        })
    }

    componentDidUpdate() {
        const audioPlayer = this.refs.audioPlayer;
        // console.log(this.state)
        if (this.state.playing === false) {
            audioPlayer.pause();
        } else if (this.state.playing === true) {
            audioPlayer.play();
        }
    }

    render() {
        const songs = this.props.route.songs;
        // console.log(songs)
        // console.log(this.state.playing)
        const playSong = this.playSong;
        return (
            <div className="App">
                {React.cloneElement(this.props.children, { songs, playSong })}
                {/*<h3>Currently Playing: {songs[this.state.currentSong].title}</h3>
                <audio id="audioPlayer"
                    controls="controls"
                    onPlay={this.onPlay} 
                    onPause={this.onPause}
                    ref="audioPlayer" 
                    src={songs[this.state.currentSong].source}>
                </audio>
                <div>
                    <button className="playButton" onClick={() => this.prevNextSong(-1)}>Prev</button>
                    <button className="playButton" onClick={() => this.prevNextSong(1)}>Next</button>
                </div>*/}
                <section className="player">
                    <figure className="left_icon">
                        <div className="overlay">
                            <div className="shadow"></div>

                            <div className="btn">
                                <div className="light"></div>
                            </div>
                            <div className="cord_container">
                                <div className="cord"></div>
                            </div>
                            <div className="reader"></div>
                        </div>

                        <div className="lp_cont">
                            <div className="lp"></div>
                        </div>
                    </figure>

                    <section className="content">
                        <h1>{songs[this.state.currentSong].title}</h1>

                        <div className="slider">
                            <div className="progress">
                            </div>
                        </div>

                        <div className="btns">
                            <a className="back icon-backward" onClick={() => this.prevNextSong(-1)}></a>
                            <a className="play icon-play" onClick={this.handlePlay}></a>
                            <audio id="audioPlayer"
                                onPlay={this.onPlay} 
                                ref="audioPlayer" 
                                src={songs[this.state.currentSong].source}>
                            </audio>
                            <a className="forward icon-forward" onClick={() => this.prevNextSong(1)}></a>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}

export default App;
