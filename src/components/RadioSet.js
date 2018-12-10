import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

const RadioSet = (props) => {
  console.log(`Radio set for ${props.tracks.length} tracks`);

  // const markStarredCallback = (event) => {
  //   this.props.markStarredCallback()
  // };

  const playlists = {
    morningTracks: props.tracks.slice(0, props.tracks.length / 2),
    eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length),
  };

  return (
    <div className="radio-set">
      <section className="radio-set--playlist-container">
        <Playlist
            markStarredCallback={props.markStarredCallback}
          side="Morning"
          tracks={playlists.morningTracks}
        />
        <Playlist
            markStarredCallback={props.markStarredCallback}
          side="Evening"
          tracks={playlists.eveningTracks}
        />
      </section>
    </div>
  );
};

export default RadioSet;
