import React, {Component} from 'react';
import {Link} from 'react-router';

class AlbumSongs extends Component {
    render() {
        // console.log(this.props);
        const {songs, playSong} = this.props;
        // console.log({songs});
        const songID = this.props.params.id;
        // console.log(songID);
        const song = songs[songID];
        // console.log(song);
        return (
            <div>
                <h1>Songs</h1>
                <h3>{song.title}
                    {/*put play button here*/}
                    <button onClick={() => playSong(song.id)}>Play</button>
                </h3>
                <p>{song.album}</p>
                <button className="backButton">
                    <Link to="/songs">Back</Link>
                </button>
            </div>
        )
    }
}

export default AlbumSongs;