/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

const position = [10.7724483, 106.6582936];

const AppMap = () => {
    const [visible, setVisible] = useState(false)

  return (
    <>
      <MapContainer
        center={position}
        zoom={16}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=gGCh0FCy8fIynFL9Aksz"
        />
        <Marker position={position}>
          <Popup>
            Tui đang đứng ở đây nè 
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default AppMap
