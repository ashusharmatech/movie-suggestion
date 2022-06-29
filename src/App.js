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
import _ from 'lodash';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './container/Home';
import Popular from './container/Popular';
import Search from './container/Search';

function App() {


  return (
    <ChakraProvider theme={theme}>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/popular" element={<Popular />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
