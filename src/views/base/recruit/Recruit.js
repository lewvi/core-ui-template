import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody} from '@coreui/react'
import { Table } from 'antd'
import { Button, Input, Form, Row, Col, DatePicker,Space } from 'antd'
import {DeleteOutlined,FormOutlined } from '@ant-design/icons';
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
    title: 'Quantity',
    dataIndex: 'quantity',
  },
  {
    title: 'Schedule',
    dataIndex: 'schedule',
    render : () => (
      <div>
        <a>08:30 PM, May 2,2022</a>
      </div>
    )
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
    )
  },
]

const data = []
for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
    No: ` ${i}`,
    list:`รับสมัครงาน ${i}`,
    quantity:` Quantity : ${i}`,
    employerType:`Employer type : ${i}`,
  })
}

class Recruit extends React.Component {
  state = {
    selectedRowKeys: [],
    loading: false,
    top: 'topRight',
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
                <h4 id="traffic" className="card-title mb-0">
                  Recruit
                </h4>
                <div className="small text-medium-emphasis">Recruit</div>
              </CCardBody>
            </Col>
            <Col span={16}>
              <CCardBody>
                <Row gutter={16} justify="end">
                  <Col>
                    <Link to="/base/recruit/AddRecruit">
                      <Button type="text" danger size="large">
                        + Recruit
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
                  <Form.Item label="List Name">
                    <Input placeholder="List Name" />
                  </Form.Item>
                </CCardBody>
              </Col>
              <Col span={6}>
                <CCardBody>
                  <Form.Item name="Schedule" label="Schedule">
                    <DatePicker />
                  </Form.Item>
                </CCardBody>
              </Col>
              <Col span={6}>
                <CCardBody></CCardBody>
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
                  Recruit List
                </h6>
              </CCardBody>
            </Col>
            <Col span={16}>
              <CCardBody>
                <Row justify="end"></Row>
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

export default Recruit
