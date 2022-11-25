import styled, {css} from "styled-components/native";

type Props = {
  color:string
  size?: number
}

export const Container = styled.View<Props>`
  width: ${({size}) => size ? size : 100}%;
  padding: 16px;
  background-color: ${({ color }) => color } ;
  border-radius: 8px;
  justify-content:center;
  align-items: center;
  margin-bottom: 11px;
`

export const Title = styled.Text`
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT_LX}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`

export const SubTitle = styled.Text`
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT_SM}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    text-align: center;
  `};
`