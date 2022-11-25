import { TouchableOpacity } from 'react-native'
import styled, {css} from "styled-components/native";


type Props = {
  hasIcon?: boolean;
  dark: boolean;
};


export const Container = styled(TouchableOpacity)<Props>`
  min-height: 50px;
  max-height: 50px;
  background-color: ${({ theme, dark }) => dark ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
  border: 1px solid ${({ theme })=> theme.COLORS.GRAY_1 } ;
  border-radius: 6px;
  flex-direction:row  ;
  justify-content: center;
  align-items: center;
  padding: 0 20px ;
  margin-top: 10px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, hasIcon, dark })=> css`
    font-size: ${theme.FONT_SIZE.TEXT_SM}px;
    color: ${ dark ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-left: ${hasIcon ? '12px' : '0px'}
  `}
`





