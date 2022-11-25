import { SafeAreaView } from 'react-native-safe-area-context'
import styled, {css} from "styled-components/native";

export const Container  = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

export const Subtitle = styled.Text`
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT_BASE}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    line-height: 20.8px;
    margin-top: 40px;
  `};
`;
export const HeaderSection = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT_LG}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-top:32px;
    margin-bottom:8px ;
  `};
`;
