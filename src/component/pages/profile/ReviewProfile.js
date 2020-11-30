import { useEffect, useState } from 'react';
import MovieOfReviewP from './MovieOfReviewP';
import './../../../css/reviewProfile.css'
import UpdateReview from './UpdateReview';
import axios from 'axios'


const ReviewProfile = (props) => {


  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch(
      `https://5fa8da99c9b4e90016e69b15.mockapi.io/userprofile/user-review`
    )
      .then((result) => result.json())
      .then((response) => setReviews(response));
  }, [])

  const [reviewSubmenu, setReviewSubmenu] = useState('review')

  const handleClick = (e) => {
    setReviewSubmenu('editReview')
    localStorage.setItem('mananich', `${e.target.value}`)
    localStorage.setItem('reviewId', `${e.target.id}`)
    localStorage.setItem('reviewSubmenu', 'editReview')
  }



  if (reviewSubmenu === 'review') {
    return (
      <div className="container">
        <div className="row">
          {reviews.map((reviewed) => (
            <div className="reviewBox my-3">
              <div className='theAncientOnes'>
                <MovieOfReviewP movie={reviewed.movieId} />
              </div>
              <div className="reviewData">
                <button id={reviewed.id} value={reviewed.movieId} onClick={(e) => handleClick(e, 'value')} className='editIcon btn-secondary mx-2'>Edit/Delete</button>
                <div className="container">
                  <h3>Rating: <p>{reviewed.rating}</p></h3>
                  <h3>Review:
                <br /><p>"{reviewed.comment}"</p></h3>
                </div>

              </div>
            </div>
          ))}
        ;
      </div>
      </div>
    )
  } else {
    return (
      <div className="container">
        <UpdateReview />
      </div>
    );
  }

}

export default ReviewProfile;