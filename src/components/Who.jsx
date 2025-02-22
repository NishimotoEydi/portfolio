import React, { useEffect, useState, useRef, Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';
import Person from './Person';

// Estilos
const Section = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 clamp(1rem, 5%, 5rem);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }
`;

const Content = styled.div`
  position: relative;
  text-align: left;
  z-index: 1;
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  margin: 0em 2em;

  @media (max-width: 768px) {
    text-align: left;
    max-width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: auto;
  }
`;

const HiText = styled.p`
  color: white;
  font-size: clamp(1rem, 3vw, 1.5rem);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 4vw, 2rem);
  }
`;

const DescriptionText = styled.p`
  color: white;
  font-size: clamp(0.875rem, 2.5vw, 1.25rem);
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: clamp(1.25rem, 3.5vw, 1.75rem);
  }
`;

const letterAnimation = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const holderAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const AnimatedLetter = styled.div`
  display: inline-block;
  opacity: 0;
  &.animation {
    animation: ${letterAnimation} 0.5s ease-out forwards;
    animation-delay: ${({ $delay }) => $delay}s; // Usando $delay como transient prop
  }
`;

const AnimatedText = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  font-family: monospace;
  white-space: nowrap;
  font-weight: bolder;
  color: #0099ff;
  font-size: clamp(1.5rem, 5vw, 3rem);
  &.holder-animation {
    animation: ${holderAnimation} 0.5s ease-in;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    height: auto;
    margin: 0.5rem 0;
    font-size: clamp(2rem, 6vw, 4rem);
  }
`;

const SocialCard = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

const Who = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [showCanvas, setShowCanvas] = useState(window.innerWidth >= 768);
  const sliderCounter = ['Developer', 'Code', 'Web Design', 'UI/UX Designer'];
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setShowCanvas(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTriggerAnimation(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!triggerAnimation) return;

    const slide = () => {
      setSliderIndex((prev) => (prev >= sliderCounter.length - 1 ? 0 : prev + 1));
      if (textRef.current) {
        textRef.current.classList.remove('holder-animation');
        void textRef.current.offsetWidth;
        textRef.current.classList.add('holder-animation');
      }
    };

    slide();
    const interval = setInterval(slide, 2000);
    return () => clearInterval(interval);
  }, [triggerAnimation]);

  const currentText = sliderCounter[sliderIndex];
  const animatedText = currentText.split('').map((char, index) => (
    <AnimatedLetter
      key={`${sliderIndex}-${index}`}
      $delay={index / 10} // Alterado para $delay
      className="animation"
    >
      {char === ' ' ? '\u00A0' : char}
    </AnimatedLetter>
  ));

  return (
    <Section id="about" ref={sectionRef}>
      <Container>
        <Content>
          <div className="ola">
            <HiText>Hi, I'm</HiText>
          </div>
          <AnimatedText ref={textRef} className="holder-animation">
            {animatedText}
          </AnimatedText>
          <div>
            <DescriptionText>
              My name is Eydi Nishimoto! I am a Software Engineering student
            </DescriptionText>
          </div>

          <SocialCard>
            <a href="https://www.linkedin.com/in/eydi-nishimoto-203b02227/" target="_blank" rel="noopener noreferrer">
              <svg fill="#fff" viewBox="0 0 448 512" height="clamp(1.5em, 4vw, 2em)" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
            <a href="https://github.com/NishimotoEydi" target="_blank" rel="noopener noreferrer">
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="clamp(1.5em, 4vw, 2em)" height="clamp(1.5em, 4vw, 2em)" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.55 5.47 7.63.4.07.55-.17.55-.38v-1.43c-2.19.48-2.65-.88-2.65-.88-.36-.93-.89-1.18-.89-1.18-.73-.5.06-.49.06-.49.81.06 1.24.85 1.24.85.73 1.24 1.93.88 2.4.67.07-.53.28-.88.51-1.08-1.8-.2-3.69-.9-3.69-3.98 0-.88.31-1.6.82-2.17-.08-.2-.36-.99.08-2.08 0 0 .68-.22 2.21.82.64-.18 1.33-.27 2.01-.27s1.37.09 2.01.27c1.53-1.03 2.21-.82 2.21-.82.44 1.09.16 1.88.08 2.08.51.57.82 1.29.82 2.17 0 3.08-1.89 3.78-3.7 3.98.23.2.44.59.44 1.19v1.78c0 .21.15.45.55.38C13.71 14.55 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </SocialCard>
        </Content>

        {showCanvas && (
          <Canvas
            gl={{ antialias: true, logarithmicDepthBuffer: true }}
            camera={{ position: [4, 1, 6], fov: 75, near: 0.1, far: 1000 }}
            style={{ 
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0
            }}
          >
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
              <Person 
                position={[4, -2.8, 4]} 
                scale={2.3} 
                rotation={[0, 0, 0]} 
                startAnimation={triggerAnimation} 
              />
            </Suspense>
          </Canvas>
        )}
      </Container>
    </Section>
  );
};

export default Who;