import React, { Component } from 'react';
import './index.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentSong: 0,
            playing: false,
            currentTime: 0,
            duration: 0
        }
        this.prevNextSong = this.prevNextSong.bind(this);
        this.onPlay = this.onPlay.bind(this);
        // this.onPause = this.onPause.bind(this);
        this.playSong = this.playSong.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.durationTick = this.durationTick.bind(this);
        // this.progess = this.progress.bind(this);
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

    handlePlay() {
        const audioPlayer = this.refs.audioPlayer
        if (this.state.playing === true) {
            audioPlayer.pause()
        } else audioPlayer.play()

        this.setState({
            playing: !this.state.playing
        })
    }
    
    //convert time in seconds into a string format with MM:SS for display.
    displayTime(time) {

        // let minutes = parseInt(this.state.currentTime / 60);
        // let seconds = parseInt(this.state.currentTime % 60);
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        //need to make it 0:00
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return `${minutes}:${seconds}`
    }

    //the tick of each duration per second seen in componentDidMount()
    durationTick() {
        if (this.state.playing === true) {
            this.setState({
                currentTime: this.refs.audioPlayer.currentTime 
            })
        }
    }

    //add an event in which the progress bar will move with the duration -- just started, INCOMPLETE!
    // progress() {
    //     const progress = document.getElementsByClassName("progress");
    //     const audioPlayer = this.refs.audioPlayer;
    //     let value = 0;
    //     if (audioPlayer.currentTime > 0) {
    //         value = Math.floor((100 / audioPlayer.duration) * audioPlayer.currentTime);
    //     }
    //     progress.style.width = value + "%";
    //     audioPlayer.addEventListener("timeupdate", progress, false); //should be in componentDidMount??
    // }

    componentDidMount() {
        // componentDidMount is called by react when the component 
        // has been rendered on the page. We can set the interval here:
        //timer to move the durationTick of song by 1ms
        this.timer = setInterval(this.durationTick, 1);
        //add in the total duration of audioPlayer of whichever song plays 
        //& whenever it changes with .ondurationchange event that comes with audio tag
        const audioPlayer = this.refs.audioPlayer;
        audioPlayer.ondurationchange = () => {
            if (audioPlayer.duration) {
                this.setState({
                    duration: audioPlayer.duration
                })
            }
        }
    }

    componentWillUnmount() {
        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:
        clearInterval(this.timer);
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

        const progress = this.progress;
        console.log(progress);
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
                        <p className="duration">{this.displayTime(this.state.currentTime)}/{this.displayTime(this.state.duration)}</p>
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
