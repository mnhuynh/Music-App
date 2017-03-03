import React, { Component } from 'react';
import { Link } from 'react-router';

class AlbumsList extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="album">Spice Girls</h1>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 card-container">
                        <Link className="enter" to="songs/spice">
                            <h3 className="albumTitle">Play Spice</h3>
                            <img className="img-fluid" src="../img/spice.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 card-container">
                        <Link className="enter" to="songs/spiceworld">
                            <h3 className="albumTitle">Play Spice World</h3>
                            <img className="img-fluid" src="../img/spiceworld.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 card-container">
                        <Link className="enter" to="songs/forever">
                            <h3 className="albumTitle">Play Forever</h3>
                            <img className="img-fluid" src="../img/forever.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumsList;