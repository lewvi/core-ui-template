import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody } from '@coreui/react'
import { Button, Input, Form, Select, Row, Col, PageHeader, Avatar, DatePicker } from 'antd'
import { UserOutlined,DeleteOutlined } from '@ant-design/icons'
import { Footer } from 'antd/lib/layout/layout'

class AddCompany extends React.Component {
  render() {
    return (
      <>
        <CCard>
          <Row justify="space-between">
            <Col span={8}>
              <CCardBody>
                <h4 id="traffic" className="card-title mb-0">
                    Company
                </h4>
                <div className="small text-medium-emphasis">Company</div>
              </CCardBody>
            </Col>
            <Col span={16}>
              <CCardBody>
                <Row gutter={[16, 16]} justify="end">
                  <Col>
                    <Button icon={<DeleteOutlined />} size="large" />
                  </Col>
                </Row>
              </CCardBody>
            </Col>
          </Row>
        </CCard>

        <CCard className='mb-4'>
            <Row>

            </Row>
        </CCard>
      </>
    )
  }
}

export default AddCompany
