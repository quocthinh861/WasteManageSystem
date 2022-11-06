import L from 'leaflet'
import { createControlComponent } from '@react-leaflet/core'
import 'leaflet-routing-machine'

const createRoutineMachineLayer = ({ routeInfo, ...props }) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(routeInfo.start[0], routeInfo.start[1]),
      L.latLng(routeInfo.end[0], routeInfo.end[1]),
    ],
    lineOptions: {
      styles: [{ color: routeInfo.color, weight: 4 }],
    },
    show: false,
    addWaypoints: true,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  })

  instance.on('routeselected', function (e) {
    var routes = e.route
  })

  return instance
}

const RoutingMachine = createControlComponent(createRoutineMachineLayer)

export default RoutingMachine
