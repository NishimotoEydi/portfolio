import React from 'react'
import styled, { keyframes } from 'styled-components'
import SplineBack from './SplineBack'


// Definindo a animação de fade-in
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const Section = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align: center;
  color: white;
  flex-direction: column; /* Alinha os filhos verticalmente */
`

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  text-transform: uppercase;
  word-spacing: 20px;
  letter-spacing: 5px;
  z-index: 1;
  font-size: 2rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  margin-bottom: 60px; /* Adiciona espaço extra para o ícone "down" */
  
  /* Aplica a animação de fade-in */
  animation: ${fadeIn} 1.5s ease-out forwards;
`

// A sobreposição escura
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 0;
`

// Animação suavizada de descida e reinício suave da bolinha
const wheelAnimation = keyframes`
  0% {
    opacity: 1;
    top: 10px;
  }
  50% {
    opacity: 0;
    top: 60px;
  }
  99% {
    opacity: 0;
    top: 60px;
  }
  100% {
    opacity: 1;
    top: 10px;
  }
`

const Mouse = styled.div`
  width: 50px;
  height: 80px;
  border: 3px solid #333;
  border-radius: 60px;
  position: absolute;
  bottom: 20px; /* Coloca o ícone "mouse" abaixo do conteúdo */
  left: 50%; /* Centraliza horizontalmente */
  transform: translateX(-50%); /* Ajusta a posição exata no centro */
  cursor: pointer;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    border-radius: 50%;
    opacity: 1;
    animation: ${wheelAnimation} 2s ease-in-out infinite; /* A animação agora vai para baixo e reinicia suavemente */
    -webkit-animation: ${wheelAnimation} 2s ease-in-out infinite;
  }
`

const Link = styled.a`
`

const Hero = () => {
  return (
    <Section id='home'>
      <SplineBack />
      <Overlay />
      <HeroContent>
        <h1>Welcome to my world</h1>
      </HeroContent>
      <Link href="#about">
        <Mouse />
      </Link>
    </Section>
  )
}

export default Hero
