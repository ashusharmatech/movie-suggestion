import React, { useContext } from 'react';
import MovieContext from '../../MovieContext';
import MoviePage from '../MoviePage';

const TvOnAirToday = () => {
	const { getOnTheAirTv } = useContext(MovieContext);
	return <MoviePage title="On Air Today Tv" getMovie={getOnTheAirTv} type={"TV"} />;
};

export default TvOnAirToday;
