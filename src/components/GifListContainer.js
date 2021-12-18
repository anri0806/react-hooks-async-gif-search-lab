import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dmkMCSQ2M9gS401AsOI1ndLgKMblzuM6&rating=g`
    )
      .then((res) => res.json())
      .then((fetchedData) => {
        setGifs(
          fetchedData.data.map((gif) => ({ url: gif.images.original.url }))
        );
      });
  }, [query]);

  function handleSearch(input) {
      setQuery(input)
  }

  return (
    <div>
      <GifSearch onSubmitSearch={handleSearch} />
      <br></br>
      <GifList gifs={gifs.slice(0, 3)} />
    </div>
  );
}

export default GifListContainer;
