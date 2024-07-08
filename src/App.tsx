import React from 'react'
import './App.css'
import SwitchComponent from './components/SwitchComponent'
import { Divider,Container, Typography } from '@mui/material'

function App() {
 

  return (
    <Container sx={{textAlign:'center'}}>
      <Typography sx={{fontWeight:'bold'}} variant="body1" color="initial">Product Setting</Typography>
     <SwitchComponent/>
     <SwitchComponent/>
    </Container>
  )
}

export default App
