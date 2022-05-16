import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody } from '@coreui/react'
import {
  Button,
  Input,
  Form,
  Select,
  Row,
  Col,
  Avatar,
  PageHeader,
  DatePicker,
  Divider,
} from 'antd'
import { LeftOutlined, FormOutlined,UploadOutlined,UserOutlined } from '@ant-design/icons'
import { Footer } from 'antd/lib/layout/layout'

class AddJobApplication extends React.Component {
  render() {
    return (
      <>
        <CCard>
          <CCardBody>
            <Row gutter={16} align="middle">
              <Col>
                <Avatar
                  style={{ backgroundColor: '#A92928' }}
                  size={40}
                  onClick={() => window.history.back()}
                  icon={<LeftOutlined />}
                />
              </Col>
              <Col>
                <h4 id="traffic" className="card-title mb-0">
                  Job Application
                </h4>
                <div className="small text-medium-emphasis">Job Application</div>
              </Col>
            </Row>
          </CCardBody>
        </CCard>

        <Form layout="vertical">
          <CCard className="mb-4">
            <CCardBody>
              <Row gutter={16}>
                <Col span={6}>
                  <Form.Item label="List Name">
                    <Input placeholder="List Name" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="Status">
                    <Select placeholder="Status">
                      {/* <Select.Option value="demo">Demo</Select.Option> */}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Row gutter={16} justify="end">
                    <Col>
                      <Button>Cancel</Button>
                    </Col>
                    <Col>
                      <Button type="primary">Search</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </CCardBody>
          </CCard>

          <CCard>
            <CCardBody>
              <Row>
                <Col span={12}>
                  <Form.Item>
                    <Input placeholder="-" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Row justify="end">
                    <Button icon={<FormOutlined />} size="large" />
                  </Row>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item label="Name company">
                    <Input placeholder="-" />
                  </Form.Item>
                </Col>
                <Col span={16}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="Status">
                        <Select placeholder="Status" />
                      </Form.Item>
                    </Col>
                    <Col>
                      <Form.Item label="Date">
                        <DatePicker placeholder="Date" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Divider />
              <Row gutter={16}>
                <Col span={8}>
                  <Row justify="center">
                      <Avatar size={200} icon={<UserOutlined/>}/>
                  </Row>
                </Col>
                <Col span={16}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="คำนำหน้า :">
                        <Input placeholder="-" />
                      </Form.Item>
                      <Form.Item label="ชื่อ สกุล :">
                        <Input placeholder="-" />
                      </Form.Item>
                      <Form.Item label="วัน เดือน ปีเกิด :">
                        <DatePicker placeholder="-" style={{ width: '100%' }} />
                      </Form.Item>
                      <Form.Item label="เลขบัตรประจำตัวประชาชน :">
                        <Input placeholder="-" />
                      </Form.Item>
                      <Form.Item label="สัญชาติ :">
                        <Input placeholder="-" />
                      </Form.Item>
                      <Form.Item label="เบอร์โทรติดต่อ :">
                        <Input placeholder="-" />
                      </Form.Item>
                      <Form.Item label="ทักษะพิเศษ :">
                        <Input placeholder="-" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="ตำแหน่งงานที่ต้องการ :">
                        <Input placeholder="legal entity" />
                      </Form.Item>{' '}
                      <Form.Item label="ที่อยู่ :">
                        <Input placeholder="-" style={{ height: '204px' }} />
                      </Form.Item>{' '}
                      <Form.Item label="ชื่อ สกุล :">
                        <Input placeholder="Karat Mangmee" />
                      </Form.Item>{' '}
                      <Form.Item label="เบอร์โทรติดต่อ :">
                        <Input placeholder="000 - 0000 - 000" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <p>ข้อมูลผู้ติดต่อใกล้ชิด</p>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="คำนำหน้า :">
                        <Select placeholder="-" />
                      </Form.Item>
                      <Form.Item label="อีเมล :">
                        <Input placeholder="-" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="ชื่อ สกุล :">
                        <Select placeholder="-" />
                      </Form.Item>
                      <Form.Item label="เบอร์โทรติดต่อ :">
                        <Input placeholder="-" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                      <p>แนบไฟล์</p>
                  </Row>
                  <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label="สำเนาบัตรประจำตัวประชาชน :">
                            <Input placeholder="-" suffix={<UploadOutlined />}/>
                        </Form.Item>
                        <Form.Item label="สำเนาวุฒิการศึกษา :">
                            <Input placeholder="-" suffix={<UploadOutlined />}/>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="สำเนาทะเบียนบ้าน :">
                            <Input placeholder="-" suffix={<UploadOutlined />}/>
                        </Form.Item>                        
                        <Form.Item label="สำเนาใบรับรองการฝึกอบรมทักษะ (ถ้ามี) :">
                            <Input placeholder="-" suffix={<UploadOutlined />}/>
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

export default AddJobApplication
