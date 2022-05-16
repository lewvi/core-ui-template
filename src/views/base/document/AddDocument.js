import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody } from '@coreui/react'
import { Button, Input, Form, Select, Row, Col, Space, Avatar,Card} from 'antd'
import { UserOutlined, LeftOutlined } from '@ant-design/icons'
import { Footer } from 'antd/lib/layout/layout'

class AddDocument extends React.Component {
  render() {
    return (
      <>
        <CCard className='mb-4'>
          <CCardBody>
            <Row gutter={16} align="middle">
              <Col>
                <Avatar
                  style={{ backgroundColor: '#A92928' }}
                  size={40}
                  onClick={() => window.history.back()}
                  /* icon={<LeftOutlined />} */
                />
              </Col>
              <Col>
                <h4 id="traffic" className="card-title mb-0">
                  Document
                </h4>
                <div className="small text-medium-emphasis">Document</div>
              </Col>
            </Row>
          </CCardBody>
        </CCard>

        <CCard>
          <CCardBody>
            <Row justify='center'>
              <Col>
                <Row>
                  <p>Important Forms</p>
                </Row>
                <Row>
                  <Card>
                    test
                  </Card>
                </Row>
                  
                <p>Relocation, Transfer</p>
                <p>Billing Slip/Invoice</p>
              </Col>
            </Row>
          </CCardBody>
        </CCard>
      </>
    )
  }
}

export default AddDocument
