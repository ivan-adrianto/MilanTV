import { useEffect, useState } from 'react'
import axios from 'axios'
import './../../../css/updateReview.css'
import { useHistory } from 'react-router-dom'
import ReviewProfile from './ReviewProfile'
import Rating from 'react-simple-star-rating'


const UpdateReview = (props) => {

    const [tesDisplay, setTesDisplay] = useState([])

    const [movie, setMovie] = useState(0)
    const [dropdown, setDropdown] = useState(tesDisplay.rating)
    const [review, setReview] = useState(tesDisplay.comment)
    const [backSummon, setBackSummon] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [reviews, setReviews] = useState ([tesDisplay])

    const handlerClick = (e) => {


        setIsLoading(true)
        axios({
            method: 'put',
            url: `https://5fa8da99c9b4e90016e69b15.mockapi.io/userprofile/user-review/${localStorage.getItem('reviewId')}`,
            data: {
                rating: rating,
                comment: review
            }
        }).then(() => {
            setBackSummon('come')
            setIsLoading(false)
        })
    }

    const handlerChange = (e) => {
        setReview(e.target.value)
    }

    const handlerDropdown = (e) => {
        setDropdown(e.target.value)
    }

    const [submenu, setSubmenu] = useState('update')

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://5fa8da99c9b4e90016e69b15.mockapi.io/userprofile/user-review/${localStorage.getItem('reviewId')}`)
            .then(res => setTesDisplay(res.data))
        axios.get(`https://api.themoviedb.org/3/movie/${localStorage.getItem('mananich')}?api_key=8508a0bd1efc493c4bfa095b6a37f250&language=en-US`)
            .then(res => {
                setMovie(res.data)
                setIsLoading(false)
            })

    }, [])


    const [rating, setRating] = useState(tesDisplay.rating)
    const handleRating = (rate) => {
        setRating(rate)
        setReview()
    }

    let history = useHistory()
    const handleDeleteFinal = () => {
        setIsLoading(true)
        axios.delete(`https://5fa8da99c9b4e90016e69b15.mockapi.io/userprofile/user-review/${localStorage.getItem('reviewId')}`)
            .then(() => {
                setSubmenu('review')
                })
            .then ( axios.get(`https://5fa8da99c9b4e90016e69b15.mockapi.io/userprofile/user-review/${localStorage.getItem('reviewId')}`)
            .then(res => {
                setTesDisplay(res.data)
                setIsLoading(false)
            }))
        
    }


    if (isLoading === true) {
        return (
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        )
    } else {
        if (submenu === 'review') {
            return <ReviewProfile />
        } else {
            return (
                <div className='updateReview'>
                    <h3>Update Your Review</h3>
                    <div className="container">
                        <div className="reviewBox finalDeletion">
                            <div className="deleteFinal">
                                <button value={tesDisplay.id} onClick={handleDeleteFinal}>Delete This Review</button>
                            </div>

                            <h1>{movie.original_title}</h1>
                            <form>

                                <label htmlFor="rating">Rating: <div className='App'>
                                    <Rating
                                        onClick={handleRating}
                                        ratingValue={rating}
                                        size={40}
                                        label
                                        stars={10}
                                        transition
                                        fillColor='white'
                                        emptyColor='gray'
                                        className='foo'
                                    />
                                </div></label><br />
                                <label htmlFor="comment">Review</label><br />
                                <textarea name="comment" id="comment" cols="60" rows="8" defaultValue={tesDisplay.comment} onChange={(e) => handlerChange(e, 'value')}></textarea>
                                <button className={`editIcon btn-secondary ${backSummon !== 'come' ? 'save-active' : ''}`} type='button' onClick={handlerClick}>{backSummon === 'come' ? 'Updated!' : 'Save'}</button>
                                <button className={`backIcon ${backSummon === 'come' ? 'back-active' : ''}`} type='submit'>Back</button>
                            </form>
                        </div>
                    </div>

                </div>
            );
        }

    }

}

export default UpdateReview;