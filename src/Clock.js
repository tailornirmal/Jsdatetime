import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  Toast,
  ToastHeader,
  ToastBody
} from "reactstrap";
import { returnCurrentDate, returnCurrentTime } from "./utils/helpers";

import Select from "./ReusableComponents/Select";

class Clock extends Component {
    // this.state = {
    //   currentTime: returnCurrentTime()
    // };

  // componentDidMount() {
  //   this.myTimeInterval = setInterval(() => {
  //     this.setState({ currentTime: returnCurrentTime() });
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.myTimeInterval);
  // }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="6" style={{ padding: "20px" }}>
            <Card>
              <CardHeader>
                <center>{`Time and Date`}</center>
              </CardHeader>
              <div className="p-3 bg-secondary my-2 rounded">
                <Toast>
                  <ToastHeader>Time Information</ToastHeader>
                  <ToastBody>
                    <center>{returnCurrentTime()}</center>
                  </ToastBody>
                </Toast>
              </div>
              <div className="p-3 bg-success my-2 rounded">
                <Toast>
                  <ToastHeader>
                    Date Information <small>mm/dd/yyyy</small>
                  </ToastHeader>
                  <ToastBody>
                    <center>{returnCurrentDate()}</center>
                  </ToastBody>
                </Toast>
              </div>
            </Card>
          </Col>
          <Col xs="6" style={{ padding: "20px" }}>
            <Select />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Clock;
