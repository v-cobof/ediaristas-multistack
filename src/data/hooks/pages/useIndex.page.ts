import { useMemo, useState } from 'react';
import { UserShortInterface } from '../../@types/UserInterface';
import { ValidationService } from '../../services/ValidationService';

export default function useIndex() {
  const [cep, setCep] = useState(''),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [erro, setErro] = useState(''),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0);

  
  return {
    cep, setCep, cepValido,
  };
}