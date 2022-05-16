import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody } from '@coreui/react'
import { Table } from 'antd'
import { Button, Input, Form, Pagination, Row, Col, Space } from 'antd'
import { FilePdfOutlined, FileExcelOutlined, DeleteOutlined, FormOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: '#',
    dataIndex: 'No',
  },
  {
    title: 'Type Name',
    dataIndex: 'typeName',
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
    typeName: ` Type :${i}`,
    quantity: ` Quantity :${i}`,
    employerType: ` employer type:${i}`,
  })
}

class Skill extends React.Component {
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
                  Skill
                </h4>
                <div className="small text-medium-emphasis">Skill</div>
              </Col>
              <Col span={16}>
                <Row gutter={[16, 16]} justify="end">
                  <Col>
                    <Button icon={<FileExcelOutlined />} size="large" />
                  </Col>
                  <Col>
                    <Button icon={<FilePdfOutlined />} size="large" />
                  </Col>
                  <Col>
                    <Link to="/base/skill/AddSkill">
                      <Button type="text" danger size="large">
                        + Skill
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
                  <Form.Item label="Company Name">
                    <Input placeholder="Company Name" />
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
                Type
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

export default Skill
