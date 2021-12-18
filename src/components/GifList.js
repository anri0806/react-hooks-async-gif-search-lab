import React from "react";

function GifList({ gifs }) {
  //console.log(gifs);

  const gifList = gifs.map((gif) => (
    <li key={gif.url}>
      <img src={gif.url} alt="gif" />
    </li>
  ));

  return (
    <div className="gif_list">
      <ul>{gifList}</ul>
    </div>
  );
}

export default GifList;
