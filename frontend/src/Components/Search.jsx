import React from 'react'
import { useState } from 'react';

export default function Search() {
    const [sites, setSites] = useState([])
    const handle_search = (e) => {
        var search_term = document.getElementById('default-search').value;
        fetch('http://api.postcodes.io/postcodes?q='+search_term)
        .then(response => response.json()).then( response =>
            setSites(response.data)
        )
    }

  return (
       <div className='w-full'>
            <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none " placeholder="Search..." required />
                            <button onClick={((e)=>handle_search(e))} className="text-gray-600 absolute right-2.5 bottom-2.5 bg-black hover:bg-esurv-amber focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:focus:ring-blue-800">Search</button>
                        </div>
        </div>
  )
}
