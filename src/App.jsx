import styled from "styled-components";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Navbar from "./components/Navbar";
import Who2 from "./components/Who2";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  color: white;
  background-color: black;
  overflow-y: scroll; /* Permite rolagem, mas mantemos escondida */
  
  /* Esconder a barra de rolagem no Webkit (Chrome, Safari) */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Esconder a barra de rolagem no Firefox */
  scrollbar-width: none;
  
  /* Garante que não haja margens ou bordas */
  margin: 0;
  padding: 0;
  width: 100vw; /* Garante largura total */
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Who />
      <Who2 />
      <Works />
      <Contacts />
    </Container>
  );
}

export default App;