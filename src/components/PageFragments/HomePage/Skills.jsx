import React from 'react';
import {
  Collapse, Tag, Divider, Row, Col,
} from 'antd';

const { Panel } = Collapse;

const tag0Y = "cyan";
const tag2Y = "blue";
const tag4Y = "red";

const Skills = () => (
  <>
    <h1 className="titleSeparate">Skills</h1>
    <Collapse defaultActiveKey={['1', '2']}>
      <Panel header="Hard Skills" key="1">
        <Row align="center">
          <Tag color={tag0Y}>1-2 Years Experience</Tag>
          <Tag color={tag2Y}>2-4 Years Experience</Tag>
          <Tag color={tag4Y}>4-6 Years Experience</Tag>
        </Row>
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24} md={12} >
            <Divider orientation="center">Technical Skills</Divider>
            <Tag color={tag0Y}>Neural Networks</Tag>
            <Tag color={tag0Y}>TensorFlow/Keras</Tag>
            <Tag color={tag4Y}>Adobe Software Suite</Tag>
            <Tag color={tag4Y}>Microsoft Excel</Tag>
            <Tag color={tag4Y}>Microsoft Office</Tag>
            <Tag color={tag2Y}>Linear Circut Design</Tag>
            <Tag color={tag2Y}>Full Stack Developer</Tag>
          </Col>
          <Col xs={24} sm={24} md={12} >
            <Divider orientation="center">Programing Languages</Divider>
            <Tag color={tag2Y}>Java</Tag>
            <Tag color={tag2Y}>C Programming</Tag>
            <Tag color={tag4Y}>Python</Tag>
            <Tag color={tag0Y}>Assembly Arm Cortex</Tag>
            <Tag color={tag4Y}>HTML/CSS</Tag>
            <Tag color={tag2Y}>JS</Tag>
          </Col>
        </Row>
      </Panel>
      <Panel header="Soft Skills" key="2">
        <Tag color="geekblue">Integrity</Tag>
        <Tag color="geekblue">Dependability</Tag>
        <Tag color="geekblue">Effective Communication</Tag>
        <Tag color="geekblue">Opened-mindedness</Tag>
        <Tag color="geekblue">Teamwork</Tag>
        <Tag color="geekblue">Problem Solving</Tag>
        <Tag color="geekblue">Critical Thinking</Tag>
        <Tag color="geekblue">Adaptability</Tag>
        <Tag color="geekblue">Orginization</Tag>
        <Tag color="geekblue">Cross Functional</Tag>
      </Panel>
    </Collapse>
  </>
);
export default Skills;

