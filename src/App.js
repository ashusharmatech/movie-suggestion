import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Button,
  Heading,
  Text
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import axios from 'axios';
import Movie from './Movie';
import _ from 'lodash';
import Navbar from './Navbar';

function App() {

  const random = (maxNumber) => {
    return Math.floor(Math.random() * maxNumber) + 1;
  }

  const API_KEY = process.env.REACT_APP_API_KEY

  const [movie, setMovie] = useState();
  const [genreMap, setGenreMap] = useState();
  const getMovie = () => {
    let tranding_url = "https://api.themoviedb.org/3/trending/movie/week?api_key=" + API_KEY + "&page=" + random(10);
    axios.get(tranding_url)
      .then(res => {
        console.log(res.data);
        let movieList = res.data.results;
        let m = movieList[random(movieList.length)];
        console.log(m);
        setMovie(m);
      })
  }

  const getGenre = (value) => {
    let genres = _.filter(genreMap, ({ id }) => id === value);
    return genres[0].name
  }


  useEffect(() => {
    let genre_url = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY + "&language=en-US";
    axios.get(genre_url)
      .then(res => {
        setGenreMap(res.data.genres);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <ChakraProvider theme={theme}>
      <Navbar></Navbar>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            {!movie && <Heading
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              Finding movie{' '}
              <Text as={'span'} color={'orange.400'}>
                made easy
              </Text>
            </Heading>}
            <Button colorScheme={'blue'} size={'lg'} onClick={() => getMovie()}>
              What to watch ?
            </Button>
          </VStack>
          {movie && <Movie data={movie} getGenre={getGenre}></Movie>}
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
