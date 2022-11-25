import { View } from 'react-native';
import styled, {css} from "styled-components/native";

type Props = {
  width: number
  direction: string
}

export type ColorType = 'GREEN_DARK' | 'RED_DARK' 


type PropsColorBoll = {
  color: ColorType
}

export const Container = styled.View<Props>`
  flex: 1; 
  width: ${({ width })=> width ? `${width}%` : 'auto'};
  flex-direction: ${({direction})=> direction ? direction : 'column' };
`

export const Title = styled.Text<Props>`
  ${({ theme })=> css`
    font-size: ${theme.FONT_SIZE.TEXT_LX}px;
    color: ${ theme.COLORS.GRAY_1 };
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-weight:700;
  `}
`

export const TextBase = styled.Text<Props>`
  ${({ theme })=> css`
    font-size: ${theme.FONT_SIZE.TEXT_BASE}px;
    color: ${ theme.COLORS.GRAY_2 };
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme })=> css`
    font-size: ${theme.FONT_SIZE.TEXT_BASE}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-weight:700;
    margin-top:15px ;
  `}
`

export const Chip = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  background-color: ${({theme}) => theme.COLORS.GRAY_6};
  padding: 5px 20px;
  border-radius: 50px ;
  margin-top:20px ;
`

export const Boll = styled.Text<PropsColorBoll>`
  width:5px;
  height:5px;
  background-color: ${({ theme, color }) => theme.COLORS[color] };
  margin-right:8px;
  border-radius:8px ;
`
