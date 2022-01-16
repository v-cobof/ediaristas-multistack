import { styled } from '@mui/material/styles';

export const SafeEnvironmentContainer = styled('div')`
  color: ${({theme}) => theme.palette.text.secondary};
  font-weight: bolder;
  background-color: ${({theme}) => theme.palette.background.default};
  text-align: right;
  padding: ${({theme}) => theme.spacing(2)} 0;
  font-size: 12px;

  i {
    background-color: white;
  }
`;