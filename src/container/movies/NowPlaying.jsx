import React, { useContext } from 'react';
import MovieContext from '../../MovieContext';
import MoviePage from '../MoviePage';

const NowPlaying = () => {
	const { getNowPlayingMovies } = useContext(MovieContext);
	return <MoviePage title="Now Playing Movies" getMovie={getNowPlayingMovies} />;
};

export default NowPlaying;
