import React, { useContext } from 'react';
import MovieContext from '../../MovieContext';
import MoviePage from '../MoviePage';

const TopRated = () => {
	const { getTopRatedMovies } = useContext(MovieContext);
	return <MoviePage title="Top Rated Movies" getMovie={getTopRatedMovies} />;	
};

export default TopRated;
