import React from 'react'
import { SafeEnvironmentContainer } from './SafeEnvironment.style';
import { Container } from '@mui/material';

const SafeEnvironment = () => {
  return (
    
    <SafeEnvironmentContainer>
      {/* eslint-disable @next/next/no-sync-scripts*/}
      <script src="https://kit.fontawesome.com/ab209306f8.js" crossOrigin="anonymous"></script>
      <Container>
        Ambiente Seguro   <i className="fas fa-lock"></ i>
      </Container>

    </SafeEnvironmentContainer>
  )
}

export default SafeEnvironment;