/* eslint-disable react/prop-types */
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
  CImage,
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
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const EmployeeRow = (props) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CTableRow v-for="item in tableItems" key={props.index}>
        <CTableDataCell>
          <div>#{props.item.user.id}</div>
          <div className="small text-medium-emphasis">
            {/* <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                    {item.user.registered} */}
          </div>
        </CTableDataCell>
        <CTableDataCell className="text-center">
          <div>{props.item.user.name}</div>
        </CTableDataCell>
        <CTableDataCell>
          <div>{props.item.role.name}</div>
        </CTableDataCell>
        <CTableDataCell>
          <div>{props.item.user.phone}</div>
          <div>{props.item.user.email}</div>
        </CTableDataCell>
        <CTableDataCell>
          <div>{props.item.user.registered}</div>
        </CTableDataCell>
        <CTableDataCell>{props.item.user.status}</CTableDataCell>
        <CTableDataCell>
          <CButton color="primary" variant="outline" onClick={() => setVisible(!visible)}>
            Show
          </CButton>
        </CTableDataCell>
      </CTableRow>
      {visible && (
        <CTableRow v-for="item in tableItems" key={props.index}>
          <CTableDataCell colSpan={100}>
            <div className="d-flex info-container">
              <div className="avatar-container">
                <CImage
                  src="https://cdn.tgdd.vn/Products/Images/7264/238383/mww-ms055-01-nam-1-600x600.jpg"
                  width={200}
                  height={200}
                ></CImage>
              </div>
              <div className="detail-container">
                <h4>{props.item.user.name}</h4>
                <p>User since: {props.item.user.registered}</p>
                <CButton size="sm" color="info" className="text-white mr-5 update-btn">
                  Update
                </CButton>
                <CButton size="sm" color="danger" className="text-white delete-btn">
                  Delete
                </CButton>
              </div>
            </div>
          </CTableDataCell>
        </CTableRow>
      )}
    </>
  )
}

export default EmployeeRow
