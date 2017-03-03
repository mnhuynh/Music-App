import React, {Component} from 'react';
import {Link} from 'react-router';

class Forever extends Component {

   constructor(){
        super();
        this.filterAlbum = this.filterAlbum.bind(this);
   }

    filterAlbum(albumList){
        const {songs} = this.props; 
        let albumJSX = [];
        for( let i = 0; i < songs.length; i++){
            if (songs[i].album === albumList){
               albumJSX.push(songs[i]) 
            }
        } 
        // console.log(albumJSX);
        return albumJSX
    }

    render() {
        const {playSong} = this.props;
        let foreverAlbum = this.filterAlbum('Forever');
        // console.log(spiceAlbum)
        const foreverJSX = foreverAlbum.map((song, index) => {
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
                    <Link className="albumsLink" to="/songs/spiceworld">Spice World</Link>
                    <Link className="albumsLink" to="/songs/spice">Spice</Link>
                    <h1 className="innerTitle">Forever</h1>
                    <div className="col-xs-6 col-sm-6 col-md-6 card-container">
                        <ul className="albumsList">
                            {foreverJSX}
                        </ul>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 card-container">
                        <img className="img-fluid" src="../img/spiceBed.jpeg" alt="" />
                        <p id="words" className="img-fluid">Forever is the third and final studio album by the girls, released on 6 November 2000.</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Forever;