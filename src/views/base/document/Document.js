import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard,CCardBody} from '@coreui/react'
import { Table } from 'antd'
import { Button, Input, Form,Row, Col, Space,Badge } from 'antd'
import { DeleteOutlined,FormOutlined } from '@ant-design/icons';


const columns = [
  {
    title: '#',
    dataIndex: 'No',
  },
  {
    title: 'Document',
    dataIndex: 'document',
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
    title: 'Text',
    dataIndex: 'text',
    render : () => (
      <div>
        <a>Walloon Region,John Smith</a>
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
    document: `Document : ${i}` ,
    status: `-`
  })
}

class Document
 extends React.Component {
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
                <h4 id="traffic" className="card-title mb-0">Document</h4>
                <div className="small text-medium-emphasis">Document</div>
              </CCardBody>
            </Col>
            <Col span={16}>
              <CCardBody>
                <Row gutter={16} justify="end">
                  <Col>
                    <Button type="text" danger size="large">+ Document</Button>
                  </Col>
                </Row>
              </CCardBody>
            </Col>
          </Row>
        </CCard>
        <CCard className="mb-4">
          <Form layout="vertical">
            <Row>
              <Col span={12}>
                <CCardBody>
                  <Form.Item label="List Name">
                    <Input placeholder='List Name' />
                  </Form.Item>
                </CCardBody>
              </Col>
              <Col span={12}>
                <CCardBody>
                  <Row gutter={[16, 16]} justify="end">
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
                <h6 id="traffic" className="card-title mb-0">Document List</h6>
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

export default Document

