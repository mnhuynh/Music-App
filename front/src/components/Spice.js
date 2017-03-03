import React, { Component } from 'react';
import {Link} from 'react-router';

class Spice extends Component {

    constructor() {
        super();
        this.filterAlbum = this.filterAlbum.bind(this);
    }

    filterAlbum(albumList) {
        const { songs } = this.props;
        let albumJSX = [];
        for (let i = 0; i < songs.length; i++) {
            if (songs[i].album === albumList) {
                albumJSX.push(songs[i])
            }
        }
        // console.log(albumJSX);
        return albumJSX
    }

    render() {
        const { playSong } = this.props;
        let spiceAlbum = this.filterAlbum('Spice');
        // console.log(spiceAlbum)
        const spiceJSX = spiceAlbum.map((song, index) => {
            return (
                <li key={index}>
                    <button className="playButton" onClick={() => playSong(song.id)}>Play</button>
                    {song.title}
                </li>
            );
        })
        return (
            <div className="container">
                <div id="albumPage" className="row">
                    <Link className="main" to="/">Main</Link>
                    <Link className="albumsLink" to="/songs/forever">Forever</Link>
                    <Link className="albumsLink" to="/songs/spiceworld">Spice World</Link>
                    <h1 className="innerTitle">Spice</h1>
                    <div className="col-xs-6 col-sm-6 col-md-6 card-container">
                        <ul className="albumsList">
                            {spiceJSX}
                        </ul>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 card-container">
                        <img className="img-fluid" src="../img/spiceGirlsJump.jpg" alt="" />
                        <p id="words" className="img-fluid">Spice is the girls' debut studio album, first released on 19 September 1996.</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Spice;