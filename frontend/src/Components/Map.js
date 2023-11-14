import React, { useState, useEffect,useRef  } from "react";
import { MapContainer, TileLayer, useMap, GeoJSON, Marker, Popup } from 'react-leaflet'
// import map_data from "./mygeodata_merged.json";
import * as L from 'leaflet';
// import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
const UKMap = (props) => {
  const [latLong, setLatLong] = useState([])
  // let navigate = useNavigate();
  const [siteCoords, setSiteCoords] = useState([])
  const [mapJobs, setMapsJobs] = useState()
  const [loaded, setLoaded] = useState(false)
  const [rag, setRag] = useState({})

  useEffect(() => {
    if (props.data !== undefined) {
      setMapsJobs(props.data)
      // mapJobs.map((site) => {
      //   axiosInstance.get(`/api/sitestatus/get_rag_site?site=${site.site_guid}`, {
      //   }
      //   ).then(data => {
      //     console.log(data)
      //     setRag({ ...rag, [site.site_guid] : data.data.rag_status })
      //   });
      //   })


      setLoaded(true)
    } 
    else {
      setMapsJobs([])
      setLoaded(true)
    }
    
  }, [props.data])

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




  const satelliteTileUrl = 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamFkZW42cjZyd2Fsa2VyMSIsImEiOiJjbG81a2N3b3gwYjR0Mmxueml5cXc2M2E1In0.wfdmXr7W3w7S76Kc6uAGVg';


  const viewSite = (id) => {
    // navigate(`/search/view/site/${id}`)
  }
  return (
    <div className="w-full h-5/6">

      <MapContainer className="w-full h-full" center={[51.5223, 2.6330]}  zoom={9} scrollWheelZoom={true}>
        <TileLayer className="w-full h-full"
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

              <Marker icon={greenIcon}  position={[51.514737,-2.593722]}>
              <Popup>
              <h1>BS10 6LX</h1>
              <h2>Valuation: £256,000</h2>
              <h2>EPC: E</h2>
              <h2>Listed Building?: N</h2>

              {/* <button onClick={()=>viewSite()}>View Site Details</button> */}
              </Popup>
              </Marker>
        

      </MapContainer>
    
    </div>
    );
};

export default UKMap;