import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody } from '@coreui/react'
import { Button, Input, Form, Pagination, Row, Col,Avatar } from 'antd'
import { Footer } from 'antd/lib/layout/layout'
import { UserOutlined, LeftOutlined } from '@ant-design/icons'

class AddSkill extends React.Component {
  render() {
    return (
      <>
        <CCard>
          <CCardBody>
            <Row gutter={16} align="middle">
              <Col>
                <Avatar
                  style={{ backgroundColor: '#A92928' }}
                  size={40}
                  onClick={() => window.history.back()}
                  icon={<LeftOutlined />}
                />
              </Col>
              <Col>
                <h4 id="traffic" className="card-title mb-0">
                  Skill
                </h4>
                <div className="small text-medium-emphasis">Skill</div>
              </Col>
            </Row>
          </CCardBody>
        </CCard>

        <Form layout="vertical">
          <CCard>
            <CCardBody>
              <Row>
                <Col>
                  <h6 id="traffic" className="card-title mb-0">
                    Type
                  </h6>
                </Col>
              </Row>

              <Row justify="center">
                <Col span={16}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item label="Name">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Number Of People">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16} justify="end">
                    <Col>
                      <Button>Cancel</Button>
                    </Col>
                    <Col>
                      <Button type="primary">Save</Button>
                    </Col>
                  </Row>

                  <Footer />
                </Col>
              </Row>
            </CCardBody>
          </CCard>
        </Form>
      </>
    )
  }
}

export default AddSkill
