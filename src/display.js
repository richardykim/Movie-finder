import React from 'react';


const Display = ({shows}) =>{
  if (!shows){
    return <div>Loading...</div>
  };

  const videoList = shows.map((video) => {
    const poster = video.poster_path
    const imageUrl = `http://image.tmdb.org/t/p/w185/${poster}`
    return (
      <ul>
        <li id="movieTitle">{video.title}</li>
        <li><img className="media-object" src={imageUrl}/></li>
      </ul>
    );
  });


  const movie = shows[0]
  return(
    <div>
      {videoList}
    </div>
  );
};


export default Display;
