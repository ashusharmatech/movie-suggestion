import { Td, Tr } from '@chakra-ui/react';
import React from 'react';

const MovieRow = ({ movie, index }) => {
	return (
			<Tr>
        <Td>{index}</Td>
				<Td>{movie['original_title']}</Td>
        <Td>{movie['release_date']}</Td>
				<Td>{movie['genre_ids']}</Td>
				<Td isNumeric>{movie['vote_average']}</Td>
			</Tr>
	);
};

export default MovieRow;
