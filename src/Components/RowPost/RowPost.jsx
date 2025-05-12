import React, { useEffect, useState } from 'react';
import './RowPost.css';
import YouTube from 'react-youtube';
import axios from "../../axios";
import { API_KEY, imageUrl } from '../../Constants/Constants';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  const[urlid,setUrlId]=useState('');
  const handleOpenModal = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        if (response.data.results.length!==0) {
          setUrlId(response.data.results[0].key); // Set first video ID
        } else {
          console.log("No videos found");
        }
      })
      .catch(error => {
        console.error("Error fetching video:", error);
      });
  };
  
  useEffect(() => {
    axios.get(`${props.url}`)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results); // Ensure results exist
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img  onClick={() => handleOpenModal(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster"  key={obj.id} />
        
        ))}
       


      </div>
     {urlid && < YouTube videoId={urlid} opts={opts}/>}

    </div>
  );
}

export default RowPost;
