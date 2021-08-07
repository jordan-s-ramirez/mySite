import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `At Purdue University, I am currently majoring in Computer Engineering, 
  where I'm taking classes in a range of fields from coding to electrical engineering. 
  During my time at Purdue, I have enjoyed many fields of engineering through clubs and 
  activities. For example, in Engineers without Borders, I learned a lot about the engineering 
  design processes and civil engineering. Also, in my undergraduate research, I dove deep into 
  deep reinforcement learning for indoor robot navigation.`,
  paraTwo: '',
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Jordan', 'Ramirez', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <h1 className="titleSeparate">Work Experiance</h1>
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
            textH4="Jump Design Group"
            textH3="IT Intern"
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
};
export default AboutMe;
