import React, {Component} from 'react';

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
            <div className="container-row">
                <ul className="albumsList">
                    {spiceWorldJSX}
                </ul>
            </div>

        )
    }
}

export default SpiceWorld;