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
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Schedule',
    dataIndex: 'schedule',
    render: () => (
      <div>
        <a>08:30 PM, May 2,2022</a>
      </div>
    ),
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
    /*     render : () => {

    } */
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
    name: `Name :${i}`,
    quantity: ` Quantity : ${i}`,
    contact: `02-967-2222`,
  })
}

class Welfare extends React.Component {
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
                  Welfare
                </h4>
                <div className="small text-medium-emphasis">Welfare</div>
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
                    <Link to="/base/welfare/AddWelfare">
                      <Button type="text" danger size="large">
                        + Welfare
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
              <Row>
                <Col span={8}>
                  <Form.Item label="Name">
                    <Input placeholder="Name" />
                  </Form.Item>
                </Col>
                <Col span={16}>
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

        <Row>
          <Col span={16} className="mb-4">
            <Row gutter={16}>
              <Col>
                <Button ghost>กองทุน</Button>
              </Col>
              <Col>
                <Button ghost>ที่พักพิง</Button>
              </Col>
              <Col>
                <Button ghost>สวัสดิการ</Button>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row gutter={16} justify="end">
              <Col>
                <Button ghost>+ เพิ่มกองทุน</Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <CCard>
          <CCardBody>
            <Row>
              <h6 id="traffic" className="card-title mb-0">
                กองทุน
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

export default Welfare
