import React, { useContext } from 'react';
import MovieContext from '../../MovieContext';
import MoviePage from '../MoviePage';

const PopularTv = () => {
	const { getPopularTv } = useContext(MovieContext);
	return <MoviePage title="Popular TV"  getMovie={getPopularTv} type={"TV"} />;
};

export default PopularTv;
