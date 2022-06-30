import React, { useContext } from 'react';
import MovieContext from '../MovieContext';
import MovieList from './MovieList';

const Popular = () => {
	const { getPopularMovies } = useContext(MovieContext);

	return <MovieList title="Popular Movies"  getMovie={getPopularMovies} />;
};

export default Popular;
