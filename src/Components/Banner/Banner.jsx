import React, { useEffect, useState } from 'react';
import "./Banner.css";
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../Constants/Constants';

function Banner() {
  const [movie, setMovie] = useState(null);
  const [trailerId, setTrailerId] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const moviesList = response.data.results;
        if (moviesList && moviesList.length > 0) {
          setMovie(moviesList[0] || moviesList[1]); // Pick 2nd movie, fallback to 1st
        }
      })
      .catch((error) => {
        console.error("Error fetching banner movie:", error);
      });
  }, []);

  // Handle Play Button Click (Fetch Trailer)
  const handlePlay = () => {
    if (!movie) return;

    axios.get(`/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length > 0) {
          setTrailerId(response.data.results[0].key);
          window.open(`https://www.youtube.com/watch?v=${response.data.results[0].key}`, '_blank');
        } else {
          alert("No trailer available for this movie.");
        }
      })
      .catch((error) => {
        console.error("Error fetching video:", error);
      });
  };

  // Handle My List Button Click
  const handleMyList = () => {
    if (!movie) return;

    const updatedList = [...watchlist, movie];
    setWatchlist(updatedList);
    localStorage.setItem('watchlist', JSON.stringify(updatedList));
    alert(`${movie.title || movie.name} added to your watchlist!`);
  };

  return (
    <div 
      className='banner' 
      style={{ backgroundImage: movie ? `url(${imageUrl + movie.backdrop_path})` : "none" }}
    >
      <div className='content'>
        <h1 className='title'>{movie ? movie.title || movie.name : "Loading..."}</h1>
        <div className='banner-buttons'>
          <button className='button' onClick={handlePlay}>Play</button>
          <button className='button' onClick={handleMyList}>My List</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : "No description available"}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
