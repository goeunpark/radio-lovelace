import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
  song.favorite = false;
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      tracks: songData,
    };
  };

  markStarred = (id) => {
    let updatedTracks = this.state.tracks;
    updatedTracks[id].favorite = !updatedTracks[id].favorite;
    this.setState({tracks: updatedTracks});
  };

  sendTop = (id) => {
    let updatedTracks = this.state.tracks;
    let new_top = updatedTracks[id];
    updatedTracks.splice(id, 1);

    if (id <= updatedTracks.length / 2) {
      updatedTracks.splice(0, 0, new_top)
    } else {
      updatedTracks.splice((updatedTracks.length + 1) / 2, 0, new_top)
    };

    for (let i = 0; i < updatedTracks.length; i++) {
      updatedTracks[i].id = i;
    };

    this.setState({tracks: updatedTracks});
  };

  switchList = (id) => {
    let updatedTracks = this.state.tracks;
    let new_top = updatedTracks[id];
    updatedTracks.splice(id, 1);

    if (id > updatedTracks.length / 2) {
      updatedTracks.splice(0, 0, new_top)
    } else {
      updatedTracks.splice((updatedTracks.length + 1) / 2, 0, new_top)
    };

    for (let i = 0; i < updatedTracks.length; i++) {
      updatedTracks[i].id = i;
    };

    this.setState({tracks: updatedTracks});
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">

          <RadioSet
            markStarredCallback={this.markStarred}
            sendTopCallback={this.sendTop}
            switchListCallback={this.switchList}
            tracks={this.state.tracks} />
        </main>
      </div>

    );
  }
}

export default App;
