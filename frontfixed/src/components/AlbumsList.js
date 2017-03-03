import React, {Component} from 'react';
import {Link} from 'react-router';

class AlbumsList extends Component {
    render() {
        return (
            <div className="Albums parralax">
                <h1>Albums</h1>
                <div className="albumimgs">
                    <div className="col-md-3 card-container">
                        <div className="card">
                            <div className="side">
                                {/*<h1>Spice</h1>*/}
                                <Link to="songs/spice">
                                    <img className="highlightimg" src="../img/spice.jpg" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 card-container">
                        <div className="card">
                            <div className="side">
                                {/*<h1>Spice World</h1>*/}
                                <Link to="songs/spiceworld">
                                    <img className="highlightimg" src="../img/spiceworld.jpg" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 card-container">
                        <div className="card">
                            <div className="side">
                                {/*<h1>Forever</h1>*/}
                                <Link to="songs/spice">
                                    <img className="highlightimg" src="../img/forever.png" alt="" />
                                </Link>
                            </div>
                        </div>
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