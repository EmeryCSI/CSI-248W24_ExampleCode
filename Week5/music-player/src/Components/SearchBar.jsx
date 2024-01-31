import { useState } from "react";
function SearchBar({ onSearch }) {
  //what needs to happen here
  //we are getting the searchValue
  const [searchValue, setSearchValue] = useState("");
  //handle for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setSearchValue(event.target.value)}
          type="text"
          placeholder="Search for a song"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchBar;
