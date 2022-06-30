import React, { useContext } from 'react';
import { Box, Grid, VStack, Heading, Button, Text } from '@chakra-ui/react';
import Movie from '../Movie';
import _ from 'lodash';
import MovieContext from '../MovieContext';

const Home = () => {
	const { getRandomTrendingMovie, randomMovie, genreList } = useContext(MovieContext);
	
	const getGenre = (value) => {
		let genres = _.filter(genreList, ({ id }) => id === value);
		return genres[0].name;
	};

	return (
		<Box textAlign="center" fontSize="xl">
			<Grid minH="100vh" p={3}>
				<VStack spacing={8}>
					{!randomMovie && (
						<Heading fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
							Finding movie{' '}
							<Text as={'span'} color={'orange.400'}>
								made easy
							</Text>
						</Heading>
					)}
					<Button colorScheme={'blue'} size={'lg'} onClick={() => getRandomTrendingMovie()}>
						What to watch ?
					</Button>
				</VStack>
				{randomMovie && <Movie data={randomMovie} getGenre={getGenre} />}
			</Grid>
		</Box>
	);
};

export default Home;
