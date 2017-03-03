import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import AlbumsList from './components/AlbumsList';
import Spice from './components/Spice';
import SpiceWorld from './components/SpiceWorld';
import Forever from './components/Forever';
import './index.css';

function Song(source, title, album, id, albumID) {
  this.source = source;
  this.title = title;
  this.album = album;
  this.id = id;
  this.albumID = albumID
}
//function Song links to the below variable
const songs = [
  new Song('../mp3/Spice-1-Wannabe.mp3', 'Wannabe', 'Spice', 0, 1),
  new Song('../mp3/Spice-2-SayYoullBeThere.mp3', "Say You'll Be There", 'Spice', 1, 1),
  new Song('../mp3/Spice-3-2Become1.mp3', '2 Become 1', 'Spice', 2, 1),
  new Song('../mp3/Spice-4-LoveThing.mp3', 'Love Thing', 'Spice', 3, 1),
  new Song('../mp3/Spice-5-LastTimeLover.mp3', 'Last Time Lover', 'Spice', 4, 1),
  new Song('../mp3/Spice-6-Mama.mp3', 'Mama', 'Spice', 5, 1),
  new Song('../mp3/Spice-7-WhoDoYouThinkYouAre.mp3', 'Who Do You Think You Are', 'Spice', 6, 1),
  new Song('../mp3/Spice-8-SomethingKindaFunny.mp3', 'Something Kinda Funny', 'Spice', 7, 1),
  new Song('../mp3/Spice-9-Naked.mp3', 'Naked', 'Spice', 8, 1),
  new Song('../mp3/Spice-10-IfUCantDance.mp3', "If U Can't Dance", 'Spice', 9, 1),
  new Song('../mp3/Spice-1-Wannabe.mp3', 'Wannabe', 'Spice World', 10, 2),
  new Song('../mp3/Spice-2-SayYoullBeThere.mp3', "Say You'll Be There", 'Spice World', 11, 2),
  new Song('../mp3/Spice-3-2Become1.mp3', '2 Become 1', 'Spice World', 12, 2),
  new Song('../mp3/Spice-4-LoveThing.mp3', 'Love Thing', 'Spice World', 13, 2),
  new Song('../mp3/Spice-5-LastTimeLover.mp3', 'Last Time Lover', 'Spice World', 14, 2),
  new Song('../mp3/Spice-6-Mama.mp3', 'Mama', 'Spice World', 15, 2),
  new Song('../mp3/Spice-7-WhoDoYouThinkYouAre.mp3', 'Who Do You Think You Are', 'Spice World', 16, 2),
  new Song('../mp3/Spice-8-SomethingKindaFunny.mp3', 'Something Kinda Funny', 'Spice World', 17, 2),
  new Song('../mp3/Spice-9-Naked.mp3', 'Naked', 'Spice World', 18, 2),
  new Song('../mp3/Spice-10-IfUCantDance.mp3', "If U Can't Dance", 'Spice World', 19, 2)
]

ReactDOM.render((
  <Router history={browserHistory}>
    {/*{songs link to above variable}*/}
    <Route songs={songs} path="/" component={App}>
      <IndexRoute component={AlbumsList} />
      <Route path="songs" component={AlbumsList} />
      <Route path="songs/spice" component={Spice} />
      <Route path="songs/spiceworld" component={SpiceWorld} />
      <Route path="songs/forever" component={Forever} />
    </Route>
  </Router>
),document.getElementById('root'));
