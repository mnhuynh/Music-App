import React, {Component} from 'react';
import {Link} from 'react-router';

class SpiceWorld extends Component {

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
        let spiceWorldAlbum = this.filterAlbum('Spice World');
        // console.log(spiceWorldAlbum)
        const spiceWorldJSX = spiceWorldAlbum.map((song, index) => {
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
                    <Link className="albumsLink" to="/songs/spice">Spice</Link>
                    <h1 className="innerTitle">Spice World</h1>
                    <div className="col-xs-6 col-sm-6 col-md-6 card-container">
                        <ul className="albumsList">
                            {spiceWorldJSX}
                        </ul>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 card-container">
                        <img className="img-fluid" src="../img/spiceMakeUp.jpg" alt="" />
                        <p id="words" className="img-fluid">Spiceworld is the second studio album by the girls, released on 1 November 1997.</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default SpiceWorld;