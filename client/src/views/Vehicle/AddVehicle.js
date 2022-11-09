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

const AddVehicle = () => {
  return (
    <section className="add-vehicle-section">
      <CRow>
        <CCol xs>
          <CCard>
            <CCardHeader>
              <div className="d-flex justify-content-between align-items-center">
                <span>Add Vehicle</span>
              </div>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol>
                  <CForm>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      label="Registration Number"
                      placeholder="Registration Number"
                      aria-describedby="exampleFormControlInputHelpInline"
                    />
                  </CForm>
                </CCol>
                <CCol>
                  <CForm>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      label="Vehicle Name"
                      placeholder="Vehicle Name"
                      aria-describedby="exampleFormControlInputHelpInline"
                    />
                  </CForm>
                </CCol>
                <CCol>
                  <CForm>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      label="Model"
                      placeholder="Model"
                      aria-describedby="exampleFormControlInputHelpInline"
                    />
                  </CForm>
                </CCol>
                <CCol>
                  <CFormSelect id="inputState" label="Vehicle Type">
                    <option>Select Vehicle Type</option>
                    <option>...</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow>
              </CRow>
              <CRow>
                <CCol>
                  <CForm>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      label="GPS API Details(Feed GPS Data)
                      API URL"
                      placeholder="http://localhost:3001/"
                      aria-describedby="exampleFormControlInputHelpInline"
                    />
                  </CForm>
                </CCol>
                <CCol>
                  <CForm>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      label="API Username"
                      placeholder="API Username"
                      aria-describedby="exampleFormControlInputHelpInline"
                    />
                  </CForm>
                </CCol>
                <CCol>
                  <CForm>
                    <CFormInput
                      type="password"
                      id="exampleFormControlInput1"
                      label="API Password"
                      placeholder="API Password"
                      aria-describedby="exampleFormControlInputHelpInline"
                    />
                  </CForm>
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

export default AddVehicle
