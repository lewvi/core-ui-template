import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody} from '@coreui/react'
import { Table } from 'antd'
import { Button, Input, Form, Select, Pagination, Row, Col,Space,Badge } from 'antd'
import { FileExcelOutlined, DeleteOutlined,FormOutlined } from '@ant-design/icons';


const columns = [
  {
    title: '#',
    dataIndex: 'No',
  },
  {
    title: 'User ID',
    dataIndex: 'userID',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'User name',
    dataIndex: 'userName',
  },
  {
    title: 'Role',
    dataIndex: 'role',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render : () => (
      <div>
         <Badge status="success" text="Active"/>
      </div>
    )
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: () => ( 
      <Space size="middle">
        <a>{<FormOutlined />}</a>
        <a>{<DeleteOutlined />}</a>
      </Space>
    )
  },
]

const data = []
for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
    No: ` ${i}`,
    userID:`User ID : ${i}`,
    name:`Name : ${i}`,
    userName:`User Name : ${i}`,
    role:`Role : ${i}`,
  })
}

class UserManage extends React.Component {
  state = {
    selectedRowKeys: [],
    top: 'topRight',
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
          <Row justify="space-between">
            <Col span={8}>
              <CCardBody>
                <h4 id="traffic" className="card-title mb-0">User Manage</h4>
                <div className="small text-medium-emphasis">User Manage</div>
              </CCardBody>
            </Col>
            <Col span={16}>
              <CCardBody>
                <Row gutter={[16,16]} justify="end">
                  <Col>
                    <Button icon={<DeleteOutlined />} size="large" />
                  </Col>
                  <Col>
                    <Button icon={<FileExcelOutlined />} size="large" />
                  </Col>
                  <Col>
                    <Button type="text" danger size="large">+ User Manage</Button>
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
                  <Form.Item label="Status">
                    <Select placeholder='Status' />
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
                <h6 id="traffic" className="card-title mb-0">User Manage List</h6>
              </CCardBody>
            </Col>
            <Col span={16}>
              <CCardBody>
                <Row justify="end">

                </Row>
              </CCardBody>
            </Col>
          </Row>
          <CCardBody>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data} />
          </CCardBody>
        </CCard>
      </>
    )
  }
}

export default UserManage
