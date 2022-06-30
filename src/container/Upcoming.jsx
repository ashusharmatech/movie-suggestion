import React, { useContext } from 'react';
import MovieContext from '../MovieContext';
import MovieList from './MovieList';

const Upcoming = () => {
	const { getUpcomingMovies } = useContext(MovieContext);

	return <MovieList title="Upcoming Movies"  getMovie={getUpcomingMovies} />;
};

export default Upcoming;
