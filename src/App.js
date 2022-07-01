import React from 'react';
import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './container/Home';
import Popular from './container/Popular';
import Search from './container/Search';
import { MovieProvider } from './MovieContext';
import TopRated from './container/TopRated';
import Upcoming from './container/Upcoming';
import NowPlaying from './container/NowPlaying';

function App() {
  return (
    <MovieProvider>
      <ChakraProvider theme={theme}>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/top" element={<TopRated />} />
          <Route exact path="/popular" element={<Popular />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/upcoming" element={<Upcoming />} />
          <Route exact path="/now_playing" element={<NowPlaying />} />

          <Route exact path="/" element={<Home />} />
        </Routes>
      </ChakraProvider>
    </MovieProvider>
  );
}

export default App;
