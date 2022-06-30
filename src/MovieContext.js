import { createContext, useState, useEffect } from 'react'
import axios from 'axios';

const MovieContext = createContext()

export const MovieProvider = ({ children }) => {

    const MOVIE_API = "https://api.themoviedb.org/3";
	const API_KEY = process.env.REACT_APP_API_KEY;
    const [isLoading, setLoading] = useState(true);
    const [randomMovie, setRandomMovie] = useState();
    const [genreList, setGenreList] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getGenreList();
    }, [])

    const random = (maxNumber) => {
		return Math.floor(Math.random() * maxNumber) + 1;
	};

    //Fetch a Movie
    const getRandomTrendingMovie = () => {
        let tranding_url = MOVIE_API+'/trending/movie/week?api_key=' + API_KEY + '&page=' + random(10);
		axios.get(tranding_url).then((res) => {
			let movieList = res.data.results;
			let movie = movieList[random(movieList.length)];
			setRandomMovie(movie);
		});
    }

    const getGenreList = () => {
        let genre_url =  MOVIE_API+'/genre/movie/list?api_key=' + API_KEY + '&language=en-US';
		axios.get(genre_url).then((res) => {
			setGenreList(res.data.genres);
		});
    }

    const getTopRatedMovies = () => {
        setLoading(true);
        let top_rated_url =  MOVIE_API+'/movie/top_rated?api_key=' + API_KEY + '&language=en-US&page=' + page;
		axios.get(top_rated_url).then((res) => {
            if(movieList === null){
                setMovieList([...res.data.results])
            }
            else{
                setMovieList(movieList => [...movieList, ...res.data.results]);
            }
            setPage(page+1);
            setLoading(false);
		});
    }

    return <MovieContext.Provider value={{
        isLoading,
        getRandomTrendingMovie,
        randomMovie,
        getGenreList,
        genreList,
        movieList,
        isLoading,
        getTopRatedMovies

    }}>
        {children}
    </MovieContext.Provider>
}

export default MovieContext