import React, { Component } from 'react';
import { Link } from 'react-router';

class AlbumsList extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="pageTitle">Spice Girls</h1>
                <div className="row">
                    <div className="intro">
                        <h3>Introduction</h3>
                        <p>The Spice Girls are an English pop girl group formed in 1994. 
                            The group originally consisted of Melanie Brown ("Scary Spice"), Melanie Chisholm ("Sporty Spice"), Emma Bunton ("Baby Spice"), 
                            Geri Halliwell ("Ginger Spice"), and Victoria Beckham, née Adams ("Posh Spice"). 
                            They were signed to Virgin Records and released their debut single "Wannabe" in 1996, which hit number one in 37 countries and established them as a global phenomenon. 
                            Their debut album Spice sold more than 31 million copies worldwide, becoming the best-selling album by a female group in history.
                            Their follow-up album Spiceworld sold over 20 million copies worldwide. The Spice Girls have sold 85 million records worldwide, 
                            making them the best-selling female group of all time, one of the best-selling pop groups of all time,
                             and the biggest British pop phenomenon since Beatlemania. Among the highest profile acts in 1990s British popular culture, 
                            Time called them "arguably the most recognisable face" of Cool Britannia, the mid-1990s celebration of youth culture in the UK.</p>
                        <p>- Wikipedia</p>
                    </div>
                    <h2 className="albums">Albums</h2>
                    <div className="col-xs-4 col-sm-4 col-md-4 card-container">
                        <Link className="enter" to="songs/spice">
                            <h3 className="albumTitle" title="Click Me!">Spice</h3>
                            <img className="img-fluid" src="../img/spice.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 card-container">
                        <Link className="enter" to="songs/spiceworld">
                            <h3 className="albumTitle" title="Click Me!">Spice World</h3>
                            <img className="img-fluid" src="../img/spiceworld.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 card-container">
                        <Link className="enter" to="songs/forever">
                            <h3 className="albumTitle" title="Click Me!">Forever</h3>
                            <img className="img-fluid" src="../img/forever.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumsList;