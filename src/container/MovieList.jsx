import {
	Box,
	Button,
	Grid,
	Heading,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Text,
	Tfoot,
	Th,
	Thead,
	Tr,
	VStack
} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import MovieContext from '../MovieContext';
import MovieRow from './MovieRow';

const MovieList = ({title,  getMovie }) => {
	const { movieList, isLoading, clean } = useContext(MovieContext);

	const [ pageNo, setPageNo ] = useState(1);

	useEffect(() => {
		console.log('seeffect is getting called ');
		clean();
		getMovie(pageNo);
	}, []);

	const loadMore = () => {
		getMovie(pageNo);
		setPageNo(pageNo + 1);
	};

	return (
		<Box textAlign="center" overflowX="scroll">
			<Grid minH="100vh" p={3}>
				<VStack spacing={8}>
					<Heading fontWeight={400} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }} lineHeight={'90%'}>
						<Text as={'span'} color={'pink.400'}>
							{title}
						</Text>
					</Heading>
					<TableContainer>
						<Table variant="simple" colorScheme="pink" maxWidth="70%" align="center" size="sm">
							<TableCaption>
								<Button onClick={loadMore}>Load more</Button>
							</TableCaption>
							<Thead>
								<Tr>
									<Th>No</Th>
									<Th>Title</Th>
									<Th>Relese Date</Th>
									<Th>Genres</Th>
									<Th isNumeric>Vote Average</Th>
								</Tr>
							</Thead>
							<Tbody>
								{!isLoading &&
									movieList.map(function(movie, i) {
										return <MovieRow movie={movie} index={i + 1} key={i} />;
									})}
							</Tbody>
							<Tfoot>
								<Tr>
									<Th>No</Th>
									<Th>Title</Th>
									<Th>Relese Date</Th>
									<Th>Genres</Th>
									<Th isNumeric>Vote Average</Th>
								</Tr>
							</Tfoot>
						</Table>
					</TableContainer>
				</VStack>
			</Grid>
		</Box>
	);
};

export default MovieList;
