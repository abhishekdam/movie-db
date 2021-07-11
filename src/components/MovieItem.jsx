import React from "react";

const MovieItem = ({ item }) => {
   const base_url = "https://image.tmdb.org/t/p/w500/";

   return (
      <div className="card col-lg-2 moviecard">
         <img
            className="img-fluid"
            src={`${base_url}${item.poster_path}`}
            alt="img"
         />
         <div className="card-body">
            <h3>Rating : {item.vote_average}</h3>
         </div>
      </div>
   );
};

export default MovieItem;
