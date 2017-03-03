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

            /*<div className="container-row">
                <div className="col-md-12 album">
                    <div className="col-md-4 albumImage">
                        <h1>Spice</h1>
                        <img src="../img/spice.jpg" alt=""/>
                    </div>
                </div>
                
                <div className="col-md-12 album">
                    <div className="col-md-4 albumImage">
                        <h1>Spice World</h1>
                        <img src="../img/spiceworld.jpg" alt=""/>
                    </div>
                </div>

                <div className="col-md-12 album">
                    <div className="col-md-4 albumImage">
                        <h1>Forever</h1>
                        <img src="../img/forever.png" alt=""/>
                    </div>
                </div>
            </div>*/

        )
    }
}

export default AlbumsList;