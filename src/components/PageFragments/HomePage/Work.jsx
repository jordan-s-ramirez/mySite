import React from 'react';
import {
  Timeline, Collapse, Switch, Row, Col, Button,
} from 'antd';

const { Panel } = Collapse;
var toggle = true;
var activeList = ['0', '0', '0', '0'];
var keyGen = 0;
class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeKey: activeList};
    this.handleChange = this.handleChange.bind(this);
    this.singleChange = this.singleChange.bind(this);
    this.singleChange1 = this.singleChange1.bind(this);
    this.singleChange2 = this.singleChange2.bind(this);
    this.singleChange3 = this.singleChange3.bind(this);
    this.singleChange4 = this.singleChange4.bind(this);
  }
  handleChange(event) {
    if(toggle) {
      activeList = ['1', '2', '3', '4'];
    }
    else {
      activeList = ['0', '0', '0', '0'];
    }
    this.setState({activeKey: activeList});
    toggle = !toggle;
  }

  singleChange(event) {
    console.log(keyGen)
    if(activeList[keyGen - 1] == '0') {
      activeList[keyGen - 1] = String(keyGen);
    }
    else {
      activeList[keyGen - 1] = '0';
    }
    this.setState({activeKey: activeList});
    console.log(activeList);
  }

  singleChange1(event) {
    console.log(keyGen)
    if(activeList[0] == '0') {
      activeList[0] = '1';
    }
    else {
      activeList[0] = '0';
    }
    this.setState({activeKey: activeList});
    console.log(activeList);
  }

  singleChange2(event) {
    console.log(keyGen)
    if(activeList[1] == '0') {
      activeList[1] = '2';
    }
    else {
      activeList[1] = '0';
    }
    this.setState({activeKey: activeList});
    console.log(activeList);
  }

  singleChange3(event) {
    console.log(keyGen)
    if(activeList[2] == '0') {
      activeList[2] = '3';
    }
    else {
      activeList[2] = '0';
    }
    this.setState({activeKey: activeList});
    console.log(activeList);
  }

  singleChange4(event) {
    console.log(keyGen)
    if(activeList[3] == '0') {
      activeList[3] = '4';
    }
    else {
      activeList[3] = '0';
    }
    this.setState({activeKey: activeList});
    console.log(activeList);
  }

  render() {
    return (
      <>
          <Row align="middle">
            <Col flex={4}>
              <h1 className="titleSeparate" align="left">
                Work Experience
              </h1>
            </Col>
            <Col flex={2}>
              <Switch
                checkedChildren="Close Details"
                unCheckedChildren="Expand Details"
                defaultChecked={false}
                onChange={this.handleChange}
              />
            </Col>
          </Row>
          <Timeline mode="right" pending="Open to Interviews" reverse>
              <Timeline.Item label="May 2019 - Aug 2019" color="#1269C7">
                <div onClick={keyGen=1, this.singleChange1}>
                  <Collapse ghost activeKey={this.state.activeKey}>
                    <Panel header="IT Intern - Jump Design Group" key='1'>
                      <p className="textAlign">
                        Researched and implemented innovative new intranet system. Maintained critical systems and
                        electronics to the highest standards.
                      </p>
                    </Panel>
                  </Collapse>
                </div>
              </Timeline.Item>
            <Timeline.Item label="Aug 2020 - March 2021" color="#1269C7">
              <div onClick={keyGen=2, this.singleChange2}>
                <Collapse ghost activeKey={this.state.activeKey}>
                  <Panel header="Undergraduate Research Assistant - Purdue Smart Cities" key="2">
                    <p className="textAlign">
                      Designing systems for deep learning reinforcement for indoor robot navigation, using
                      Python and TensorFlow. Used the documentation tool, Confluence, to record and share research.
                    </p>
                  </Panel>
                </Collapse>
              </div>
            </Timeline.Item>
            <Timeline.Item label="Sep 2019 - Now" color="#1269C7">
              <div onClick={keyGen=3,this.singleChange3}>
                <Collapse ghost activeKey={this.state.activeKey}>
                  <Panel header="Chief Design Officer - ParagonFlow" key="3">
                    <p className="textAlign">
                      Lead and manage design initiatives company-wide, including graphic, UI/UX and
                      brand design. Lead and manage design initiatives company-wide, including graphic,
                      UI/UX and brand design.
                    </p>
                  </Panel>
                </Collapse>
              </div>
            </Timeline.Item>
            <Timeline.Item label="May 2020 - Aug 2020" color="#1269C7">
              <div onClick={keyGen=4,this.singleChange4}>
                <Collapse ghost activeKey={this.state.activeKey}>
                  <Panel header="Field Test Engineer - Thales" key="4">
                    <p className="textAlign">
                      Maintained and monitored NYC Subway's communication based train controls. Worked
                      cross functional with Siemens and New Tech. Field tested new version of Zone
                      Controller.
                    </p>
                  </Panel>
                </Collapse>
              </div>
            </Timeline.Item>
          </Timeline>
      </>
    );
  }
}
export default Work;
