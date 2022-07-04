import React from 'react';
import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './container/Home';
import { MovieProvider } from './MovieContext';

import { NowPlaying, Popular, TopRated, Upcoming } from './container/movies';
import { PopularTv, TopRatedTv, TvArrivingToday, TvOnAirToday } from './container/tv';

function App() {
  return (
    <MovieProvider>
      <ChakraProvider theme={theme}>
        <Navbar></Navbar>
        <Routes>
          
          <Route exact path="/home" element={<Home />} />
          
          <Route exact path="/tv/popular" element={<PopularTv />} />
          <Route exact path="/tv/top_rated" element={<TopRatedTv />} />
          <Route exact path="/tv/arriving_today" element={<TvArrivingToday />} />
          <Route exact path="/tv/on_air_today" element={<TvOnAirToday />} />
          <Route exact path="/movie/top_rated" element={<TopRated />} />
          <Route exact path="/movie/popular" element={<Popular />} />
          <Route exact path="/movie/upcoming" element={<Upcoming />} />
          <Route exact path="/movie/now_playing" element={<NowPlaying />} />
          <Route exact path="/" element={<Home  />} />
        </Routes>
      </ChakraProvider>
    </MovieProvider>
  );
}

export default App;
