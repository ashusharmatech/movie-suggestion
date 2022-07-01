import React, { useContext } from 'react';
import MovieContext from '../MovieContext';
import MovieList from './MovieList';

const NowPlaying = () => {
	const { getNowPlayingMovies } = useContext(MovieContext);

	return <MovieList title="Now Playing Movies"  getMovie={getNowPlayingMovies} />;
};

export default NowPlaying;
