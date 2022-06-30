import { Box, Button, Grid, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import MovieContext from '../MovieContext';
import MovieList from './MovieList';

const TopRated = () => {
	const { getTopRatedMovies } = useContext(MovieContext);
	return <MovieList title="Top Rated Movies" getMovie={getTopRatedMovies} />;	
};

export default TopRated;
