import React, { useContext } from 'react';
import MovieContext from '../../MovieContext';
import MoviePage from '../MoviePage';

const TopRatedTv = () => {
	const { getTopRatedTv } = useContext(MovieContext);
	return <MoviePage title="Top Rated Shows"  getMovie={getTopRatedTv} type={"TV"} />;
};

export default TopRatedTv;
