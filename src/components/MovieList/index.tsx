"use client";

import { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import MovieCard from "../MovieCard";
import { Movie } from "@/types/movie";



export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "0d5a0a06bcdbbf9f6439b72b820cb3e6",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results);
    });
  };

  return (
    
      <ul className="movie-list">
        {movies.map((movie) => 

           <MovieCard 

            key={movie.id}
            movie= {movie}
          
          />

        )}
      </ul>
    
  );
}
