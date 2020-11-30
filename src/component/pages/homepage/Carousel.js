import React, { useEffect, useState } from 'react';
import "./../../../css/style.css";
import dark from './../../../img/darkknight2.jpg'
import dots from './../../../img/Joker.jpg'
import got from './../../../img/got2.jpg'
import star from './../../../img/star.svg'
import comment from './../../../img/chat.svg'


const Carousel = () => {

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={dark} className="gambar" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Editor's Picks</h2>
                            <h1>The Dark Knight</h1>
                            <div className="accesories d-flex">
                                <div className="rating-caro d-flex">
                                    <img src={star} className='star-icon' alt="star" />
                                    <h3>: 9/10</h3>
                                </div>
                                <div className="review-caro d-flex">
                                    <img src={comment} alt="comment" />
                                    <h4>: 1</h4>
                                </div>
                            </div>
                            <p>Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={dots} className="gambar" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Editor's Picks</h2>
                            <h1>Joker</h1>
                            <div className="accesories d-flex">
                                <div className="rating-caro d-flex">
                                    <img src={star} className='star-icon' alt="star" />
                                    <h3>: 8/10</h3>
                                </div>
                                <div className="review-caro d-flex">
                                    <img src={comment} alt="comment" />
                                    <h4>: 1</h4>
                                </div>
                            </div>
                            <p>During the 1980s,a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={got} className="gambar" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Editor's Picks</h2>
                            <h1>Game of Thrones</h1>
                            <div className="accesories d-flex">
                                <div className="rating-caro d-flex">
                                    <img src={star} alt="star" className='star-icon' />
                                    <h3>: 9/10</h3>
                                </div>
                                <div className="review-caro d-flex">
                                    <img src={comment} alt="comment" />
                                    <h4>: 1</h4>
                                </div>
                            </div>
                            <p>Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. </p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel;