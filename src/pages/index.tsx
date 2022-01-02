import type { NextPage } from 'next';
import PageTitle from '../ui/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from '../ui/components/feedback/SafeEnvironment/SafeEnvironment';
import UserInformation from '../ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from '../ui/components/inputs/TextFieldMask/TextFieldMask';
import { Button, Typography, Container } from '@mui/material';
import { FormElementsContainer, ProfissionalContainer } from '../ui/styles/pages/index.style'
import { ProfissionalPaper } from '../ui/styles/pages/index.style';
import {useState} from 'react';
import useIndex from '../data/hooks/pages/useIndex.page';

const Home: NextPage = () => {
  const {cep, setCep, cepValido} = useIndex();


  return (
    <div>
      <Container>
        <SafeEnvironment />
        <PageTitle title={'Conheça os profissionais'} subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'} />

        <FormElementsContainer>
          <TextFieldMask 
          mask={'99.999-999'} 
          label={'Digite seu CEP'} 
          fullWidth 
          variant={'outlined'} 
          value={cep} 
          onChange={(event) => setCep(event.target.value)}
          /> 

          {cepValido}

          <Typography color={'error'}>CEP inválido</Typography>

          <Button variant={'contained'} color={'secondary'} sx={{ width: '220px' }}>Buscar</Button>
        </FormElementsContainer>

        <ProfissionalPaper>
          <ProfissionalContainer>
            <UserInformation
              name={'Victor Cobo'}
              picture={'https://github.com/v-cobof.png'}
              rating={5}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Victor Cobo'}
              picture={'https://github.com/v-cobof.png'}
              rating={5}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Victor Cobo'}
              picture={'https://github.com/v-cobof.png'}
              rating={5}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Victor Cobo'}
              picture={'https://github.com/v-cobof.png'}
              rating={5}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Victor Cobo'}
              picture={'https://github.com/v-cobof.png'}
              rating={5}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Victor Cobo'}
              picture={'https://github.com/v-cobof.png'}
              rating={5}
              description={'São Paulo'}
            />
          </ProfissionalContainer>
        </ProfissionalPaper>
      </Container>
    </div>
  )
}

export default Home
