import { TouchableOpacityProps } from "react-native";
import { Boll, Container, Title, ColorType, BackGroundColorType } from "./styles";


type Props = TouchableOpacityProps & {
  active: boolean
  color: ColorType
  title: string
  backgroundColor: BackGroundColorType
}


export function ButtonCheck({active, color, title, backgroundColor, ...rest}: Props) {
  return (
    <Container 
      {...rest}
      active={active} 
      color={color} 
      backgroundColor= {backgroundColor}
    >
      <Boll color={color}></Boll>
      <Title>{title}</Title>
    </Container>
  )
}