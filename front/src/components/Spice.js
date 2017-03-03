import React, {Component} from 'react';

class Spice extends Component {

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
            <div className="container-row">
                <img className="innerImg" src="../img/spiceGirlsJump.jpg" alt=""/>
                <ul className="albumsList">
                    {spiceJSX}
                </ul>
                <div className="albumDescription">
                    <h3 className="words">Spice is the debut studio album by British girl group the Spice Girls. It was first released on 19 September 1996 by Virgin Records. 
                        The album was recorded at Olympic Studios in Barnes, London between 1995 and 1996, by producers Matt Rowe and Richard Stannard, and the production duo Absolute. 
                        The album is a pop record with an inclusion of styles such as dance, R&B and hip hop. It is considered to be the record that brought teen pop back, opening the doors for a wave of teen pop artists. 
                        Conceptually, the album centered on the idea of Girl Power, and during that time was compared to Beatlemania.</h3>
                </div>
            </div>

        )
    }
}

export default Spice;