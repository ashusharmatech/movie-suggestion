import React, { useContext } from 'react';
import MovieContext from '../../MovieContext';
import MoviePage from '../MoviePage';

const Upcoming = () => {
	const { getUpcomingMovies } = useContext(MovieContext);
	return <MoviePage title="Upcoming Movies"  getMovie={getUpcomingMovies} />;
};

export default Upcoming;
