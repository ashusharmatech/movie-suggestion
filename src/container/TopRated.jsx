import React, { useContext } from 'react';
import MovieContext from '../MovieContext';
import MovieList from './MovieList';

const TopRated = () => {
	const { getTopRatedMovies } = useContext(MovieContext);
	return <MovieList title="Top Rated Movies" getMovie={getTopRatedMovies} />;	
};

export default TopRated;
