import styled, { css } from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';


export const Container = styled.View`
  margin-bottom: 20px;
`

export const InputText  = styled.TextInput.attrs(({theme})=> ({
  
}))`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: flex-start ;
  
  background-color: ${({theme})=> theme.COLORS.WHITE};
  border: 1px solid ${({theme})=> theme.COLORS.GRAY_5};
  border-radius:6px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT_SM}px;
    color: ${theme.COLORS.GRAY_2};
    font-weight:700;
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-bottom:3px ;
  `};
`;
