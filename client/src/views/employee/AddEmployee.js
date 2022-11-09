/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import './style.css'
import {
  CAvatar,
  CButton,
  CCardTitle,
  CCardSubtitle,
  CCardText,
  CCardLink,
  CButtonGroup,
  CFormSelect,
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
  CImage,
} from '@coreui/react'

const AddEmployee = () => {
  return (
    <section className="add-employee-section">
      <CRow>
        <CCol xs>
          <CCard>
            <CCardHeader>
              <div className="d-flex justify-content-between align-items-center">
                <span>Add Employee</span>
              </div>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol>
                  <CForm>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      label="Name"
                      placeholder="Employee Name"
                      aria-describedby="exampleFormControlInputHelpInline"
                    />
                  </CForm>
                </CCol>
                <CCol>
                  <CForm>
                    <CFormInput
                      type="email"
                      id="exampleFormControlInput1"
                      label="Email address"
                      placeholder="name@example.com"
                      text="Must be 8-20 characters long."
                      aria-describedby="exampleFormControlInputHelpInline"
                    />
                  </CForm>
                </CCol>
                <CCol>
                  <CForm>
                    <CFormInput
                      type="phone"
                      id="exampleFormControlInput1"
                      label="Phone"
                      placeholder="Employee Phone"
                      aria-describedby="exampleFormControlInputHelpInline"
                    />
                  </CForm>
                </CCol>
              </CRow>
              <CRow>
                <CCol md={4}>
                  <CFormSelect id="inputState" label="City">
                    <option>Choose...</option>
                    <option>...</option>
                  </CFormSelect>
                </CCol>
                <CCol md={4}>
                  <CFormSelect id="inputState" label="District">
                    <option>Choose...</option>
                    <option>...</option>
                  </CFormSelect>
                </CCol>
                <CCol md={4}>
                  <CFormSelect id="inputState" label="Ward">
                    <option>Choose...</option>
                    <option>...</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow className="file-submit">
                <CCol md={6}>
                  <CFormInput type="file" id="formFile" label="Your Avatar" />
                </CCol>
              </CRow>
              <CRow>
                <div className='d-flex justify-content-end'>
                  <div className="w-10 ">
                  <CButton color="primary" size="small">
                    Add employee
                  </CButton>
                  </div>
                </div>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </section>
  )
}

export default AddEmployee
