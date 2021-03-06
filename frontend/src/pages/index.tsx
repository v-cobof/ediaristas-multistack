import type { NextPage } from 'next';
import PageTitle from '../ui/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from '../ui/components/feedback/SafeEnvironment/SafeEnvironment';
import UserInformation from '../ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from '../ui/components/inputs/TextFieldMask/TextFieldMask';
import { Button, Typography, Container, CircularProgress } from '@mui/material';
import { FormElementsContainer, ProfissionalContainer } from '../ui/styles/pages/index.style'
import { ProfissionalPaper } from '../ui/styles/pages/index.style';
import { useState } from 'react';
import useIndex from '../data/hooks/pages/useIndex.page';

const Home: NextPage = () => {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes
  } = useIndex();

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

          {erro && <Typography color={'error'}>{erro}</Typography>}

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>
        </FormElementsContainer>

        {buscaFeita && (diaristas.length > 0 ?
          <ProfissionalPaper>
            <ProfissionalContainer>

              {diaristas.map((item, index) => {
                return (
                  <UserInformation
                    key={index}
                    name={item.nome_completo}
                    picture={item.foto_usuario}
                    rating={item.reputacao}
                    description={item.cidade}
                  />
                );
              })}
            </ProfissionalContainer>

            <Container sx={{ textAlign: 'center' }}>
              {diaristasRestantes > 0 && (
                <Typography sx={{ mt: 5 }}>
                  ... e mais {diaristasRestantes}
                  {diaristasRestantes > 1
                    ? 'profissionais atendem'
                    : 'profissional atende'} ao seu endereço.
                </Typography>
              )}

              <Button
                variant={'contained'}
                color={'secondary'}
                sx={{ mt: 5 }}
              >
                Contratar um Profissional
              </Button>

            </Container>
          </ProfissionalPaper>
          :
          <Container>
            <Typography align={'center'} color={'textPrimary'} sx={{mb: 5}}>
              Ainda não temos nenhuma diarista disponível em sua região
            </Typography>
          </ Container>
        )}


      </Container>
    </div>
  )
}

export default Home
