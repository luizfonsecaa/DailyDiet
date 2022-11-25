import styled, {css} from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native'
import {TouchableOpacity} from 'react-native'


type Props = {
  isDiet: boolean
}


export const Container = styled.View<Props>`
  height: 180px;
  background-color: ${({theme, isDiet}) => isDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  align-items: center ;
  padding-top: 70px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.text_2XL}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT_SM}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const Button = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  position:absolute;
  z-index:1 ;
  left:24px;
  top:45px;
  align-self: flex-start;
`;


export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, isDiet })=> ({
  size:25,
  color:  isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  /* position: absolute;
  left:24;
  top:25 */
`