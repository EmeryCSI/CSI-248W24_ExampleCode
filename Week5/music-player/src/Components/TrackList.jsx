import { useState } from "react";
function TrackList({ tracks, setCurrentTrack }) {
  const handleSelect = (track) => {
    //set the current Track
    setCurrentTrack(track);
  };
  return (
    <>
      <h2>TrackList</h2>
      <ul>
        {tracks.map((track) => {
          return (
            <li key={track.id} onClick={() => handleSelect(track)}>
              {track.artist.name} - {track.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TrackList;
