/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import RoutineMachine from './RoutingMachine';

const position = [10.7724483, 106.6582936];

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

const vextexMap = {
  A: {
    lati: 10.777823448181152,
    longti: 106.65606689453125,
    address: '268 ly thuong kiet'
  },
  B: {
    lati: 10.748285429708451,
    longti: 106.63473038607164,
    address: 'A'
  },
  C: {
    lati: 10.747325095957946,
    longti: 106.64353901039668,
    address: 'B'
  },
  D: {
    lati: 10.754058881386277,
    longti: 106.65132009782434,
    address: 'C'
  },
}

const routeArray = [
  {
    vertex: [vextexMap.A, vextexMap.B],
    color: 'red'
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
