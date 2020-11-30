import axios from "axios";
import { useEffect, useState } from "react";
import WatchlistMov from './WatchlistsMov'
import './../../../css/watchlist.css'
import { useParams } from 'react-router-dom'



const Watchlist = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://5fa8da99c9b4e90016e69b15.mockapi.io/userprofile/watchlist/`)
            .then(res => setMovies(res.data));
        setIsLoading(false);
    }, [])

    const getData = () => {
        axios.get(`https://5fa8da99c9b4e90016e69b15.mockapi.io/userprofile/watchlist/`)
            .then(res => setMovies(res.data));
        setIsLoading(false)
    }

    const deleteData = (e, id) => {
        console.log(id)
        setIsLoading(true);

        const url = `https://5fa8da99c9b4e90016e69b15.mockapi.io/userprofile/watchlist/${id}`;
        axios.delete(url).then(() => {
            setMovies([...movies.filter(movie => movie.id !== id)])
            setIsLoading(false);
        });
    }



    return (
        <div className='container'>
            <div className="row watchlist">
                {isLoading && <div className="loading-icon spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>}
                {!isLoading &&
                    movies.map(movie =>
                        <div className="col-lg-3 col-sm-6 col-md-6 mx-3 d-flex justify-content-center">
                            <div className='icon'>
                                <button id={movie.id} onClick={(e) => deleteData(e, movie.id)}>Delete</button>
                            </div>
                            <WatchlistMov movieId={movie.movieId} />

                        </div>
                    )}

            </div>

        </div>
    );
}

export default Watchlist;