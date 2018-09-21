import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Wrapper>
      <span>Sobre Mim</span>
      <section>
        <p>
          Projeto em desenvolvimento por Marcio dos Santos Amorim
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #ccc;
  padding: 20px;

  span {
    color: #000;
    font-size: 40px;
  }

  section {
    color: #000;
  }
`;

export default About;
