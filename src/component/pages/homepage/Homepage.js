import React, { useState } from "react";
import { Container } from "reactstrap";
import "./../../../css/style.css";
import Carousel from "./Carousel"
import Pagination from "./Pagination"
import Movi from "./Movi"
import Navbar from './../../parts/Navbar'
import Footer from "./../../parts/Footer";


function Homepage() {

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <Carousel />
      <Container>
        <Movi />
      </Container>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer />
    </div>
  );
}

export default Homepage;
