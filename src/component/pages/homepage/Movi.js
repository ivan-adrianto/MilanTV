import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, CardImg, Col, Container, Row, Button } from "reactstrap";
import Pagination from "react-js-pagination";
import axios from "axios";
import star from './../../../img/star.svg'
import "./../../../css/style.css";

function Movies() {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const apiUrl = "https://api.themoviedb.org/3/";

  const history = useHistory();

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentGenre, setCurrentGenre] = useState(null);
  const [category, setCategory] = useState('all')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(
        `${apiUrl}discover/movie?api_key=8508a0bd1efc493c4bfa095b6a37f250&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      });

    axios
      .get(
        `${apiUrl}genre/movie/list?api_key=8508a0bd1efc493c4bfa095b6a37f250&language=en-US`
      )
      .then((res) => {
        setGenres(res.data.genres)
        setIsLoading(false)
      });
  }, []);

  const categoryChange = (e) => {
    setIsLoading(true)
    if (e.target.value === 'all') {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=8508a0bd1efc493c4bfa095b6a37f250&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
        .then(res => setMovies(res.data.results))
        .then(() => {
          setCategory(e.target.value)
          setIsLoading(false)
        })
    } else {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=8508a0bd1efc493c4bfa095b6a37f250&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${e.target.value}`)
        .then(res => setMovies(res.data.results))
        .then(() => {
          setCategory(e.target.value)
          setIsLoading(false)
        })
    }
  }

  return (
    <div>

      <Container>

        <div className="browse">
          Browse by category
        </div>

        <div className='cukup'>
          <button className={`catbutton ${category === 'all' ? 'catbutton-active' : ''}`} onClick={e => categoryChange(e, 'value')} value='all' onClick={e => categoryChange(e, 'value')}>All</button>
          <button value='28' className={`catbutton ${category === '28' ? 'catbutton-active' : ''}`} onClick={e => categoryChange(e, 'value')}>Action</button>
          <button value='35' className={`catbutton ${category === '35' ? 'catbutton-active' : ''}`} onClick={e => categoryChange(e, 'value')}>Comedy</button>
          <button value='9648' className={`catbutton ${category === '9648' ? 'catbutton-active' : ''}`} onClick={e => categoryChange(e, 'value')}>Mystery</button>
          <button value='14' className={`catbutton ${category === '14' ? 'catbutton-active' : ''}`} onClick={e => categoryChange(e, 'value')}>Fantasy</button>
          <button value='10402' className={`catbutton ${category === '10402' ? 'catbutton-active' : ''}`} onClick={e => categoryChange(e, 'value')}>Musical</button>
          <button value='16' className={`catbutton ${category === '16' ? 'catbutton-active' : ''}`} onClick={e => categoryChange(e, 'value')}>Animation</button>
          <button value='18' className={`catbutton ${category === '18' ? 'catbutton-active' : ''}`} onClick={e => categoryChange(e, 'value')}>Drama</button>
          <button value='27' className={`catbutton ${category === '27' ? 'catbutton-active' : ''}`} onClick={e => categoryChange(e, 'value')}>Horror</button>
          <button value='10749' className={`catbutton ${category === '10749' ? 'catbutton-active' : ''}`} onClick={e => categoryChange(e, 'value')}>Romance</button>
          <button value='80' className={`catbutton ${category === '80' ? 'catbutton-active' : ''}`} onClick={e => categoryChange(e, 'value')}>Crime</button>
          <button value='12' className={`catbutton ${category === '12' ? 'catbutton-active' : ''}`} onClick={e => categoryChange(e, 'value')}>Adventure</button>
          <button value='878' className={`catbutton ${category === '878' ? 'catbutton-active' : ''}`} onClick={e => categoryChange(e, 'value')}>Sci-Fi</button>
        </div>

        <Row>
          {isLoading === false ? (
            movies.map((movie) => (
              <Col key={movie.id} md={3}>
                <Card id="cursor"
                  className="kartu"
                  onClick={() => {
                    history.push(`/movie-details/${movie.id}`);
                  }}
                >
                  <CardImg src={`${imgUrl}${movie.poster_path}`} />
                  <CardBody id="bodi">
                    <div className="home-rating d-flex">
                      <img src={star} alt="star" className='home-star' />
                      <h3>: {movie.vote_average} / 10</h3>
                    </div>

                    <h2>{movie.title}</h2>
                    <p>{movie.release_date ? movie.release_date.slice(0, 4) : ''}</p>

                  </CardBody>
                </Card>
              </Col>
            ))
          ) : (
              <div className="fidget">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            )}
        </Row>

      </Container>
    </div>
  );
}

export default Movies
