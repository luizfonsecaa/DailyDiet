import styled, {css} from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'

type Props = {
  isDiet: boolean
}



export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  flex-direction:column;
  padding:20px;
  align-items:center;
  margin-top: 32px ;
  border-radius: 8px;
  background-color: ${({theme, isDiet}) => isDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`


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

export const IconArrow = styled(ArrowUpRight).attrs(({ theme }) => ({
  size:24,
  color: theme.COLORS.GREEN_DARK,
  weight: 'bold'
}))`
  position:absolute;
  right:8px;
  top:8px ;
`;

