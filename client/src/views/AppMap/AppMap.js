/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import RoutineMachine from './RoutingMachine';

const position = [10.7724483, 106.6582936];

const maps = {
  base: "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=gGCh0FCy8fIynFL9Aksz"
};

const vextexMap = {
  A: [10.777823448181152, 106.65606689453125],
  B: [10.748285429708451, 106.63473038607164],
  C: [10.747325095957946, 106.64353901039668],
  D: [10.754058881386277, 106.65132009782434],
}

const routeArray = [
  {
    start: vextexMap.A,
    end: vextexMap.B,
    color: 'red'
  },
  {
    start: vextexMap.B,
    end: vextexMap.C,
    color: 'blue'
  },
  {
    start: vextexMap.C,
    end: vextexMap.D,
    color: 'green'
  },
  {
    start: vextexMap.D,
    end: vextexMap.A,
    color: 'purple'
  }
]

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
        {
          routeArray.map((x, index) => (
            <RoutineMachine routeInfo={x} key={index} />
          ))
        }
      </MapContainer>
    </>
  )
}

export default AppMap
