import { useState, useRef, useEffect } from 'react'; 
import Map from './Components/Map';
import Search from './Components/Search';
import React from 'react';
const Dashboard = () => {
    const [mapData, setMapData] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(() =>{
        setLoaded(true)
    })
    const handle_search = (e) => {
    }
    return (
        <div className='w-full  flex-col h-full'>
            <Search className='w-full' />

            <Map className='w-full'/>
            

            
        </div>
    )
}
export default Dashboard;