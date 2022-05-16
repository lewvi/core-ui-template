import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CChartLine } from '@coreui/react-chartjs'
import { CCard, CCardBody, CCol } from '@coreui/react'
import {
  Button,
  Pagination,
  Row,
  Col,
  Card,
  Table,
  Space,
  Divider,
  Statistic,
  Avatar,
  Badge,
} from 'antd'
import { FilePdfOutlined, FileExcelOutlined, UserOutlined } from '@ant-design/icons';
import { getStyle, hexToRgba } from '@coreui/utils'


const columns_company = [
  {
    title: 'No.',
    dataIndex: 'No',
  },
  {
    title: 'Company Name',
    dataIndex: 'companyName',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: () => (
      <div>
        <Badge status="success" text="Active" />
      </div>
    )
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
  },
]

const columns_member = [
  {
    title: 'No.',
    dataIndex: 'No',
  },
  {
    title: 'Profile',
    dataIndex: 'profile',
    render: () => (
      <div>
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
    )
  },
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'Rank',
    dataIndex: 'rank',
  },
  {
    title: 'Company Name',
    dataIndex: 'companyName',
  },
]

const data = []
for (let i = 1; i <= 5; i++) {
  data.push({
    key: i,
    No: ` ${i}`,
    id: `DOC0000${i}`,
    name: `Name : ${i}`,
    type: `Type : ${i}`,
    rank: `Rank : ${i}`,
    companyName: `company name : ${i}`,
    employerType: `Employer Type :${i}`,
    contact: `02-967-2222`,
  })
}

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

class Report extends React.Component {
  state = {
    selectedRowKeys: [],
    loading: false,
  }

  render() {
    return (
      <div>
        <CCard>
          <CCardBody>
            <Row>
              <Col span={8}>
                <h4 id="traffic" className="card-title mb-0">
                  Report
                </h4>
                <div className="small text-medium-emphasis">Report</div>
              </Col>
              <Col span={16}>
                <Row gutter={16} justify="end">
                  <Col>
                    <Button icon={<FileExcelOutlined />} size="large" />
                  </Col>
                  <Col>
                    <Button icon={<FilePdfOutlined />} size="large" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </CCardBody>
        </CCard>

        <CCard>
          <CCardBody>
            <Row gutter={16} className="mb-4">
              <Col span={14}>
                <Card>
                  <p>จำนวนสมาชิกทั้งหมด</p>
                  <Row gutter={[16, 16]}>
                    <Col span={6}>
                      <Statistic title="สมาชิกทั้งหมด" /* value={0} */ />
                    </Col>
                    <Col span={6}>
                      <Statistic title="แยกตามทักษะ" />
                    </Col>
                    <Col span={6}>
                      <Statistic title="แยกตามหน่วยงานเอกชน" />
                    </Col>
                    <Col span={6}>
                      <Statistic title="ยังว่างงาน" />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={10}>
                <Card>
                  <p>จำนวนโดยแยกประเภท</p>
                  <Row gutter={[16, 16]}>
                    <Col span={12}>
                      <Statistic title="ผู้พ้นโทษ (Ex-convicts)" value={50000} />
                    </Col>
                    <Col span={12}>
                      <Statistic title="ผู้พักการลงโทษ (Parole)" value={100000} />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            <Row>
              <p>จำนวนบริษัท 500 คน</p>
            </Row>

            <Card className="mb-4">
              <Table columns={columns_company} dataSource={data}></Table>
            </Card>

            <Row>
              <p>จำนวนสมาชิก</p>
            </Row>

            <Card className="mb-4">
              <Table columns={columns_member} dataSource={data}></Table>
            </Card>

            <Card title="กราฟข้อมูลจำนวนสมาชิก">
              <CChartLine
                style={{ height: '300px', marginTop: '40px' }}
                data={{
                  labels: [
                    'ม.ค',
                    'ก.พ',
                    'ก.พ',
                    'ม.ย',
                    'พ.ค',
                    'มิ.ย',
                    'ก.ค',
                    'ส.ค',
                    'ก.ย',
                    'ต.ค',
                    'พ.ย',
                    'ธ.ค',
                  ],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                      borderColor: getStyle('--cui-info'),
                      pointHoverBackgroundColor: getStyle('--cui-info'),
                      borderWidth: 2,
                      data: [
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                      ],
                      fill: true,
                    },
                    {
                      label: 'My Second dataset',
                      backgroundColor: 'transparent',
                      borderColor: getStyle('--cui-success'),
                      pointHoverBackgroundColor: getStyle('--cui-success'),
                      borderWidth: 2,
                      data: [
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                        random(50, 200),
                      ],
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        drawOnChartArea: false,
                      },
                    },
                    y: {
                      ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        stepSize: Math.ceil(250 / 5),
                        max: 250,
                      },
                    },
                  },
                  elements: {
                    line: {
                      tension: 0.4,
                    },
                    point: {
                      radius: 0,
                      hitRadius: 10,
                      hoverRadius: 4,
                      hoverBorderWidth: 3,
                    },
                  },
                }}
              />
            </Card>
          </CCardBody>
        </CCard>
      </div>
    )
  }
}

export default Report
