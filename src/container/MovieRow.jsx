import { Badge, Stack, Td, Text, Tr } from '@chakra-ui/react';
import _ from 'lodash';
import React, { useContext } from 'react';
import MovieContext from '../MovieContext';

const MovieRow = ({ movie, index }) => {
	const { genreList } = useContext(MovieContext);

	const getGenre = (value) => {
		let genres = _.filter(genreList, ({ id }) => id === value);
		return genres[0]?.name;
	};

	return (
		<React.Fragment>
			{genreList && (
				<Tr>
					<Td>{index}</Td>
					<Td>{movie['original_title']}</Td>
					<Td>{movie['release_date']}</Td>
					<Td>
						<Stack align={'center'} direction={'row'}>
							{/* {JSON.stringify(movie['genre_ids'])} */}
							{movie['genre_ids'].map((item, i) => (
								<Badge key={i} p={1} fontWeight={'400'}>
									<Text>{getGenre(item)}</Text>
								</Badge>
							))}
						</Stack>
					</Td>

					<Td isNumeric>{movie['vote_average']}</Td>
				</Tr>
			)}
		</React.Fragment>
	);
};

export default MovieRow;
