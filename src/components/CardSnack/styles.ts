import styled, {css} from "styled-components/native";
import { TouchableOpacity } from 'react-native'

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY"

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  height: 49px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px 14px 12px;
  margin-bottom:8px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center ;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT_BASE}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const VerticalLine = styled.View`
  height:14px;
  border: 0.5px solid ${({ theme }) => theme.COLORS.GRAY_4};
  margin:0 5px ;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT_XS}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`

export const Status = styled.View<Props>`
  width:14px;
  height:14px;
  border-radius:20px;
  background-color: ${({ theme, type  }) => 
    type === 'PRIMARY' ? theme.COLORS.GREEN_MID :  theme.COLORS.RED_MID};
`;

