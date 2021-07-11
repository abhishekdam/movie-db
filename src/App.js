import React from "react";

import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";

const App = () => {
   return (
      <div>
         <NavBar />
         <MovieList />
      </div>
   );
};

export default App;
