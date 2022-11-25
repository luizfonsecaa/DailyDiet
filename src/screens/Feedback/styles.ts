import styled, {css} from "styled-components/native";

type Props = {
  isDiet: boolean;
}


export const Container = styled.View`
  flex: 1;
  justify-content: center ;
  align-items: center ;
  background-color: ${({theme}) => theme.COLORS.WHITE} ;
`

export const Title = styled.Text<Props>`
  ${({ theme, isDiet })=> css`
    font-size: ${theme.FONT_SIZE.TEXT_LX}px;
    color: ${ isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-weight:700;
  `}
`

export const Subtitle = styled.Text`
  ${({ theme })=> css`
    font-size: ${theme.FONT_SIZE.TEXT_BASE}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    text-align: center;
  `}
`

export const Logo = styled.Image`
  height: 288px;
  margin: 40px 0px ;
`