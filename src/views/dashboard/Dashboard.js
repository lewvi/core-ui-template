import React from 'react'
import { CCard, CCardBody } from '@coreui/react'
import { CChart} from '@coreui/react-chartjs'
import {
  Form,
  Select,
  Pagination,
  Row,
  Col,
  Space,
  Avatar,
  Badge,
  Card,
  Table,
  Statistic,
  Image ,
  List,
  Progress 
} from 'antd'
import { DeleteOutlined, FormOutlined, UserOutlined,ShoppingOutlined} from '@ant-design/icons'

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const columns = [
  {
    title: '#',
    dataIndex: 'no',
  },
  {
    title: 'Profile',
    dataIndex: 'profile',
    render: () => (
      <div>
        <Avatar /* style={{backgroundColor: '#A92928'}}  */ size="large" icon={<UserOutlined />} />
      </div>
    ),
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
    title: 'Company Name',
    dataIndex: 'companyName',
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
for (let i = 1; i <= 2; i++) {
  data.push({
    key: i,
    no: ` ${i}`,
    name: `Name:`,
    type: `Type`,
    companyName: `Company Name`,
  })
}

class Dashboard extends React.Component {
  state = {
    selectedRowKeys: [],
    loading: false,
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
    const {selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    return (
      <div>
        <Row gutter={[16, 16]} className="mb-4">
          <Col span={6}>
            <Card className='red'>
              <p>จำนวนสมาชิกทั้งหมด</p>
              <Row>
                <Col span={12}>
                  <p className='text-white-dashborad'>300,000</p>
                </Col>
                <Col span={12}>
                  
                </Col>
             </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card className='purple'>
              <p>จำนวนสมาชิกโดยแยก ตามทักษะ</p>
              <Row>
                <Col span={12}>
                  <p className='text-white-dashborad'>150,000</p>
                </Col>
                <Col span={12}>
                  
                </Col>
             </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card className='blue'>
              <p>จำนวนสมาชิกโดยแยก ตามหน่วยงานเอกชน</p>              
              <Row>
                <Col span={12}>
                  <p className='text-white-dashborad'>30</p>
                </Col>
                <Col span={12}>
                  
                </Col>
             </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card className='orange'>
              <p>จำนวนสมาชิกที่ยังว่างงาน</p>
              <Row>
                <Col span={12}>
                <p className='text-white-dashborad'>140</p>
                </Col>
                <Col span={12}>
                  
                </Col>
             </Row>
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={16}>
            <CCard className="mb-4">
              <CCardBody>
                <Row>
                  <Col span={8}>
                    <p>กราฟข้อมูลจำนวนสมาชิก</p>
                  </Col>
                  <Col span={16}>
                    <Row gutter={[16, 16]} justify="end">
                      <Col>
                        <Badge color="#A92928" text="Welder" />
                      </Col>
                      <Col>
                        <Badge color="#5345B1" text="Cutter" />
                      </Col>
                      <Col>
                        <Badge color="#5CA2E2" text="Carpenter" />
                      </Col>
                      <Col>
                        <Select placeholder="กลุ่มทักษะการทำงาน" style={{ width: 182 }}></Select>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                 <Row>
                  <CCardBody>
                    <CChart
                      type="bar"
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
                            label: 'Welder',
                            backgroundColor: '#9C2524',
                            data: [random(0, 50), random(0, 50)],
                          },
                          {
                            label: 'Cutter',
                            backgroundColor: '#5345B1',
                            data: [random(0, 50), random(0, 50)],
                          },
                          {
                            label: 'Carpenter',
                            backgroundColor: '#5CA2E2',
                            data: [random(0, 50), random(0, 50)],
                          },
                        ],
                      }}
                    />
                  </CCardBody>
                </Row>
              </CCardBody>
            </CCard>
          </Col>
          <Col span={8}>
            <CCard className="mb-4">
              <CCardBody>
                <Row>
                  <p>จำนวนโดยแยกประเภท</p>
                </Row>
                <Row>
                  <Col span={12}>
                    <Image justify="center" width={100} height={100} src=""/>
                    <p>ผู้พ้นโทษ (Ex-convicts)</p>
                  </Col>
                  <Col span={12}>
                    <Image justify="center" width={100} height={100} src="error" fallback="" />
                    <p>ผู้พักการลงโทษ (Parole)</p>
                  </Col>
                </Row>
              </CCardBody>
            </CCard>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={6}>
            <Card className="mb-4">
              <p>จำนวนใบสมัครที่สมาชิกดำเนินการส่ง</p>
              <Row>
                <Col span={8}>
                  <Statistic title="วันนี้" value={'157'} />
                </Col>
                <Col span={8}>
                  <Statistic title="เดือนนี้" value={'1,903'} />
                </Col>
                <Col span={8}>
                  <Statistic title="ปีนี้" value={'29,897'} />
                </Col>
              </Row>
            </Card>
            <Card>
              <Row>
                <p>ข้อมูลงานที่สมาชิกต้องการ</p>
              </Row>
              <Row>
                <Col gutter={[16, 16]} span={12}>
                  <Col>
                    <Badge color="#A92928" text="Welder" />
                  </Col>
                  <Col>
                    <Badge color="#5345B1" text="Cutter" />
                  </Col>
                  <Col>
                    <Badge color="#F6C500" text="Carpenter" />
                  </Col>
                </Col>
                <Col span={12}>
                  <CChart
                    type="doughnut"
                    data={{
                      /* labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'], */
                      datasets: [
                        {
                          backgroundColor: ['#A92928', '#F6C500', '#5345B1'],
                          data: [40, 20, 80],
                        },
                      ],
                    }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={12}>
            <Row gutter={[16, 16]} className="mb-4">
              <Col span={12}>
                <Card>
                  <p>จำนวนอัตราการทำงานที่หน่วยงาน เอกชนต้องการ</p>
                  <Row>
                    <Col span={16}>
                      <Statistic value={'50,000'} />
                    </Col>
                    <Col span={8}>
                      <Avatar style={{ backgroundColor: '#A92928' }} size='large' />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <p>จำนวนและรายการผู้ดูแลระบบทั้งหมด</p>
                  <Row>
                    <Col span={12}>
                      <Statistic title="จำนวน" value={''} />
                    </Col>
                    <Col span={12}>
                      <Statistic title="รายการ" value={''} />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Card>
              <Row>
                <p>ข้อมูลสมาชิกที่รอการบรรจุเข้าทำงาน</p>
              </Row>
              <Table rowSelection={rowSelection} columns={columns} dataSource={data}/>
            </Card>
          </Col>

          <Col span={6}>
            <Card>
              <p>ประเภทงานตามอัตรางาน โดยเรียงลำดับตามความต้องการ</p>
              <List>
                <List.Item>
                  <Row>
                    <Col>
                      <a>1. Welder</a>
                    </Col>
                  </Row>
                  <Progress type="dashboard" percent={80} width={70} />
                </List.Item>
                <List.Item>
                  <Row>
                    <Col>
                      <a>2. Cutter</a>
                    </Col>
                  </Row>
                  <Progress type="dashboard" percent={65} width={70} />
                </List.Item>
                <List.Item>
                  <Row>
                    <Col>
                      <a>3. Carpenter</a>
                    </Col>
                  </Row>
                  <Progress type="dashboard" percent={75} width={70} />
                </List.Item>
              </List>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard
