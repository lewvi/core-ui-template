import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody } from '@coreui/react'
import { Table } from 'antd'
import { Button, Input, Form, Pagination, Row, Col, Avatar, Space } from 'antd'
import {
  FilePdfOutlined,
  FileExcelOutlined,
  DeleteOutlined,
  UserOutlined,
  FormOutlined,
} from '@ant-design/icons'

import { Link } from 'react-router-dom'

const columns = [
  {
    title: '#',
    dataIndex: 'No',
  },
  {
    title: 'Profile',
    dataIndex: 'profile',
    render: () => (
      <div>
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
    ),
  },
  {
    title: 'Hospital Name',
    dataIndex: 'hospitalName',
  },
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: () => (
      <Space size="middle">
        <a>{<FormOutlined />}</a>
        <a>{<DeleteOutlined />}</a>
      </Space>
    ),
  },
]

const data = []
for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
    name: `Name : `,
    No: ` ${i}`,
    hospitalName: `Hospital Name :${i}`,
    id: `DOC0000${i}`,
    quantity: `Quantity : ${i} :`,
  })
}

class Hospital extends React.Component {
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
      <>
        <CCard>
          <CCardBody>
            <Row justify="space-between">
              <Col span={8}>
                <h4 id="traffic" className="card-title mb-0">
                  Hospital
                </h4>
                <div className="small text-medium-emphasis">Hospital</div>
              </Col>
              <Col span={16}>
                <Row gutter={[16, 16]} justify="end">
                  <Col>
                    <Button icon={<DeleteOutlined />} size="large" />
                  </Col>
                  <Col>
                    <Button icon={<FileExcelOutlined />} size="large" />
                  </Col>
                  <Col>
                    <Button icon={<FilePdfOutlined />} size="large" />
                  </Col>
                  <Col>
                    <Link to="#">
                      <Button type="text" danger size="large">
                        + Hospital
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CCardBody>
        </CCard>

        <Form layout="vertical">
          <CCard className="mb-4">
            <CCardBody>
              <Row gutter={16}>
                <Col span={6}>
                  <Form.Item label="Hospital Name">
                    <Input placeholder="Hospital Name" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="ID">
                    <Input placeholder="ID" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Row gutter={[16, 16]} justify="end">
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
        </Form>

        <CCard>
          <CCardBody>
            <Row>
              <h6 id="traffic" className="card-title mb-0">
                Member List
              </h6>
            </Row>
            <br></br>
            <Row>
              <Col span={24}>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
              </Col>
            </Row>
          </CCardBody>
        </CCard>
      </>
    )
  }
}

export default Hospital
