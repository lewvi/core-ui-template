import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody, } from '@coreui/react'
import { Card, List, Table } from 'antd'
import { Button, Input, Form, Select, Pagination, Row, Col, Tooltip, Avatar } from 'antd'
import { FormOutlined } from '@ant-design/icons';

const columns = [
  {
    title: '#',
    dataIndex: 'No',
  },
  {
    title: 'Profile',
    dataIndex: 'profile',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
]

const data = []
for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
    name: `Name : ${i}`,
    id: `DOC0000 ${i}`,
    No: ` ${i}`,
  })
}

class Setting extends React.Component {
  state = {
    selectedRowKeys: [],
    loading: false,
  }

  start = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      })
    }, 1000)
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }

  render() {
    const { loading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    return (
      <div>
        <CCard>
          <Row justify="space-between">
            <Col span={8}>
              <CCardBody>
                <h4 id="traffic" className="card-title mb-0">Setting</h4>
                <div className="small text-medium-emphasis">Setting</div>
              </CCardBody>
            </Col>
            <Col span={16}>
              <CCardBody>
                <Row gutter={16} justify="end">
                  <Col>
                    <Button type="text" danger size="large">Reset</Button>
                  </Col>
                </Row>
              </CCardBody>
            </Col>
          </Row>
        </CCard>

        <CCard className="mb-4">
          <Form layout="vertical">
            <Row>
              <Col span={6}>
                <CCardBody>
                  <Form.Item label="User ID">
                    <Input placeholder='User ID' />
                  </Form.Item>
                </CCardBody>
              </Col>
              <Col span={6}>
                <CCardBody>
                  <Form.Item label="Name">
                    <Input placeholder='Name' />
                  </Form.Item>
                </CCardBody>
              </Col>
              <Col span={6}>
                <CCardBody>
                  <Form.Item label='Status'>
                    <Select placeholder='Status'>
                      {/* <Select.Option value="demo">Demo</Select.Option> */}
                    </Select>
                  </Form.Item>
                </CCardBody>
              </Col>
              <Col span={6}>
                <CCardBody>
                  <Row gutter={[16, 16]}>
                    <Col>
                      <Button>Cancel</Button>
                    </Col>
                    <Col>
                      <Button type="primary">Search</Button>
                    </Col>
                  </Row>
                </CCardBody>
              </Col>
            </Row>
          </Form>
{/*           <CCardBody>
            <Row>
              <div className='a'>
                <div>
                  <p>test</p>
                </div>
              </div>
            </Row>
          </CCardBody> */}
          <CCardBody>
            <Row gutter={16}>
              <Col span={12}>
                <Card className='mb-4'>
                  <p> ตั้งค่าข้อมูล Terms & Conditions</p>
                </Card>
                <Card className='mb-4'>
                  <p>ตั้งค่าการเปลี่ยนภาษา</p>
                  <Form.Item>
                    <Select>

                    </Select>
                  </Form.Item>
                </Card>
                <Card className='mb-4'>
                  <p>ตั้งค่าหมวดหมู่</p>
                  <Form layout="vertical">
                    <Form.Item label="ตำแหน่งงาน">
                      <Input placeholder="ตำแหน่งงาน" suffix={<FormOutlined />} />
                    </Form.Item>
                    <Form.Item label="ระดับการศึกษา">
                      <Input placeholder="ระดับการศึกษา" suffix={<FormOutlined />} />
                    </Form.Item>
                    <Form.Item label="กลุ่มทักษะงาน">
                      <Input placeholder="กลุ่มทักษะงาน" suffix={<FormOutlined />} />
                    </Form.Item>
                    <Form.Item label="ประเภทกิจการ">
                      <Input placeholder="ประเภทกิจการ" suffix={<FormOutlined />} />
                    </Form.Item>
                    <Form.Item label="ฯลฯ">
                      <Input placeholder="ฯลฯ" suffix={<FormOutlined />} />
                    </Form.Item>
                  </Form>
                </Card>
              </Col>
              <Col span={12}>
                <Card className='mb-4'>
                  <p>ตั้งค่าข้อมูล Privacy Policy</p>
                  <List>
                    <List.Item>
                      <Row>
                        <Col>
                          <Avatar style={{ backgroundColor: '#A92928' }} size="large"/>
                        </Col>
                      </Row>
                    </List.Item>
                    <List.Item>
                      <Row>
                        <Col>
                          <Avatar style={{ backgroundColor: '#A92928' }} size="large"/>
                        </Col>
                      </Row>
                    </List.Item>
                    <List.Item>
                      <Row>
                        <Col>
                          <Avatar style={{ backgroundColor: '#A92928' }} size="large"/>
                        </Col>
                      </Row>
                    </List.Item>
                  </List>
                </Card>
                <Card className='mb-4'>
                  <p>ตั้งค่าการกำหนดสิทธิ์การเข้าถึงข้อมูล</p>
                </Card>
              </Col>
            </Row>
          </CCardBody>
        </CCard>
      </div>
    )
  }
}

export default Setting
