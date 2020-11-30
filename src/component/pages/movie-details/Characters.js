import React, { Component } from "react";
import "./../../../css/character.css";

const Characters = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.characters.map((character) => (
          <div className="character col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 align-items-center">
            <div id="char-card">
              <img
                src={`http://image.tmdb.org/t/p/w185/${character.profile_path}`}
                alt=""
              />
              <h1>{character.name}</h1>
              <h2>as {character.character}</h2>
            </div>

            <hr />
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Characters;
