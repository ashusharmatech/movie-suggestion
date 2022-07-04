import React, { useContext } from 'react';
import MovieContext from '../../MovieContext';
import MoviePage from '../MoviePage';

const Popular = () => {
	const { getPopularMovies } = useContext(MovieContext);
	return <MoviePage title="Popular Movies"  getMovie={getPopularMovies} />;
};

export default Popular;
