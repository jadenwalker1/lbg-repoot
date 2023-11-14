import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import  Search from './Components/Search'

import Dashboard from './Dashboard'
import UKMap from './Components/Map';
import React from 'react';

function App() {

  const [loaded, setLoaded] = useState(false)
  return ( 
    <Dashboard />

  )
}

export default App;
