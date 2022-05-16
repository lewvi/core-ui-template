import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody } from '@coreui/react'
import { Button, Input, Form, Row, Col, DatePicker, Upload,TimePicker } from 'antd'
import { FormOutlined, InboxOutlined,LinkOutlined } from '@ant-design/icons'
import { Footer } from 'antd/lib/layout/layout'

const { Dragger } = Upload;

class AddRecruit extends React.Component {
  render() {
    return (
      <>
        <CCard className="mb-4">
          <Row justify="space-between">
            <Col span={8}>
              <CCardBody>
                <h4 id="traffic" className="card-title mb-0">
                  Recruit
                </h4>
                <div className="small text-medium-emphasis">Recruit</div>
              </CCardBody>
            </Col>
          </Row>
        </CCard>

        <Form layout="vertical">
          <CCard>
            <CCardBody>
              <Row>
                <Col span={8}>
                  <h6 id="traffic" className="card-title mb-0">
                    Recruit List
                  </h6>
                </Col>
                <Col span={16}>
                  <Row justify="end">
                    <Button icon={<FormOutlined />} size="large" />
                  </Row>
                </Col>
              </Row>

              <Row justify="center">
                <Col span={20}>
                  <Row gutter={[16, 16]}>
                    <Col span={8}>
                      <Form.Item label="หัวข้อ">
                        <Input placeholder="รับสมัครงาน" />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="Time">
                        <TimePicker placeholder="Time" style={{ width: '100%' }} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="Schedule">
                        <DatePicker placeholder="Schedule" style={{ width: '100%' }} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <Form.Item label="เพิ่มรูปภาพหน้าปก">
                        <Dragger>
                          <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                          </p>
                          <p className="ant-upload-text">
                            Click or drag file to this area to upload
                          </p>
                        </Dragger>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="เพิ่มไฟล์รูปภาพ">
                        <Input placeholder="เพิ่มไฟล์รูปภาพ" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="เพิ่มไฟล์วิดีโอ">
                        <Input placeholder="เพิ่มไฟล์วิดีโอ" suffix={<LinkOutlined />}/>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <Form.Item label="รายละเอียด">
                        <Input style={{ height: '192px' }} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16} justify='end'>
                    <Col>
                      <Button>Cancel</Button>
                    </Col>
                    <Col>
                      <Button type="primary">Save</Button>
                    </Col>
                  </Row>

                  <Footer/>
                </Col>
              </Row>
            </CCardBody>
          </CCard>
        </Form>
      </>
    )
  }
}

export default AddRecruit
