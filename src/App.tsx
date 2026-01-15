// import { useState } from 'react'
import { Container, Stack } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
     <Stack h="100vh">
      <Navbar />
      <Container>
        <p> I am not sure yet</p>
        <p> another paragraph</p>
      </Container>
     </Stack>
    
  )
}

export default App
