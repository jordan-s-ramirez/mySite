import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';

const WorkExperiance = () => (
  <>
    <h1 className="titleSeparate">Work Experience</h1>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12} lg={8}>
        <AboutTile
          img="thales.jpg"
          href="https://www.thalesgroup.com/"
          height={60}
          alt="Thales"
          textH3="Thales"
          textH4="Field Test Engineer"
          textH5="Summer 2021"
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <AboutTile
          img="paragonflow.jpg"
          alt="Paragon Flow"
          textH3="Paragon Flow"
          textH4="Chief Design Officer"
          textH5="2019 - Present"
          href="https://paragonflow.com/"
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <AboutTile
          img="jump.jpg"
          alt="Jump Design Group"
          textH3="Jump Design Group"
          textH4="IT Intern"
          textH5="Summer 2019"
          href="https://jumpdesigngroup.com/"
          height={60}
          width={60}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <AboutTile
          img="purdue.png"
          alt="purdue"
          textH4="Undergraduate Research Assistant"
          textH3="Purdue Smart Cities"
          textH5="Jan 2020 - May 2020"
          height={60}
          width={60}
        />
      </Col>
    </Row>
  </>
);
export default WorkExperiance;
