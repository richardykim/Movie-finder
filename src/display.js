import React from 'react';


const Display = ({shows}) =>{
  if (!shows){
    return <div>Loading...</div>
  };
  const movie = shows[0]
  const poster = shows[0].poster_path
  const imageUrl = `http://image.tmdb.org/t/p/w185/${poster}`
  return(
    <div>
      {console.log(shows[0])}
      {movie.title}
      <br />
      {movie.vote_average}
      <img className="media-object" src={imageUrl}/>
    </div>
  );
};


export default Display;
