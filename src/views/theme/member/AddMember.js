import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody } from '@coreui/react'
import { Button, Input, Form, Select, Row, Col, Space, Avatar, DatePicker } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Footer } from 'antd/lib/layout/layout'

class AddMember extends React.Component {
  render() {
    return (
      <>
        <CCard>
          <CCardBody>
            <h4 id="traffic" className="card-title mb-0">
              Member
            </h4>
            <div className="small text-medium-emphasis">Member</div>
          </CCardBody>
        </CCard>

        {/*  --------------- Form ------------- */}
        <Form layout="vertical">
          <CCard className="mb-4">
            <CCardBody>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Row justify='center'>
                        <Avatar size={250} icon={<UserOutlined />} />
                    </Row>
                </Col>
                <Col span={16}>
                  <Row>
                    <h6>ข้อมูลทั่วไป</h6>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="รหัสประจำตัว :">
                        <Input />
                      </Form.Item>
                      <Form.Item label="คำนำหน้า :">
                        <Select />
                      </Form.Item>
                      <Form.Item label="ชื่อ สกุล :">
                        <Input />
                      </Form.Item>
                      <Form.Item label="วัน เดือน ปีเกิด :">
                        <DatePicker style={{ width: '100%' }} />
                      </Form.Item>
                      <Form.Item label="เลขบัตรประจำตัวประชาชน :">
                        <Input />
                      </Form.Item>
                      <Form.Item label="สัญชาติ :">
                        <Select />
                      </Form.Item>
                      <Form.Item label="เบอร์โทรติดต่อ :">
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item label="ที่อยู่ :">
                        <Input />
                      </Form.Item>
                      <Form.Item label="เพศ :">
                        <Select />
                      </Form.Item>
                      <Form.Item label="สถานภาพ :">
                        <Select />
                      </Form.Item>
                      <Form.Item label="ระดับการศึกษา :">
                        <Select />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <h6>ข้อมูลที่เกี่ยวข้อง</h6>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="ประเภทคดีที่ต้องโทษ :">
                        <Input />
                      </Form.Item>
                      <Form.Item label="ต้นสังกัด / หน่วยงานที่ปล่อยตัว :">
                        <Input />
                      </Form.Item>
                      <Form.Item label="ช่องทางติดต่อ :">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="ระยะเวลาต้องโทษ :">
                        <Input />
                      </Form.Item>
                      <Form.Item label="ทักษะการทำงาน / ทักษะพิเศษ :">
                        <Input />
                      </Form.Item>
                      <Form.Item label="ประเภทของสมาชิก :">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Footer>
              <Row gutter={[16, 16]} justify='end'>
                <Col>
                  <Button>Cancel</Button>
                </Col>
                <Col>
                  <Button type="primary">Save</Button>
                </Col>
              </Row>
              </Footer>
            </CCardBody>
          </CCard>
        </Form>
      </>
    )
  }
}

export default AddMember


