import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



import UKMap from './Components/Map';

function App() {

  
  return (
    <div className="bg-gray-300 w-full h-full">
        
        <UKMap className='w-2/3 h-2/3' />

    </div>
  );
}

export default App;
