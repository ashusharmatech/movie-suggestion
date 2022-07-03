import {
	Box,
	Center,
	CircularProgress,
	CircularProgressLabel,
	Flex,
	Heading,
	Image,
	useColorModeValue
} from '@chakra-ui/react';
import _ from 'lodash';
import React from 'react';

const MovieCard = ({ data }) => {
	return (
		<Box
			maxW={'250px'}
			width={'100%'}
			bg={useColorModeValue('white', 'gray.900')}
			boxShadow={'2xl'}
			rounded={'lg'}
			overflow={'hidden'}
			_hover={{ bg: useColorModeValue('gray.300', 'gray.700') }}

		>
			<Image objectFit="cover" boxSize="100%" src={'https://image.tmdb.org/t/p/original' + data.poster_path} />
			<Flex justify={'center'} mt={-5}>
				<CircularProgress
					value={data['vote_average'] * 10}
					bg={useColorModeValue('gray.100', 'gray.800')}
					borderWidth="5px"
					borderRadius={'50%'}
					size="50px"
				>
					<CircularProgressLabel>{data['vote_average'] * 10}%</CircularProgressLabel>
				</CircularProgress>
			</Flex>
			<Heading fontSize={'m'} fontFamily={'body'}>
				{data['original_title']}
			</Heading>
			<Heading fontSize={'sm'} fontFamily={'body'}>
				{data['release_date']}
			</Heading>
		</Box>
	);
};

export default MovieCard;
