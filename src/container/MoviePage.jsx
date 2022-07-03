import { Box, Button, Grid, GridItem, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import MovieCard from '../component/MovieCard';
import MovieContext from '../MovieContext';

const MoviePage = ({ title, getMovie }) => {
	const { movieList, clean } = useContext(MovieContext);
	const [ pageNo, setPageNo ] = useState(1);

	useEffect(() => {
		clean();
		getMovie(pageNo);
	}, []);

	const loadMore = () => {
		getMovie(pageNo);
		setPageNo(pageNo + 1);
	};

	return (
		<Box textAlign="center" fontSize="xl">
			<Grid minH="100vh" p={3}>
				<Stack spacing={8}>
					<Heading fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}>
						{title}
					</Heading>
					<Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr) )" gap={4}>
						{movieList &&
							movieList.map((movie, i) => (
								<GridItem>
									<MovieCard data={movie} key={i} />
								</GridItem>
							))}
					</Grid>
				</Stack>
			</Grid>
			<Button
				px={8}
				bg={useColorModeValue('blue.900', 'blue.200')}
				color={'white'}
				rounded={'md'}
				_hover={{
					transform: 'translateY(-2px)',
					boxShadow: 'lg'
				}}
				onClick={loadMore}
			>
				Load more
			</Button>
		</Box>
	);
};

export default MoviePage;
