import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody } from '@coreui/react'
import { Table } from 'antd'
import { Button, Input, Form, Select, Pagination, Row, Col, Space, Avatar, Badge } from 'antd'
import {
  FilePdfOutlined,
  FileExcelOutlined,
  DeleteOutlined,
  FormOutlined,
  UserOutlined,
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
    render: () => (
      <div>
        <Badge status="success" text="Active" />
      </div>
    ),
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
    name: `Name : ${i}`,
    id: `DOC0000${i}`,
    No: ` ${i}`,
  })
}

class Member extends React.Component {
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
    //const { navigation } = useNavigate()
    const { loading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    const handleClick = () => {
      //navigation('/')
      console.log('this is:', this)
    }

    return (
      <>
        <CCard>
          <CCardBody>
            <Row justify="space-between">
              <Col span={8}>
                <h4 id="traffic" className="card-title mb-0">
                  Member
                </h4>
                <div className="small text-medium-emphasis">Member</div>
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
                    <Link to="/theme/member/AddMember">
                      <Button type="text" danger size="large">
                        + Member
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
                  <Form.Item label="Name">
                    <Input placeholder="Name" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="ID">
                    <Input placeholder="ID" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="Status">
                    <Select placeholder="Status">
                      {/* <Select.Option value="demo">Demo</Select.Option> */}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Row gutter={[16, 16]} justify='end'>
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
          <Row>
            <Col span={8}>
              <h6 id="traffic" className="card-title mb-0">
                Member List
              </h6>
            </Col>
            <Col span={16}></Col>
          </Row>

          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </CCard>
      </>
    )
  }
}

export default Member
