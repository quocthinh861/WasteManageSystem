/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import RoutineMachine from './RoutingMachine';

const position = [10.7724483, 106.6582936];

const maps = {
  base: "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=gGCh0FCy8fIynFL9Aksz"
};

const AppMap = () => {
  
  //Set initial state for the map
  const [map, setMap] = useState(null);

  return (
    <>
      <MapContainer
        center={position}
        zoom={16}
        whenReady={map => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={maps.base}
        />
        <RoutineMachine />
      </MapContainer>
    </>
  )
}

export default AppMap
