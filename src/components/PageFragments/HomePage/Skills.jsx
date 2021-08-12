import React from 'react';
import {
  Collapse, Tag, Divider, Row, Col,
} from 'antd';

const { Panel } = Collapse;
const colorTag = "geekblue";
const Skills = () => (
  <>
    <h1 className="titleSeparate">Skills</h1>
    <Collapse defaultActiveKey={['1', '2']}>
      <Panel header="Hard Skills" key="1" showArrow={false}>
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24} md={12}>
            <Divider orientation="center">Technical Skills</Divider>
            <Tag color={colorTag}>Neural Networks</Tag>
            <Tag color={colorTag}>TensorFlow/Keras</Tag>
            <Tag color={colorTag}>React Native</Tag>
            <Tag color={colorTag}>Adobe Software Suite</Tag>
            <Tag color={colorTag}>Microsoft Excel</Tag>
            <Tag color={colorTag}>Microsoft Office</Tag>
            <Tag color={colorTag}>Linear Circut Design</Tag>
            <Tag color={colorTag}>Full Stack Developer</Tag>
          </Col>
          <Col xs={24} sm={24} md={12} >
            <Divider orientation="center">Programing Languages</Divider>
            <Tag color={colorTag}>Java</Tag>
            <Tag color={colorTag}>C Programming</Tag>
            <Tag color={colorTag}>Python</Tag>
            <Tag color={colorTag}>Assembly Arm Cortex</Tag>
            <Tag color={colorTag}>HTML/CSS</Tag>
            <Tag color={colorTag}>JS</Tag>
          </Col>
        </Row>
      </Panel>
      <Panel header="Soft Skills" key="2" showArrow={false}>
        <Tag color={colorTag}>Integrity</Tag>
        <Tag color={colorTag}>Dependability</Tag>
        <Tag color={colorTag}>Effective Communication</Tag>
        <Tag color={colorTag}>Opened-mindedness</Tag>
        <Tag color={colorTag}>Teamwork</Tag>
        <Tag color={colorTag}>Problem Solving</Tag>
        <Tag color={colorTag}>Critical Thinking</Tag>
        <Tag color={colorTag}>Adaptability</Tag>
        <Tag color={colorTag}>Orginization</Tag>
        <Tag color={colorTag}>Cross Functional</Tag>
      </Panel>
    </Collapse>
  </>
);
export default Skills;

