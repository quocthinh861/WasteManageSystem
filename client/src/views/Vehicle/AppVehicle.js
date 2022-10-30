/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CProgressBar,
  CCardSubtitle,
  CCollapse,
} from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import ChartC from '../charts/Charts'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { Button } from '@coreui/coreui'
const AppVehicle = () => {
  const [visible, setVisible] = useState(false)
  const tableExample = [
    {
      Id: 'A11B2',
      Capacity: 300,
      Type: 'Type A',
      Load: 50,
      Color: 'warning'
    },
    {
      Id: 'B7122',
      Capacity: 500,
      Type: 'Type B',
      Load: 80,
      Color: 'danger'
    },
    {
      Id: 'CA989',
      Capacity: 300,
      Type: 'Type C',
      Load: 20,
      Color: 'info'
    },
    {
      Id: 'PL123',
      Capacity: 100,
      Type: 'Type D',
      Load: 10,
      Color: 'success'
    }
  ]

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard>
            <CCardHeader>
              <div className="d-flex justify-content-between align-items-center">
                <span>Vehicles</span>
                <CButton color="primary" size="small">
                  Add new vehicle
                </CButton>
              </div>
            </CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive striped>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>ID</CTableHeaderCell>
                    <CTableHeaderCell>Capacity</CTableHeaderCell>
                    <CTableHeaderCell>Type</CTableHeaderCell>
                    <CTableHeaderCell>Load</CTableHeaderCell>
                    <CTableHeaderCell></CTableHeaderCell>
                    <CTableHeaderCell>Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <>
                      <CTableRow
                        v-for="item in tableItems"
                        key={index}
                      >
                        <CTableDataCell>
                          <div>#{item.Id}</div>
                          <div className="small text-medium-emphasis">
                            {/* <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                            {item.user.registered} */}
                          </div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div>{item.Capacity}</div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div>{item.Type}</div>
                        </CTableDataCell>
                        <CTableDataCell width={400}>
                          <CProgress className="mb-3">
                            <CProgressBar value={item.Load} color={item.Color}>{item.Load}%</CProgressBar>
                          </CProgress>
                        </CTableDataCell>
                        <CTableDataCell>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="db db-table db-settings">
                            <CButton size="sm" color="info" className="text-white mr-5 update-btn">
                              Update
                            </CButton>
                            <CButton size="sm" color="danger" className="text-white delete-btn">
                              Delete
                            </CButton>
                          </div>
                        </CTableDataCell>
                      </CTableRow>
                    </>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default AppVehicle
