import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilMap, cilTruck, cilBell, cilSpeedometer, cilPeople } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Employee',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Employee Management',
        to: '/employee',
      },
      {
        component: CNavItem,
        name: 'Add employee',
        to: '/employee/addemployee',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Vehicle',
    to: '/vehicle',
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Map',
    to: '/map',
    icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Notification',
    to: '/notification',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
]

export default _nav
