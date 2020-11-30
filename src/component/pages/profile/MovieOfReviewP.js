import { useEffect, useState } from 'react'
import './../../../css/movieOfReviewP.css'
import axios from 'axios'



const MovieOfReviewP = (props) => {
    const [title, setTitle] = useState('')
    useEffect(()=>{
        fetch(
            `https://api.themoviedb.org/3/movie/${props.movie}?api_key=8508a0bd1efc493c4bfa095b6a37f250&language=en-US`
        )
            .then((result) => result.json())
            .then((response) =>
                setTitle(response)
            );
    
    },[])
    
    return (
        <div className = 'fromAnotherAPI'>
            <h5>{title.original_title} </h5>
            <img src={`http://image.tmdb.org/t/p/w185/${title.poster_path}`} alt="movie pic" id='movieOther'/>
        </div>

    );
}

export default MovieOfReviewP;