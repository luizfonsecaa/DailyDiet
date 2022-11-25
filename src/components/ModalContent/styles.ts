import styled, {css} from "styled-components/native";


export const Container = styled.View`
  flex:1;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
`

export const ModalView = styled.View`
background-color: ${({ theme }) => theme.COLORS.WHITE};
border-radius: 8px;
margin:0px 20px;
justify-content: center;
padding:24px ;
`

export const ModalAction = styled.View`
  flex-direction:row;
  justify-content: space-evenly;
`

export const Title = styled.Text`
  ${({ theme })=> css`
    font-size: ${theme.FONT_SIZE.TEXT_LG}px;
    text-align:center;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-weight: 700;
  `}
`