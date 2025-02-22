import Spline from '@splinetool/react-spline';
import styled from 'styled-components';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw; /* 100% da largura da tela */
  height: 100vh; /* 100% da altura da tela */
  object-fit: cover; /* Garante que a cena seja redimensionada corretamente, sem distorções */
`

export default function SplineBack() {
  return (
    <Section>
      <Spline scene="https://prod.spline.design/fZ1novTzk1oyd4xe/scene.splinecode" />
    </Section>
  );
}
