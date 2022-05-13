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

import {Link } from "react-router-dom";

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
      <div>
        <CCard>
          <Row justify="space-between">
            <Col span={8}>
              <CCardBody>
                <h4 id="traffic" className="card-title mb-0">
                  Member
                </h4>
                <div className="small text-medium-emphasis">Member</div>
              </CCardBody>
            </Col>
            <Col span={16}>
              <CCardBody>
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
                  <Link to='/theme/member/AddMember'>
                      <Button type="text" danger size="large">
                        + Member
                      </Button>
                  </Link>
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
                  <Form.Item label="Name">
                    <Input placeholder="Name" />
                  </Form.Item>
                </CCardBody>
              </Col>
              <Col span={6}>
                <CCardBody>
                  <Form.Item label="ID">
                    <Input placeholder="ID" />
                  </Form.Item>
                </CCardBody>
              </Col>
              <Col span={6}>
                <CCardBody>
                  <Form.Item label="Status">
                    <Select placeholder="Status">
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
        </CCard>

        <CCard className="mb-4">
          <Row>
            <Col span={8}>
              <CCardBody>
                <h6 id="traffic" className="card-title mb-0">
                  Member List
                </h6>
              </CCardBody>
            </Col>
            <Col span={16}>
              <CCardBody>
                <Row justify="end">
                  {/*                  <Pagination
                    pagination={{ position: [this.state.top] }}
                    total={100}
                    showTotal={total => `Total ${total} items`}
                    defaultPageSize={20}
                    defaultCurrent={1} /> */}
                </Row>
              </CCardBody>
            </Col>
          </Row>
          <CCardBody>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
          </CCardBody>
        </CCard>
      </div>
    )
  }
}

export default Member
