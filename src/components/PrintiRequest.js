import React from 'react';
import styled from "styled-components";
import {Button, Card, CardContent, Divider, Typography, InputAdornment, FormControl, TextField } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';


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

const formStyle = {
  width:'200px',
  margin: '2px'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin:'10px'
}

const newStyle = {

}

export default class PrintiRequest extends React.Component {

  constructor(props) {
    super(props);
    console.log('PrintiRequest', props);
    console.log('PrintiRequest_this', this);
    this.state = {
      counter: 0,
      response: '',
    };
  }

  update(response){
    console.log('PrintiRequest_update_this', this);
    const state = {
      counter : this.state.counter + 1,
      response : response,
    };
    this.setState(state)
    this.props.onUpdate(state);
  }

  submitForm() {

    console.log('submitForm', this);

    var body = JSON.stringify({
      origin_zip_code: document.getElementById('origin_zip_code').value,
      destination_zip_code: document.getElementById('destination_zip_code').value,
      weight: document.getElementById('weight').value,
      cost_of_goods: document.getElementById('cost_of_goods').value,
      width: document.getElementById('width').value,
      height: document.getElementById('height').value,
      length: document.getElementById('length').value,
    });

    var request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "api-key": "9009f95101bf48b01a50928a2a71ed1ae9083fc1d3c08439b0613dfc38e656c5",
      },
      body: body
    };

    console.log('request', request);

    fetch('https://intense-woodland-47068.herokuapp.com/php/actions.php?printi=true', request)
    //.then(response => (response.json()))
    .then((response) => {
      console.log('fetch response', response)
      this.update('responseHTT');
      if (typeof response !== 'undefined') {

        if (response.status !== '200') {
            alert('Status: ' + response.status)
        }

      } else {
        alert('Houve uma falha')
      }
    })
    .then((res) => {
      console.log('fetch res', res)
      if (typeof res !== 'undefined') {

      }
    })

  }

  render() {
    return (
      <Wrapper>
        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
          <div>
            <Card style = {{marginBottom: '20px', display: 'flex', justifyContent: 'center'}}>
              <CardContent>
                <Typography style = {{display: 'flex', justifyContent: 'center'}} variant="display1">Requisição</Typography>
                <Divider />
                <div style={divStyle}>
                  <FormControl style={formStyle}>
                  <TextField
                    id="origin_zip_code"
                    label="origin_zip_code"
                    ref="origin_zip_code"
                    defaultValue="04012-090"
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                  </FormControl>
                  <FormControl style={formStyle}>
                  <TextField
                    id="destination_zip_code"
                    label="destination_zip_code"
                    ref="destination_zip_code"
                    defaultValue="04012-090"
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                  </FormControl>
                  <FormControl style={formStyle}>
                  <TextField
                    id="weight"
                    label="weight"
                    ref="weight"
                    defaultValue="1"
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                  </FormControl>
                  <FormControl style={formStyle}>
                  <TextField
                    id="cost_of_goods"
                    label="cost_of_goods"
                    ref="cost_of_goods"
                    defaultValue="1"
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                  </FormControl>
                  <FormControl style={formStyle}>
                  <TextField
                    id="width"
                    label="width"
                    ref="width"
                    defaultValue="2"
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                  </FormControl>
                  <FormControl style={formStyle}>
                  <TextField
                    id="height"
                    label="height"
                    ref="height"
                    defaultValue="3"
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                  </FormControl>
                  <FormControl style={formStyle}>
                  <TextField
                    id="length"
                    label="length"
                    ref="length"
                    defaultValue="4"
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                  </FormControl>
                </div>
                <div style = {divStyle}>
                  <Button style={newStyle} onMouseDown={() => this.submitForm()}  variant = "contained" color = "primary">Calculate</Button>
                  {/*<Button style={newStyle} onMouseDown={() => this.props.changePage('homepage', null, null)} variant = "contained">Login</Button>*/}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Wrapper>
    )
  }
}
