import React from 'react';
import styled from "styled-components";
import AutoGrid from './AutoGrid';

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

export default class Printi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Wrapper>
        <span>Printi</span>
        <section>
          <p>
            Test, Form, request Ajax, request PHP, return Json
          </p>
          <p>
            https://docs.intelipost.com.br/v1/cotacao/criar-cotacao-por-volume
          </p>
        </section>
        <AutoGrid />
      </Wrapper>
    )
  }
}
