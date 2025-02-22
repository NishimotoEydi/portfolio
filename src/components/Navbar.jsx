import React, { useState } from 'react'
import styled from 'styled-components'

// Definições dos componentes styled
const Section = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px;
  padding: 20px 9%;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 15px 5%;
  }
`

const Logo = styled.img`
  width: 70px;
  height: 70px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`

const Hamburger = styled.div`
  display: none;
  width: 30px;
  height: 20px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  span {
    width: 100%;
    height: 3px;
    background: #fff;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.$isOpen ? '0' : '-100%'};
  width: 250px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  transition: right 0.3s ease;
  padding: 60px 20px 20px;
  z-index: 11;
`

const List = styled.ul`
  display: flex;
  gap: 80px;
  list-style: none;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 5px;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 768px) {
    display: ${props => props.$mobile ? 'flex' : 'none'};
    flex-direction: column;
    gap: 30px;
    padding: 20px;
  }
`

const ListItem = styled.li`
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  
  &:hover {
    color: #fff;
  }
`

// Componente Navbar
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <Section>
      <Container>
        <Logo src="./img/logo.png" />
        <List>
          <ListItem><Link href="#home">Home</Link></ListItem>
          <ListItem><Link href="#about">About</Link></ListItem>
          <ListItem><Link href="#works">Works</Link></ListItem>
          <ListItem><Link href="#contacts">Contacts</Link></ListItem>
        </List>
        <Hamburger onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      </Container>
      <Sidebar $isOpen={isSidebarOpen}>
        <List $mobile>
          <ListItem><Link href="#home" onClick={toggleSidebar}>Home</Link></ListItem>
          <ListItem><Link href="#about" onClick={toggleSidebar}>About</Link></ListItem>
          <ListItem><Link href="#works" onClick={toggleSidebar}>Works</Link></ListItem>
          <ListItem><Link href="#contacts" onClick={toggleSidebar}>Contacts</Link></ListItem>
        </List>
      </Sidebar>
    </Section>
  )
}

export default Navbar