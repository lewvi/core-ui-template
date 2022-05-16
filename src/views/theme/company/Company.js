import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody } from '@coreui/react'
import { Table } from 'antd'
import { Button, Input, Form, Select, Pagination, Row, Col, Space } from 'antd'
import { FilePdfOutlined, FileExcelOutlined, DeleteOutlined, FormOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

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
    ),
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
    render: () => (
      <div>
        <a>02-967-2222</a>
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
    No: ` ${i}`,
    companyName: `Company : ${i}`,
    type: `Type : ${i}`,
    quantity: `-`,
    employerType: `-`,
    address: ``,
    contact: ``,
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
          <CCardBody>
            <Row>
              <Col span={8}>
                <h4 id="traffic" className="card-title mb-0">
                  Company
                </h4>
                <div className="small text-medium-emphasis">Company</div>
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
                    <Link to="/theme/company/AddCompany">
                      <Button type="text" danger size="large">
                        + Company
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
                  <Form.Item label="Company Name">
                    <Input placeholder="Company Name" />
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
                  <Form.Item label="Employer type">
                    <Select placeholder="Employer type">
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

        <Row className="mb-4">
          <Col span={24}>
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

        <CCard>
          <CCardBody>
            <Row>
              <h6 id="traffic" className="card-title mb-0">
                Company List
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

export default Company
