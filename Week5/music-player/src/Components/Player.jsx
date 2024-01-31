function Player({ track }) {
  if (!track) {
    return <h2>Please select a song</h2>;
  }
  console.log(track);
  return (
    <>
      <div>
        <h2>Now Playing:</h2>
        <img src={track.album.cover} alt="" />
        <img src={track.artist.picture} alt="" />
        <p>
          {track.artist.name} - {track.title}
        </p>
        <audio controls src={track.preview}></audio>
      </div>
    </>
  );
}

export default Player;
