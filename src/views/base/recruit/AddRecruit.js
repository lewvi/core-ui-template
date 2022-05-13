import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody } from '@coreui/react'
import { Table } from 'antd'
import { Button, Input, Form, Row, Col, DatePicker, Space, Upload, message } from 'antd'
import { FormOutlined, InboxOutlined } from '@ant-design/icons'

const { Dragger } = Upload

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files)
  },
}

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

              <Row>
                <Col span={8}></Col>
                <Col span={20}>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item label="หัวข้อ">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="Time">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item label="Schedule">
                        <DatePicker />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
                <Col span={2}></Col>

                <Col span={24}>

                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="เพิ่มไฟล์รูปภาพ">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="เพิ่มไฟล์วิดีโอ">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Item label="รายละเอียด">
                    <Input />
                  </Form.Item>
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
