import React, { useState, useEffect,useRef  } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import * as L from 'leaflet';


const UKMap = (props) => {
  const [latLong, setLatLong] = useState([])
//   let navigate = useNavigate();
  const [siteCoords, setSiteCoords] = useState([])
  const [mapJobs, setMapsJobs] = useState()
  const [loaded, setLoaded] = useState(false)
  const [rag, setRag] = useState({})

  const LeafIcon = L.Icon.extend({
    options: {}
  });

  



  const greenIcon = new LeafIcon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png'
  });
  const redIcon = new LeafIcon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png'
  });

  const orangeIcon = new LeafIcon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png'
  });



  return (
    <>
    {
      loaded &&
      <MapContainer className="w-full h-full" center={[52.5781, -1.8]}  zoom={7.25}>
        <TileLayer className="w-full h-full"
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />



      </MapContainer>
    }
    
    </>
    );
};

export default UKMap;