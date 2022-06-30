import React, { useContext } from 'react';
import MovieContext from '../MovieContext';
import MovieList from './MovieList';

const Upcoming = () => {
	const { getUpcomingMovies } = useContext(MovieContext);

	return <MovieList getMovie={getUpcomingMovies} />;
};

export default Upcoming;
