import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import star from './../../../img/star.svg'

const WatchlistMov = (props) => {
    const [watchlists, setWatchlists] = useState('')
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        setisLoading(true)
        axios.get(`https://api.themoviedb.org/3/movie/${props.movieId}?api_key=8508a0bd1efc493c4bfa095b6a37f250&language=en-US`)
            .then((res) => {
                setWatchlists(res.data);
                setisLoading(false)
            });

    }, [])
    return (
        <div>
            {isLoading === true ?
                <div className="loading-icon spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div> :

                <div>
                    <div className="watchcard">
                        <Link to={`/movie-details/${props.movieId}`}>
                            <img src={`http://image.tmdb.org/t/p/w185/${watchlists.poster_path}`} alt="poster" />
                        </Link>
                        <div className="star-rating">
                            <img src={star} alt="star" />
                            <h2>: {watchlists.vote_average} / 10</h2>
                        </div>
                        <h1>{watchlists.original_title}</h1>
                    </div>
                </div>}
        </div>

    );
}

export default WatchlistMov;