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

    useEffect(() => {
        getGenreList();
    }, [])


    const random = (maxNumber) => {
        return Math.floor(Math.random() * maxNumber) + 1;
    };

    //Fetch a Movie
    const getRandomTrendingMovie = () => {
        let tranding_url = MOVIE_API + '/trending/movie/week?api_key=' + API_KEY + '&page=' + random(10);
        axios.get(tranding_url).then((res) => {
            let movieList = res.data.results;
            let movie = movieList[random(movieList.length)];
            setRandomMovie(movie);
        });
    }

    const clean = () => {
        console.log("Clean started ")
        setMovieList([]);
        console.log("Clean complete ")
    }

    const getGenreList = () => {
        let genre_url = MOVIE_API + '/genre/movie/list?api_key=' + API_KEY + '&language=en-US';
        axios.get(genre_url).then((res) => {
            setGenreList(res.data.genres);
        });
    }

    const getTopRatedMovies = (pageNo) => {
        let url = MOVIE_API + '/movie/top_rated?api_key=' + API_KEY + '&language=en-US&page=' + pageNo;
        getMovies(url, pageNo);
    }

    const getUpcomingMovies = (pageNo) => {
        let url = MOVIE_API + '/movie/upcoming?api_key=' + API_KEY + '&language=en-US&page=' + pageNo;
        getMovies(url, pageNo);
    }

    const getPopularMovies = (pageNo) => {
        let url = MOVIE_API + '/movie/popular?api_key=' + API_KEY + '&language=en-US&page=' + pageNo;
        getMovies(url, pageNo);
        
    }

    const getNowPlayingMovies = (pageNo) => {
        let url = MOVIE_API + '/movie/now_playing?api_key=' + API_KEY + '&language=en-US&page=' + pageNo;
        getMovies(url, pageNo);
    }

    const getLatestMovies = (pageNo) => {
        let url = MOVIE_API + '/movie/latest?api_key=' + API_KEY + '&language=en-US&page=' + pageNo;
        getMovies(url, pageNo);
    }

    const getMovies = (url, pageNo) => {
        setLoading(true);
        axios.get(url).then((res) => {
            if (movieList === null) {
                setMovieList([...res.data.results])
            }
            else {
                setMovieList(movieList => [...movieList, ...res.data.results]);
            }
            setLoading(false);
        });
    }

    const getLatestTv = (pageNo) => {
        let url = MOVIE_API + '/tv/latest?api_key=' + API_KEY + '&language=en-US&page=' + pageNo;
        getMovies(url, pageNo);
    }


    const getAiringTodayTv = (pageNo) => {
        let url = MOVIE_API + '/tv/airing_today?api_key=' + API_KEY + '&language=en-US&page=' + pageNo;
        getMovies(url, pageNo);
    }

    const getOnTheAirTv = (pageNo) => {
        let url = MOVIE_API + '/tv/on_the_air?api_key=' + API_KEY + '&language=en-US&page=' + pageNo;
        getMovies(url, pageNo);
    }

    const getPopularTv = (pageNo) => {
        let url = MOVIE_API + '/tv/popular?api_key=' + API_KEY + '&language=en-US&page=' + pageNo;
        getMovies(url, pageNo);
        
    }

    const getTopRatedTv = (pageNo) => {
        let url = MOVIE_API + '/tv/top_rated?api_key=' + API_KEY + '&language=en-US&page=' + pageNo;
        getMovies(url, pageNo);
    }

    return <MovieContext.Provider value={{
        isLoading,
        getRandomTrendingMovie,
        randomMovie,
        getGenreList,
        genreList,
        movieList,
        getTopRatedMovies,
        getPopularMovies,
        getUpcomingMovies,
        getNowPlayingMovies,
        getLatestMovies,
        getLatestTv,
        getAiringTodayTv,
        getOnTheAirTv,
        getPopularTv,
        getTopRatedTv,
        clean
    }}>
        {children}
    </MovieContext.Provider>
}

export default MovieContext