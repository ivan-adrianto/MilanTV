import React from "react";
import "./../../../css/style.css";

const Overviews = (props) => {
  return (
    <div className="container">
      <div className="row">
        
          <div className="synopsis">
            <h1>Synopsis :</h1>
            <p>{props.overviews.overview}</p>
            <hr/>
            <h1>Movie Info :</h1>
            <p>Release Date: {props.overviews.release_date}</p>
            {/* <p>Featured Song: {props.overviews.featuredSong}</p>
            <p>Country: {props.overviews.country} </p>
            <p>Creator: {props.overviews.creator} </p> */}
            <hr />
          </div>
        
      </div>
    </div>
  );
};

export default Overviews;
