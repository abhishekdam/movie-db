import "./App.css";

import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";

function App() {
   return (
      <div className="App">
         <NavBar></NavBar>
         <MovieList></MovieList>
      </div>
   );
}

export default App;
