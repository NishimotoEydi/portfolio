import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  scroll-snap-align: center;
  background-color: #111;
`

const Contacts = () => {
  return (
    <Section id='contacts'>Contacts</Section>
  )
}

export default Contacts