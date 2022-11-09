/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import './style.css'
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

const Dashboard = () => {
  const [visible, setVisible] = useState(false)

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'mcp1',
        new: true,
        registered: 'Jan 1, 2021',
      },
      location: { name: '268 ly thuong kiet' },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'mcp2',
        new: false,
        registered: 'Jan 1, 2021',
      },
      location: { name: '142 To hien thanh' },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'mcp3', new: true, registered: 'Jan 1, 2021' },
      location: { name: '525 to hien thanh' },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'mcp4', new: true, registered: 'Jan 1, 2021' },
      location: { name: '14 Bui Thi Xuan' },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'mcp5',
        new: true,
        registered: 'Jan 1, 2021',
      },
      location: { name: '87 Le Van Viet' },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
  ]

  return (
    <section className="dashboard-section">
      <CRow>
        <CCol xs>
          <CCard>
            <CCardHeader>
              <div className="d-flex justify-content-between align-items-center">
                <span>STATISTICS</span>
              </div>
            </CCardHeader>
            <CCardBody>
              <WidgetsBrand />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol lg={3}>
          <CCard className="mb-4">
            <CCardHeader>MCPs Status</CCardHeader>
            <CCardBody>
              <CChartPie
                data={{
                  labels: ['< 20%', '20% - 80%', '> 80%'],
                  datasets: [
                    {
                      data: [300, 50, 100],
                      backgroundColor: ['#35CF72', '#FFCE56', '#FF6384'],
                      hoverBackgroundColor: ['#35CF72', '#FFCE56', '#FF6384'],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg={5}>
          <CCard className="mb-4">
            <CCardHeader>Total Expense</CCardHeader>
            <CCardBody>
              <CChartBar
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'Operation Cost ($)',
                      backgroundColor: '#f87979',
                      data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                    },
                  ],
                }}
                labels="months"
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs>
          <CCard>
            <CCardHeader>
              <div className="d-flex justify-content-between align-items-center">
                <span>MCPs Detail</span>
                <CButton color="primary" size="small">
                  Add new MCP
                </CButton>
              </div>
            </CCardHeader>
            <CCardBody>
              {/* <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">New Clients</div>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Recurring Clients</div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Pageviews</div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Organic</div>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow> */}

              {/* <br /> */}

              <CTable align="middle" className="mb-0 border" hover responsive striped>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>ID</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Location</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                    <CTableHeaderCell>Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <>
                      <CTableRow
                        v-for="item in tableItems"
                        key={index}
                        onClick={() => setVisible(!visible)}
                      >
                        <CTableDataCell>
                          <div>#{item.user.name}</div>
                          <div className="small text-medium-emphasis">
                            {/* <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                            {item.user.registered} */}
                          </div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>{item.location.name}</div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="clearfix">
                            <div className="float-start">
                              <strong>{item.usage.value}%</strong>
                            </div>
                            <div className="float-end">
                              <small className="text-medium-emphasis">{item.usage.period}</small>
                            </div>
                          </div>
                          <CProgress thin color={item.usage.color} value={item.usage.value} />
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="small text-medium-emphasis">Last login</div>
                          <strong>{item.activity}</strong>
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
    </section>
  )
}

export default Dashboard
