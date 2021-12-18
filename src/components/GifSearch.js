import React, { useState } from "react";

function GifSearch({onSubmitSearch}) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
      e.preventDefault()

      //receive callback func
      onSubmitSearch(search)
  }
  

  return (
    <div className="search_bar">
      <form onSubmit={handleSubmit}>
        <label>Enter a Search Term:</label>
        <br></br>
        <input
          value={search}
          onChange={handleChange}
          type="text"
          name="search"
          placeholder="Search GIF..."
        />
        <input type="submit" value="Find" />
      </form>
    </div>
  );
}

export default GifSearch;
