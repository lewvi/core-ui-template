import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody } from '@coreui/react'
import { Button, Input, Form, Select, Row, Col, Card, Avatar, DatePicker } from 'antd'
import { UserOutlined, LeftOutlined } from '@ant-design/icons'
import { Footer } from 'antd/lib/layout/layout'


class AddUserManage extends React.Component {
  render() {

    return (
      <>
        <CCard className="mb-4">
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
                  User Manage
                </h4>
                <div className="small text-medium-emphasis">User Manage</div>
              </Col>
            </Row>
          </CCardBody>
        </CCard>

        <Form layout="vertical" >
          <CCard>
            <CCardBody>
              <Row justify="center">
                <Col span={16}>
                  <Row>
                    <p>User Details</p>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="User ID" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input />
                      </Form.Item>
                      <Form.Item label="First name">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Email">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="User name">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Last name">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Phone number">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item label="Role">
                        <Select />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <p>Reset password</p>
                  </Row>

                  <Card>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label="New Password">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="Confirm Password">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Card>
                  <br></br>
                  <Row gutter={16} justify='end'>
                    <Col>
                      <Button>Cancel</Button>
                    </Col>
                    <Col>
                      <Button type="primary">Save</Button>
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

export default AddUserManage
