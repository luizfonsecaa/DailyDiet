import styled, {css} from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { ArrowLeft } from "phosphor-react-native";

export type ColorbackGround = 'GRAY_5' | 'GREEN_LIGHT' | 'RED_LIGHT'
export type SpaceContet = 'center' | 'space-around' | 'space-between'
type Props = {
  color: ColorbackGround
}

type PropsContet = {
  space: SpaceContet 
}

export const Container  = styled.View`
  flex: 1;
`;

export const Header = styled.View<Props>`
  height:132px;
  width:100% ;
  background-color: ${({color, theme}) => theme.COLORS[color]};
  justify-content: center ;
  align-items: center ;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT_LG}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Button = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
  position:absolute;
  z-index:1 ;
  left:24px;
  align-self: flex-start;
`;

export const Content = styled.View<PropsContet>`
  flex:1;
  padding:24px;
  border-radius:20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE} ;
  margin-top: -20px;
  justify-content: ${({space}) => space ? space : 'flex-start'}
`

export const Icon = styled(ArrowLeft).attrs(({ theme })=> ({
  size:24,
  color: theme.COLORS.GRAY_2,
  weight: 'bold'
}))`
  position:absolute;
`;
