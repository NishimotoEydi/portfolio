import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  scroll-snap-align: center;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 26em;
  height: 30em;
  background: #171717;
  transition: 1s ease-in-out;
  clip-path: polygon(40px 0%, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0% 40px);
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5em;
  margin-top: 5em;
`;

const Title = styled.span`
  font-weight: bold;
  color: white;
  text-align: center;
  display: block;
  font-size: 2em;
  margin-bottom: 1.5em;
`;

const Info = styled.p`
  font-weight: 400;
  color: white;
  text-align: center;
  font-size: 1.2em;
  margin: 2em 1em;
  line-height: 1.6;
`;

const Button = styled.button`
  background: #0099ff;
  color: white;
  font-size: 1.2em;
  padding: 0.8em 1.5em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1.5em;
  transition: background 0.2s;
  &:hover {
    background: #4cb2f7;
  }
`;

const Who2 = () => {
  return (
    <Section id="works">
      <Card>
        <Title>About Me</Title>
        <Info>I’m Walter, a multidisciplinary designer who focuses on telling my clients’ stories visually through engaging and meaningful experiences. With years of experience in UX/UI design, I specialize in creating responsive websites and functional user interfaces that enhance user interaction and satisfaction.</Info>
        <Button>Download CV</Button>
      </Card>
    </Section>
  );
};

export default Who2;
