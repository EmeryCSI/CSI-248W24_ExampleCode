import axios from "axios";
import SearchBar from "./Components/SearchBar";
import TrackList from "./Components/TrackList";
import Player from "./Components/Player";
import { useState } from "react";
function App() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  //start of searchTracks
  const searchTracks = async (searchValue) => {
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search",
      params: { q: searchValue },
      headers: {
        "X-RapidAPI-Key": "YOUR API KEY GOES HERE",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setTracks(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }; //end of searchTracks
  //searchTracks("Taylor Swift");
  return (
    <>
      <h2>App</h2>
      <SearchBar onSearch={searchTracks}></SearchBar>
      <TrackList tracks={tracks} setCurrentTrack={setCurrentTrack}></TrackList>
      <Player track={currentTrack}></Player>
    </>
  );
}

export default App;
