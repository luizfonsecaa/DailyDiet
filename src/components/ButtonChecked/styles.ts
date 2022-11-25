import { TouchableOpacity } from 'react-native'
import styled, {css} from 'styled-components/native';

export type ColorType = 'GREEN_DARK' | 'RED_DARK' 
export type BackGroundColorType = 'GREEN_LIGHT' | 'RED_LIGHT'


type PropsColorButton = {
  color: ColorType
  active: boolean
  backgroundColor:BackGroundColorType
}

export const Container = styled(TouchableOpacity)<PropsColorButton>`
  min-height: 50px;
  max-height: 50px;
  background-color: ${({ theme, active, backgroundColor }) => 
    active ? theme.COLORS[backgroundColor] : theme.COLORS.GRAY_6 } ;
  border: 1px solid ${({theme, active, color}) => 
    active ? theme.COLORS[color] : theme.COLORS.GRAY_6 } ;} ;
  border-radius: 6px;
  flex-direction:row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme })=> css`
    font-size: ${theme.FONT_SIZE.TEXT_SM}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-weight: 700;
  `}
`

export const Boll = styled.Text<PropsColorButton>`
  width:8px;
  height:8px;
  background-color: ${({ theme, color }) => theme.COLORS[color] };
  margin-right:8px;
  border-radius:8px ;
`
