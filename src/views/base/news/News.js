import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody} from '@coreui/react'
import { Table } from 'antd'
import { Button, Input, Form,Pagination, Row, Col,Space,Avatar } from 'antd'
import { DeleteOutlined,FormOutlined } from '@ant-design/icons';


const columns = [
  {
    title: '#',
    dataIndex: 'No',
  },
  {
    title: 'Picture',
    dataIndex: 'picture',
    render : () => (
      <div>
        <Avatar shape="square" size="large" />
      </div>
    )
  },
  {
    title: 'List',
    dataIndex: 'list',
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
    list: `List : ${i}`,
    contact: `02-967-2222`,
  })
}

class News extends React.Component {
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
                <h4 id="traffic" className="card-title mb-0">News</h4>
                <div className="small text-medium-emphasis">News</div>
              </CCardBody>
            </Col>
            <Col span={16}>
              <CCardBody>
                <Row gutter={[16,16]} justify="end">
                  <Col>
                    <Button icon={<DeleteOutlined />} size="large" />
                  </Col>
                  <Col>
                    <Button type="text" danger size="large">+ News</Button>
                  </Col>
                </Row>
              </CCardBody>
            </Col>
          </Row>
        </CCard>
        <CCard className="mb-4">
          <Form layout="vertical">
            <Row>
              <Col span={8}>
                <CCardBody>
                  <Form.Item label="News name">
                    <Input placeholder='News name' />
                  </Form.Item>
                </CCardBody>
              </Col>
              <Col span={8}>
                <CCardBody>

                </CCardBody>
              </Col>
              <Col span={8}>
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
          <Row /* justify="space-between" */>
            <Col span={8}>
              <CCardBody>
                <h6 id="traffic" className="card-title mb-0">News List</h6>
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
              /*  pagination={{ position: [this.state.top] }} */
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data} />
          </CCardBody>
        </CCard>
      </>
    )
  }
}

export default News
