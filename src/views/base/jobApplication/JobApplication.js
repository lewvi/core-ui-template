import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody } from '@coreui/react'
import { Table } from 'antd'
import { Button, Input, Form, Select, Pagination, Row, Col, Space,Badge } from 'antd'
import { FilePdfOutlined, FileExcelOutlined, DeleteOutlined,FormOutlined  } from '@ant-design/icons';
import {Link } from "react-router-dom";

const columns = [
  {
    title: '#',
    dataIndex: 'No',
  },
  {
    title: 'List',
    dataIndex: 'list',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    render: () => (
      <div>
        <a>May 2,2022</a>
      </div>
    )
  },
  {
    title: 'Name company',
    dataIndex: 'nameCompany',
  },
  {
    title: 'Applicant',
    dataIndex: 'applicant',
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
    list:`ใบสมัครงาน ${i}`,
    nameCompany : `Company name : ${i}`,
    applicant : `Applicant : ${i}`
  })
}

class JobApplication extends React.Component {
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
          <CCardBody>
            <Row>
              <Col span={8}>
                <h4 id="traffic" className="card-title mb-0">
                  Job Application
                </h4>
                <div className="small text-medium-emphasis">Job Application</div>
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
                    <Link to="/base/AddjobApplication">
                      <Button type="text" danger size="large">
                        + Job Application
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
            <Row></Row>
          </CCard>
        </Form>

        <CCard className="mb-4">
          <CCardBody>
            <Row>
              <h6 id="traffic" className="card-title mb-0">
                  Job Application List
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

export default JobApplication
