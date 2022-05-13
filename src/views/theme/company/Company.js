import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody} from '@coreui/react'
import { Table } from 'antd'
import { Button, Input, Form, Select, Pagination, Row, Col , Space } from 'antd'
import { FilePdfOutlined, FileExcelOutlined, DeleteOutlined,FormOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

const columns = [
  {
    title: '#',
    dataIndex: 'No',
  },
  {
    title: 'Company Name',
    dataIndex: 'companyName',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  },
  {
    title: 'Employer type',
    dataIndex: 'employerType',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    render: () => (
      <div>
        <a>222 Nonthaburi 1 Road,Suan Yai Subdistrict</a>
      </div>
    )
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
    render: () => (
      <div>
        <a>02-967-2222</a>
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
    companyName:`Company : ${i}`,
    type:`Type : ${i}`,
    quantity: `-`,
    employerType:`-`,
    address: ``,
    contact:``,
  })
}

class Company extends React.Component {
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
                <h4 id="traffic" className="card-title mb-0">Company</h4>
                <div className="small text-medium-emphasis">Company</div>
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
                    <Button icon={<FilePdfOutlined />} size="large" />
                  </Col>
                  <Link to='/theme/company/AddCompany'>
                    <Col>
                      <Button type="text" danger size="large">+ Company</Button>
                    </Col>
                  </Link>
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
                  <Form.Item label="Company Name">
                    <Input placeholder='Company Name' />
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
                  <Form.Item label='Employer type'>
                    <Select placeholder='Employer type'>
                      {/* <Select.Option value="demo">Demo</Select.Option> */}
                    </Select>
                  </Form.Item>
                </CCardBody>
              </Col>
              <Col span={6}>
                <CCardBody>
                  <Row gutter={[16,16]}>
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
        <Row className="mb-4">
          <Col span={16}>
            <Row gutter={16}>
              <Col>
                <Button ghost>ทั้งหมด</Button>
              </Col>
              <Col>
                <Button ghost>นิติบุคคล</Button>
              </Col>
              <Col>
                <Button ghost>บุคคลธรรมดา</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <CCard className="mb-4">
          <Row>
            <Col span={8}>
              <CCardBody>
                <h6 id="traffic" className="card-title mb-0">Company List</h6>
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

export default Company
