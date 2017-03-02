import React, {Component} from 'react';
import {Link} from 'react-router';
// Users can navigate between "songs list" page and "individual song details" page
// The "songs list" page should show the list of song title with a link to the individual song page, 
//and also a convenient play button next to it that will play that particular song

class SongsList extends Component {

    render() {
        // console.log(this.props);
        const {songs, playSong} = this.props; // or const songs = this.props.songs works too
        // console.log({songs});
        const songsJSX = songs.map((song, index) => {
            return (
                <li key={index}>
                    <Link to={`songs/${song.id}`}>{song.title}
                    </Link>
                    {/*put play button here so that each one has a play button*/}
                    <button onClick={() => playSong(song.id)}>Play</button>
                </li>
            );
        })
        return (
            <div>
                <h1>Spice Girls World</h1>
                <ul className="songsList">
                    {songsJSX}
                </ul>
            </div>
        )
    }
}

export default SongsList;