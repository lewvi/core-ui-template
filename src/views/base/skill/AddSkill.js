import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CCard, CCardBody } from '@coreui/react'
import { Button, Input, Form, Pagination, Row, Col } from 'antd'
import { Footer } from 'antd/lib/layout/layout'

class AddSkill extends React.Component {
  render() {
    return (
      <>
        <CCard className="mb-4">
          <Row justify="space-between">
            <Col span={8}>
              <CCardBody>
                <h4 id="traffic" className="card-title mb-0">
                  Skill
                </h4>
                <div className="small text-medium-emphasis">Skill</div>
              </CCardBody>
            </Col>
          </Row>
        </CCard>

        <Form layout="vertical">
          <CCard>
            <Row>
              <CCardBody>
                <h6 id="traffic" className="card-title mb-0">
                  Type
                </h6>
              </CCardBody>
            </Row>
            <Row gutter={16} justify="center">
              <Col span={6} />
              <Col span={6}>
                <Form.Item label="Name">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Number Of People">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6} />
            </Row>
            <Footer>
              <Row gutter={[16, 16]} justify="end">
                <Col>
                  <Button>Cancel</Button>
                </Col>
                <Col>
                  <Button type="primary">Save</Button>
                </Col>
              </Row>
            </Footer>
          </CCard>
        </Form>
      </>
    )
  }
}

export default AddSkill
