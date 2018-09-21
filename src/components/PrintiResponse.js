import React, { Component } from 'react';
import styled from "styled-components";
import {Card, CardContent, Divider, Typography} from '@material-ui/core';

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #00bfff;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

class PrintiResponse extends Component {

  constructor(props) {
    super(props);
    console.log('PrintiResponse', props);
    console.log('PrintiResponse_this', this);
     this.state = {
     };
   }

  render() {
    const callbackCounter = this.props.callbackCounter;
    return (
      <Wrapper>
        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
          <div>
            <Card>
              <CardContent>
                <Typography style = {{display: 'flex', justifyContent: 'center'}} variant="display1">Resposta</Typography>
                <Divider />
                <Typography component="p">
                  {callbackCounter} - {this.props.callbackString}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default PrintiResponse;
