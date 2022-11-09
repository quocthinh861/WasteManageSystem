import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibFacebook, cibLinkedin, cibTwitter, cilCalendar } from '@coreui/icons'
import { CChart } from '@coreui/react-chartjs'

const WidgetsBrand = ({ withCharts }) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <CRow>
      <CCol>
        <CWidgetStatsD
          className="mb-4"
          icon={<i className="fa-solid fa-user-tie fa-4x text-white"></i>}
          values={[
            { title: 'Role', value: 'Officer' },
            { title: 'Qty', value: '459' },
          ]}
          style={{
            '--cui-card-cap-bg': '#FF3366',
          }}
        />
      </CCol>

      <CCol>
        <CWidgetStatsD
          className="mb-4"
          icon={<i className="fa-regular fa-user fa-4x text-white"></i>}
          values={[
            { title: 'Role', value: 'Janitor' },
            { title: 'Qty', value: '12' },
          ]}
          style={{
            '--cui-card-cap-bg': '#00aced',
          }}
        />
      </CCol>

      <CCol>
        <CWidgetStatsD
          className="mb-4"
          icon={<i className="fa-solid fa-user fa-4x text-white"></i>}
          values={[
            { title: 'Role', value: 'Collector' },
            { title: 'Qty', value: '12' },
          ]}
          style={{
            '--cui-card-cap-bg': '#4875b4',
          }}
        />
      </CCol>

      <CCol>
        <CWidgetStatsD
          className="mb-4"
          color="warning"
          icon={<i className="fa-solid fa-street-view fa-4x"></i>}
          values={[
            { title: 'Role', value: 'MCP' },
            { title: 'Qty', value: '12' },
          ]}
        />
      </CCol>

      <CCol>
        <CWidgetStatsD
          className="mb-4"
          color="warning"
          icon={<i className="fa-solid fa-truck fa-4x"></i>}
          values={[
            { title: 'Role', value: 'Trucks' },
            { title: 'Qty', value: '12' },
          ]}
        />
      </CCol>
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  withCharts: PropTypes.bool,
}

export default WidgetsBrand
