import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody } from '@coreui/react'
import { Button, Input, Form, Select, Row, Col, Space, Avatar, DatePicker } from 'antd'
import { UserOutlined, LeftOutlined } from '@ant-design/icons'
import { Footer } from 'antd/lib/layout/layout'

class AddWelfare extends React.Component {
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
                Welfare
                </h4>
                <div className="small text-medium-emphasis">Welfare</div>
              </Col>
            </Row>
          </CCardBody>
        </CCard>

<Form layout='vertical'>
  <CCard>
          <CCardBody>
            <Row justify='center'>
              <Col span={12}>
                <Row>
                  <p>Welfare</p>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label='Name'>
                      <Select placeholder='Name'/>
                    </Form.Item>
                    <Form.Item label='Schedule'>
                      <Input placeholder='Schedule'/>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='Quantity'>
                      <Input placeholder='Quantity'/>
                    </Form.Item>
                    <Form.Item label='Contact'>
                      <Input placeholder='Contact'/>
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>

          </CCardBody>
        </CCard>
        </Form>

      </>
    )
  }
}

export default AddWelfare
