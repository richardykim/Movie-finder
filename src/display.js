import React from 'react';


const Display = ({shows}) =>{
  if (!shows){
    return <div>Please search for something</div>
  }
  if (!shows['results']){
    return <div>Loading...</div>
  };

  const videoList = shows['results'].map((video) => {
    const poster = video.poster_path
    const imageUrl = `http://image.tmdb.org/t/p/w185/${poster}`
    return (
      <ul>
        <div className="row">
         <div className="col s4 .left-align">
           <li>
             <img className="media-object" src={imageUrl}/>
           </li>
         </div>
         <div className="col s8">
          <li className="font-title">
            {video.title} ({video.release_date.slice(0,4)})
          </li>
          <li>
            <div className="font-style"> Plot: </div> {video.overview}
          </li>
          <li>
            <div className="font-style">Voter Average: </div> {video.vote_average}
          </li>
         </div>
      </div>
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
