import { SafeAreaView } from 'react-native-safe-area-context'
import styled, {css} from "styled-components/native";

export const Container  = styled.View`
  flex: 1;
  /* background-color: ${({ theme }) => theme.COLORS.GREEN_MID}; */
`;

export const Page = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
  margin-top: -10px;
  border-radius: 20px ;
  align-items:center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT_SM}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-bottom: 23px;
  `};
`

export const ContainerStatistic = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width:100%;
`





