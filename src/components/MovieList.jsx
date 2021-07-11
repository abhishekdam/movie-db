import axios from "axios";
import React from "react";
import MovieItem from "./MovieItem";
import { useState, useEffect } from "react";

const MovieList = () => {
   const [item, setItem] = useState([]);

   useEffect(() => {
      const key = "4f9f77f8fef6114d281be6ba0a964e34";

      const getMovieData = async () => {
         const res = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
         );
         setItem(res.data.results);
      };
      getMovieData();
   }, []);

   return (
      <div>
         <div className="container">
            <div className="row">
               {item.map((item) => (
                  <MovieItem key={item.keys} item={item} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default MovieList;
