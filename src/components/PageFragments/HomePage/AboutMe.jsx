import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello !! My name is Jordan Ramirez... MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. 
  MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. 
  MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. 
  MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. `,
  paraTwo: `Currently I work... MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. 
  MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. 
  MORE COMING SOON. MORE COMING SOON. MORE COMING SOON. I'm always a learner and a self taught programmer.`,
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
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="New York, NY"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursuing B. Science in"
            textH3="Computer Engineering"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
