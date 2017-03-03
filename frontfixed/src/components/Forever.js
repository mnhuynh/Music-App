import React, {Component} from 'react';

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
        // console.log(foreverAlbum)
        const foreverJSX = foreverAlbum.map((song, index) => {
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
                    {foreverJSX}
                </ul>
            </div>

        )
    }
}

export default Forever;