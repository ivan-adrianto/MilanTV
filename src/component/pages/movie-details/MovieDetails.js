import React, { Component } from "react";
import Navbar from "./../../parts/Navbar";
import Footer from "../../parts/Footer";
import "./../../../css/MovieDetails.css";
import { withRouter } from "react-router-dom";
import Characters from "./../movie-details/Characters";
import axios from "axios";
import Reviews from './Reviews'
import Overview from './Overview'
import star from './../../../img/star.svg'
import chatbox from './../../../img/chat.svg'


class MovieDetails extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
            isLoading: false,
            characterList: [],
            submenu: 'overview',
            watch: false
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=8508a0bd1efc493c4bfa095b6a37f250&language=en-US`
        )
            .then((result) => result.json())
            .then((response) =>
                this.setState({
                    data: response,
                    isLoading: false,
                })
            );
        fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=8508a0bd1efc493c4bfa095b6a37f250`
        )
            .then((result) => result.json())
            .then((response) =>
                this.setState({
                    characterList: response.cast,
                    isLoading: false,
                })
            );
    }

    handleInput(e) {
        this.setState({
            submenu: e.target.value
        });
    }

    handlerClick(e) {
        const id = this.props.match.params.id;
        axios({
            method: 'post',
            url: 'https://5fa8da99c9b4e90016e69b15.mockapi.io/userprofile/watchlist',
            data: {
                movieId: id
            }
        });
        this.setState({
            watch: true
        })
    }



    render() {
        const id = this.props.match.params.id
        const coba1 =
            <div>
                <Navbar />
                <section
                    id="home"
                    className="banner d-flex position-relative cover hero"
                    style={{
                        backgroundImage: `url(http://image.tmdb.org/t/p/w185/${this.state.data.backdrop_path})`,
                    }}>
                    <div className="movie-details container-sm container-md container-lg container-xl container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                                <div className="title-movie">
                                    <h1 className="text-white teks-banner">
                                        {this.state.data.original_title}
                                    </h1>
                                </div>
                                <div className="glimpse">
                                    <h4> <img className='rating-icon' src={star} alt="star" />: {this.state.data.vote_average} /10</h4>
                                    <h5> <img className='comment-icon' src={chatbox} alt="" />
                                        {this.state.data.vote_count} reviews</h5>
                                </div>

                            </div>
                            <p className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 description">{this.state.data.overview ? this.state.data.overview.length > 300 ? `${this.state.data.overview.slice(0, 250)} ... (continue to read below)` : this.state.data.overview : ''}</p>
                            <div className="col-12 action-button">
                                <a
                                    className="trailer btn bg-red text-white mr-2 font-weight-bold"
                                    href=''
                                    role="button"
                                >
                                    <span>Watch Trailer</span>
                                </a>
                                {localStorage.getItem('token') !== null ?
                                    <a
                                        className={`watchlist btn bg-red text-white font-weight-bold ${this.state.watch === true ? 'watchlist-active' : ''}${localStorage.getItem('token' === null) ? 'watchlist-nonactive' : ''}`}
                                        value={this.props.match.params.id}
                                        role="button" onClick={(e) => this.handlerClick(e, 'value')}
                                    >
                                        {this.state.watch == true ? <span>Added to Your Watchlist!</span> : <span>Add to Watchlist</span>}
                                    </a> : ''}

                            </div>
                        </div>
                    </div>
                </section>
                <div className="mau-apa container">
                    <button className={`submenu btn ${this.state.submenu === 'overview' ? 'submenu-active' : ''}`} value='overview' onClick={(e) => this.handleInput(e, 'value')}>Overview</button>
                    <button className={`submenu btn ${this.state.submenu === 'characters' ? 'submenu-active' : ''}`} value='characters' onClick={(e) => this.handleInput(e, 'value')}>Characters</button>
                    <button className={`submenu btn ${this.state.submenu === 'reviews' ? 'submenu-active' : ''}`} value='reviews' onClick={(e) => this.handleInput(e, 'value')}>Reviews</button>
                </div>
            </div>
        if (this.state.submenu === 'characters') {
            return <div>
                {coba1}
                <Characters characters={this.state.characterList} />
                <Footer />
            </div>
        } else if (this.state.submenu === 'overview') {
            return <div>
                {coba1}
                <Overview overviews={this.state.data} />
                <Footer />
            </div>
        } else {
            return <div>
                {coba1}
                <Reviews /> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Footer />
            </div>
        }
    }
}

export default withRouter(MovieDetails);
