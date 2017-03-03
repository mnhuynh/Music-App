import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import AlbumsList from './components/AlbumsList';
import Spice from './components/Spice';
import SpiceWorld from './components/SpiceWorld';
import Forever from './components/Forever';
import './index.css';

function Song(source, title, album, id) {
  this.source = source;
  this.title = title;
  this.album = album;
  this.id = id;
}
//function Song links to the below variable
const songs = [
  new Song('../mp3/Spice-1-Wannabe.mp3', 'Wannabe', 'Spice', 0),
  new Song('../mp3/Spice-2-SayYoullBeThere.mp3', "Say You'll Be There", 'Spice', 1),
  new Song('../mp3/Spice-3-2Become1.mp3', '2 Become 1', 'Spice', 2),
  new Song('../mp3/Spice-4-LoveThing.mp3', 'Love Thing', 'Spice', 3),
  new Song('../mp3/Spice-5-LastTimeLover.mp3', 'Last Time Lover', 'Spice', 4),
  new Song('../mp3/Spice-6-Mama.mp3', 'Mama', 'Spice', 5),
  new Song('../mp3/Spice-7-WhoDoYouThinkYouAre.mp3', 'Who Do You Think You Are', 'Spice', 6),
  new Song('../mp3/Spice-8-SomethingKindaFunny.mp3', 'Something Kinda Funny', 'Spice', 7),
  new Song('../mp3/Spice-9-Naked.mp3', 'Naked', 'Spice', 8),
  new Song('../mp3/Spice-10-IfUCantDance.mp3', "If U Can't Dance", 'Spice', 9),
  new Song('../mp3/SpiceWorld-1-SpiceUpYourLife.mp3', 'Spice Up Your Life', 'Spice World', 10),
  new Song('../mp3/SpiceWorld-2-Stop.mp3', "Stop", 'Spice World', 11),
  new Song('../mp3/SpiceWorld-3-TooMuch.mp3', 'Too Much', 'Spice World', 12),
  new Song('../mp3/SpiceWorld-4-SaturdayNightDivas.mp3', 'Saturday Night Divas', 'Spice World', 13),
  new Song('../mp3/SpiceWorld-5-NeverGiveUpOnTheGoodTimes.mp3', 'Never Give Up On The Good Times', 'Spice World', 14),
  new Song('../mp3/SpiceWorld-6-MoveOver.mp3', 'Move Over', 'Spice World', 15),
  new Song('../mp3/SpiceWorld-7-DoIt.mp3', 'Do It', 'Spice World', 16),
  new Song('../mp3/SpiceWorld-8-Denying.mp3', 'Denying', 'Spice World', 17),
  new Song('../mp3/SpiceWorld-9-VivaForever.mp3', 'Viva Forever', 'Spice World', 18),
  new Song('../mp3/SpiceWorld-10-TheLadyIsAVamp.mp3', "The Lady Is A Vamp", 'Spice World', 19),
  new Song('../mp3/Forever-1-Holler.mp3', 'Holler', 'Forever', 20),
  new Song('../mp3/Forever-2-TellMeWhy.mp3', "Tell Me Why", 'Forever', 21),
  new Song('../mp3/Forever-3-LetLoveLeadTheWay.mp3', 'Let Love Lead The Way', 'Forever', 22),
  new Song('../mp3/Forever-4-RightBackAtYa.mp3', 'Right Back At Ya', 'Forever', 23),
  new Song('../mp3/Forever-5-GetDownWithMe.mp3', 'Get Down With Me', 'Forever', 24),
  new Song('../mp3/Forever-6-WastingMyTime.mp3', 'Wasting My Time', 'Forever', 25),
  new Song('../mp3/Forever-7-WeekendLove.mp3', 'Weekend Love', 'Forever', 26),
  new Song('../mp3/Forever-8-TimeGoesBy.mp3', 'Time Goes By', 'Forever', 27),
  new Song('../mp3/Forever-9-IfYouWannaHaveSomeFun.mp3', 'If You Wanna Have Some Fun', 'Forever', 28),
  new Song('../mp3/Forever-10-Oxygen.mp3', "Oxygen", 'Forever', 29),
  new Song('../mp3/Forever-11-Goodbye.mp3', "Goodbye", 'Forever', 30)
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
