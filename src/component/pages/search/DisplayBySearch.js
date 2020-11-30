import { useEffect, useState } from "react";
import Footer from './../../parts/Footer'
import './../../../css/displayBySearch.css';
import { useHistory, useParams } from 'react-router-dom';
import Navbar from './../../parts/Navbar'
import star from './../../../img/star.svg'



const DisplayBySearch = (props) => {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [moviesPerPage, setMoviesPerPage] = useState(5)
    const history = useHistory();
    const params = useParams()

    const inputan = localStorage.getItem('search')

    useEffect(() => {
        // inputan === '' ? localStorage.setItem('search', 'akjsfhaidyiohakjjfyhodjaskdtipdhdxodajdgoidh') :
        setIsLoading(true)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=8508a0bd1efc493c4bfa095b6a37f250&language=en-US&query=${params.keyword}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(res => {
                console.log(res.results)
                setMovies(res.results)
                setIsLoading(false)
            })

    }, [params.keyword])
    console.log(params)
    // const indexOfLastMovie = currentPage * moviesPerPage
    // const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
    // const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie)
    // const paginate = (pageNumber) => {
    //     setCurrentPage(pageNumber)
    // }
    // console.log(currentMovies)
    return (

        <div>
            <Navbar />
            {inputan === 'akjsfhaidyiohakjjfyhodjaskdtipdhdxodajdgoidh' ?
                <div className='container'>
                    <br /><br /><br />
                    <h4>Enter keyword to start searching</h4>
                </div> :

                isLoading === true ?
                    <div className="loading-icon spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div> :
                    <div className="searchMania container">
                        <h4>Displaying search results for {localStorage.getItem('search')}</h4>
                        <div className="row">
                            {movies.map(movie =>
                                <div className='searched col-lg-3 col-sm-12 col-md-6' >
                                    <div className=" searchbox mx-1 my-2 px-0">
                                        <img onClick src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt='poster' value={movie.id} onClick={() => { history.push(`/movie-details/${movie.id}`); }} />
                                        <div className="star-rating">
                                            <img src={star} alt="ratig" />
                                            <h2>: {movie.vote_average}</h2>
                                        </div>

                                        <h1 value={movie.id}>{movie.original_title}</h1>
                                    </div>

                                </div>
                            )
                            }

                        </div>
                        <div className="pager">
                            {/* <Pagination moviesPerPage={moviesPerPage} totalMovies={movies.length} paginate={paginate} /> */}
                        </div>


                    </div>

            }
            <Footer />

        </div>

    );
}



export default DisplayBySearch;