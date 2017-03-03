import React, { Component } from 'react';
import { Link } from 'react-router';

class AlbumsList extends Component {
    render() {
        return (
            <div className="container">
                <h1>Albums</h1>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 card-container">
                        <Link to="songs/spice">
                            <h3>Play Spice</h3>
                            <img className="img-fluid" src="../img/spice.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 card-container">
                        <h3>Play Spice World</h3>
                        <Link to="songs/spiceworld">
                            <img className="img-fluid" src="../img/spiceworld.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 card-container">
                        <h3>Play Forever</h3>
                        <Link to="songs/spice">
                            <img className="img-fluid" src="../img/forever.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumsList;