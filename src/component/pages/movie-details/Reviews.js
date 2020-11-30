import React, { useState, useEffect } from "react";
import fotoprofil from "./../../../img/profilemockup.jpg";
import { Container } from "reactstrap";
import "./../../../css/Reviews.css"
import Axios from "axios";
import { useParams } from "react-router-dom";
import Rating from 'react-simple-star-rating'


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [isLogin, setIsLogin] = useState(false)
    const [isLoading, setisLoading] = useState(false)
    const [reviewMock, setReviewMock] = useState([])
    const params = useParams()
    console.log(params)


    const handleSubmitReview = (e) => {
        setisLoading(true)

        e.preventDefault()

        const url = "https://5fa8da99c9b4e90016e69b15.mockapi.io/userprofile/user-review"
        const bodyData = {
            rating: rating,
            comment: comment,
            movieId: params.id
        }

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(bodyData)
        })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .then(console.log(rating))
            .then(console.log(comment))
    
            .then(()=>{
                Axios.get('https://5fa8da99c9b4e90016e69b15.mockapi.io/userprofile/user-review')
                .then (res=>{
                    setisLoading(false)
                    setReviewMock(res.data)})
            })
    }

    useEffect(() => {
        getDataReviews();

    }, [localStorage.getItem('reviewTrig')])

    
    
    const getDataReviews = () => {
        setisLoading(true)
        Axios
            .get(`https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=8508a0bd1efc493c4bfa095b6a37f250&language=en-US&page=1`)
            .then((res) => {
                setReviews(res.data.results);
                setisLoading(false)
            })
    };
    const [review, setReview] = useState('')
    const handleRating = (rate) => {
        setRating(rate)
    }

    


    if (localStorage.getItem('token') !== null) {
        return <Container>
            {isLoading === true ?  <div className="fidget">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div> : 
            <div class="container">
                <div className='row'>
                    <div className='col-2'>
                        <div id="fotoprofilReview">
                            <img src={fotoprofil} alt="profil" />
                        </div>
                    </div>
                    <div className='col-10'>
                        <div class='commentColumn'>
                            <form onSubmit={handleSubmitReview}>
                                <h4>{localStorage.getItem('username')}</h4>

                                <label htmlFor="rating">Rating: <br /><div className='App'>
                                    <Rating
                                        onClick={handleRating}
                                        ratingValue={rating}
                                        size={40}
                                        label
                                        stars={10}
                                        transition
                                        fillColor='#fe024e'
                                        emptyColor='gray'
                                        className='foo'
                                    />
                                </div></label><br /><br />

                                <textarea id="textareaReview" rows="10" cols="200" form="input" onChange={(e) => setComment(e.target.value)} >
                                    Input your review here</textarea>
                                <br />
                                <button id="reviewButton" type="submit" className="btn">Submit Review</button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
                {reviewMock === [] ? '' : 
                reviewMock.map(reviewMockz => <div className='row' style={{ minHeight: "200px" }} >
                <div className='col-2'>
                    <div id="fotoprofilReview">
                        <img src={fotoprofil} alt="profil" />
                    </div>
                </div>
                <div className='col-10'>
                    <div class='commentColumn'>
                        <div>
                            <h4>{localStorage.getItem('username')}</h4>
                            <label htmlFor="rating"><div className='App'>
                                <Rating
                                    onClick={handleRating}
                                    ratingValue={reviewMockz.rating}
                                    size={20}
                                    label
                                    stars={1}
                                    // transition
                                    fillColor='#fe024e'
                                    emptyColor='gray'
                                    className='foo'
                                />
                            </div></label>
                            <p>{reviewMockz.comment}</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>)}
                {reviews.map(review =>
                    <div className='row' style={{ minHeight: "200px" }} >
                        <div className='col-2'>
                            <div id="fotoprofilReview">
                                <img src={fotoprofil} alt="profil" />
                            </div>
                        </div>
                        <div className='col-10'>
                            <div class='commentColumn'>
                                <div>
                                    <h4>{review.author}</h4>
                                    <label htmlFor="rating"><div className='App'>
                                        <Rating
                                            onClick={handleRating}
                                            ratingValue={review.author_details.rating}
                                            size={20}
                                            label
                                            stars={1}
                                            // transition
                                            fillColor='#fe024e'
                                            emptyColor='gray'
                                            className='foo'
                                        />
                                    </div></label>
                                    <p>{review.content}</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>


              }

        </Container>
    } else {
        return (
            <Container>
                <div class="container">
                    <br /><br /><br />
                    <h3>Log in/Sign up to add your review</h3>
                    <br /><br /><br />
                    {reviews.filter(review => review.movieId === params.id)
                    .map(review =>
                        <div className='row' style={{ minHeight: "200px" }} >
                            <div className='col-2'>
                                <div id="fotoprofilReview">
                                    <img src={fotoprofil} alt="profil" />
                                </div>
                            </div>
                            <div className='col-10'>
                                <div class='commentColumn'>
                                    <div>
                                        <h4>{review.userName}</h4>
                                        <label htmlFor="rating"><div className='App'>
                                            <Rating
                                                onClick={handleRating}
                                                ratingValue={review.rating}
                                                size={40}
                                                label
                                                stars={10}
                                                fillColor='#fe024e'
                                                emptyColor='gray'
                                                className='foo'
                                            />
                                        </div></label>
                                        <p>{review.review}</p>
                                        <hr />
                                    </div>




                                </div>
                            </div>
                        </div>)}
                </div>



            </Container>
        )
    }
}

export default Reviews;
