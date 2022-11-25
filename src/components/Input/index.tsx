import { TextInputProps } from "react-native";
import { Container, InputText, Title } from "./styles";

type Props = TextInputProps & {
  title: string 
}


export function Input({ title, ...rest}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <InputText
        {...rest}
      />
    </Container>
  )
}