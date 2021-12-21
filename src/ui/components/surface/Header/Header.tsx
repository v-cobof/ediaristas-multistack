import React from 'react';
import { HeaderAppBar, HeaderLogo } from './Header.style';
import { Toolbar, Container } from '@mui/material';

const Header: React.FC = () => {
  return (
    <HeaderAppBar position="sticky">
      <Toolbar component={Container}>
        <HeaderLogo src="https://raw.githubusercontent.com/treinaweb/treinaweb-workshop-multistack-react/a69df27790724df7f34ee892586e7858220dddf8/public/img/logos/logo.svg"></HeaderLogo>
      </Toolbar>
    </HeaderAppBar>
  )
};


export default Header;