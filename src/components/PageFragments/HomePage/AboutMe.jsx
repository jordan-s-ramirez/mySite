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
    </>
  );
};
export default AboutMe;
