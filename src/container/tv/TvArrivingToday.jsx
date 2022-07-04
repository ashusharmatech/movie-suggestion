import React, { useContext } from 'react';
import MovieContext from '../../MovieContext';
import MoviePage from '../MoviePage';

const TvArrivingToday = () => {
	const { getAiringTodayTv } = useContext(MovieContext);
	return <MoviePage title="Arriving Today Tv" getMovie={getAiringTodayTv} type={"TV"} />;
};

export default TvArrivingToday;
