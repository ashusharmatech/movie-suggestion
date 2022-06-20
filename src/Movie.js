import React from 'react'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Badge,
  SimpleGrid,
} from '@chakra-ui/react';

const Movie = ({ data, getGenre }) => {
  return (
    <Center py={6}>
      <Box
        maxW={'800px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        justifyContent={'center'}>
        <Box
          h={'350px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <Center>

            <Image
              src={
                'https://image.tmdb.org/t/p/original' + data.poster_path
              }
              layout={'fill'}
              height={'350px'}
              align={'center'}
            />
          </Center>
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {data.original_title}
          </Heading>
          <Text color={'gray.500'}>
            {data.overview}
          </Text>
        </Stack>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          {data?.genre_ids?.map((item, i) =>
            <Badge
              key={i}
              px={2}
              py={1}
              fontWeight={'400'}>
              <Text>{getGenre(item)}</Text>
            </Badge>
          )}
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Text
              fontFamily={'heading'}
              fontSize={'3xl'}
              color={useColorModeValue('gray.400', 'gray.900')}
              mb={3}>
              {data.popularity}
            </Text>
            <Text fontSize={'xl'} color={useColorModeValue('gray.500', 'gray.800')}>
              Popularity
            </Text>
          </Box>
          <Box>
            <Text
              fontFamily={'heading'}
              fontSize={'3xl'}
              color={useColorModeValue('gray.400', 'gray.900')}
              mb={3}>
              {data.vote_count}
            </Text>
            <Text fontSize={'xl'} color={useColorModeValue('gray.500', 'gray.800')}>
              Vote count
            </Text>
          </Box>
          <Box>
            <Text
              fontFamily={'heading'}
              fontSize={'3xl'}
              color={useColorModeValue('gray.400', 'gray.900')}
              mb={3}>
              {data.release_date}
            </Text>
            <Text fontSize={'xl'} color={useColorModeValue('gray.500', 'gray.800')}>
              Relese Date
            </Text>
          </Box>
          <Box>
            <Text
              fontFamily={'heading'}
              fontSize={'3xl'}
              color={useColorModeValue('gray.400', 'gray.900')}
              mb={3}>
              {data.vote_average}
            </Text>
            <Text fontSize={'xl'} color={useColorModeValue('gray.500', 'gray.800')}>
              Vote Average
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Center>
  )
}

export default Movie