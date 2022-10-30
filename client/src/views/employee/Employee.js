/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
    CAvatar,
    CButton,
    CCardTitle,
    CCardSubtitle,
    CCardText,
    CCardLink,
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
    CForm,
    CFormLabel,
    CFormInput,
    CFormText,
    CCollapse,
    CBadge,
    CImage
  } from '@coreui/react'
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
import './style.css'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import EmployeeRow from 'src/components/employee/EmployeeRow'

const Employee = () => {
    const [visible, setVisible] = useState(false)
    const tableExample = [
        {
          avatar: { src: avatar1, status: 'success' },
          user: {
            id: 1,
            name: 'Doan Thi Trang',
            new: true,
            registered: 'Jan 1, 2021',
            phone: '0123567980',
            email: 'trangdoan@gmail.com',
            status: <CBadge color="success">Active</CBadge>
          },
          role: { name: 'Janitor' },
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
            id: 2,
            name: 'Le Van Giau',
            new: false,
            registered: 'Jan 1, 2021',
            phone: '0987123789',
            email: 'ngheo12@gmail.com',
            status: <CBadge color="success">Active</CBadge>
          },
          role: { name: 'Collector' },
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
          user: { 
            id: 3, 
            name: 'Nguyen Van C', 
            new: true, 
            registered: 'Jan 1, 2021',
            phone: '0987123789',
            email: 'thythy99@gmail.com',
            status: <CBadge color="success">Active</CBadge>
        },
          role: { name: 'Janitor' },
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
          user: { 
            id: 4, 
            name: 'Nguyen Van A', 
            new: true, 
            registered: 'Jan 1, 2021',
            phone: '0977077629',
            email: 'Bomavt11@gmail.com',
            status: <CBadge color="secondary">Inactive</CBadge>
        },
          role: { name: 'Janitor' },
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
            id: 5,
            name: 'Nguyen Van B',
            new: true,
            registered: 'Jan 1, 2021',
            phone: '0921666111',
            email: 'Brherjfe1@gmail.com',
            status: <CBadge color="secondary">Inactive</CBadge>
          },
          role: { name: 'Collector' },
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
    <section className='employee-section'>
        <CRow>
            <CCol xs>
            <CCard>
                <CCardHeader>
                <div className="d-flex justify-content-between align-items-center">
                    <CForm className='row g-3'>
                        <CCol xs="auto" className='d-flex justify-content-between align-items-center'>
                            <CFormLabel htmlFor="searchInput">Filter:</CFormLabel>
                        </CCol>
                        <CCol xs="auto">
                            <CFormInput type="email" id="searchInput" placeholder="Type string..." aria-describedby="searchInput" />
                        </CCol>
                    </CForm>
                    <CButton color="primary" size="small">
                    Add employee
                    </CButton>
                </div>
                </CCardHeader>
                <CCardBody>
                <CTable align="middle" className="mb-0 border" hover responsive striped>
                    <CTableHead color="light">
                    <CTableRow>
                        <CTableHeaderCell>ID</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Name</CTableHeaderCell>
                        <CTableHeaderCell>Role</CTableHeaderCell>
                        <CTableHeaderCell>Contact</CTableHeaderCell>
                        <CTableHeaderCell>Hired Date</CTableHeaderCell>
                        <CTableHeaderCell>Status</CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                    </CTableRow>
                    </CTableHead>
                    <CTableBody>
                    {tableExample.map((item, index) => (
                        <>
                          <EmployeeRow item={item}></EmployeeRow>
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

export default Employee
