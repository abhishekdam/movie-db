import React from "react";

import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import axios from "axios";

const MovieList = () => {

   const [items, seTitems] = useState([]);

   useEffect(() => {
      const key = "4f9f77f8fef6114d281be6ba0a964e34";

      const getMovieData = async () => {
         const res = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
         );
         seTitems(res.data.results);
      };
      getMovieData();
   }, []);

   return (
      <>
         <div className="container">
            <div className="row">
               {items.map((item) => (
                  <MovieItem key={item.id} item={item}></MovieItem>
               ))}
            </div>
         </div>
      </>
   );
};

export default MovieList;
