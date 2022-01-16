import React from 'react';
import { FooterContainer, FooterStyled, FooterTitle, AppList } from '../Footer/Footer.style';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: '400px'}}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={'body2'} sx={{ marginTop: 2 }}>
            O e-diaristas te ajuda a encontrar um profissional perfeito
            para realizar a limpeza da sua casa. Garantimos os melhores
            profissionais com total segurança e praticidade! São
            milhares de clientes satisfeitos por todo o país.
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a
                href={'/'}
                rel={'noopener noreferrer'}
              >
                <img src={'https://github.com/treinaweb/treinaweb-workshop-multistack-react/blob/v02/public/img/logos/app-store.png?raw=true'} alt={'App Store'} />
              </a>
            </li>

            <li>
              <a
                href={'/'}
                rel={'noopener noreferrer'}
              >
                <img src={'https://github.com/treinaweb/treinaweb-workshop-multistack-react/blob/v02/public/img/logos/google-play.png?raw=true'} alt={'Google Play'} />
              </a>
            </li>
          </AppList>
        </div>

      </FooterContainer>
    </FooterStyled>
  );
}

export default Footer;