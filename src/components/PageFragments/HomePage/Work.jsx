import React from 'react';
import { Timeline, Collapse } from 'antd';

const { Panel } = Collapse;

const Work = () => (
  <>
    <h1 className="titleSeparate">Work Experience</h1>
    <Timeline mode="right" pending="Open to Interviews" reverse>
      <Timeline.Item label="2019 - Present" color="#1269C7">
        <Collapse ghost>
          <Panel header="IT Intern - Jump Design Group">
            <p className="textAlign">Researched and implemented innovative 
              new intranet system. Researched and implemented innovative
               new intranet system. Maintained critical systems 
               and electronics to the highest standards
            </p>
          </Panel>
        </Collapse>
      </Timeline.Item>
      <Timeline.Item label="Aug 2020 - March 2021" color="#1269C7">
        <Collapse ghost>
          <Panel header="Undergraduate Research Assistant - Purdue Smart Cities">
            <p className="textAlign">Designing systems for deep learning reinforcement for indoor robot navigation 
            Designing systems for deep learning reinforcement for indoor robot navigation
            Used the documentation tool, Confluence, to record and share research. 
            </p>
          </Panel>
        </Collapse>
      </Timeline.Item>
      <Timeline.Item label="2019 - Present" color="#1269C7">
        <Collapse ghost>
          <Panel header="Chief Design Officer - ParagonFlow">
            <p className="textAlign">Lead and manage design initiatives company-wide, 
              including graphic, UI/UX and brand design. Lead and manage design 
              initiatives company-wide, including graphic, UI/UX and brand design
            </p>
          </Panel>
        </Collapse>
      </Timeline.Item>
      <Timeline.Item label="Summer 2021" color="#1269C7">
        <Collapse ghost defaultActiveKey={['1']}>
          <Panel header="Field Test Engineer - Thales" key="1">
            <p className="textAlign">Maintained and monitored NYCT Subway's communication based train controls.
              Worked cross functional with other companies.
              Field tested new version of Zone Controller. 
            </p>
          </Panel>
        </Collapse>
      </Timeline.Item>
    </Timeline>
  </>
);
export default Work;
