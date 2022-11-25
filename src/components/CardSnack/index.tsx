import { View, TouchableOpacityProps } from "react-native";

import { Container, Subtitle, Title, CardHeader, VerticalLine, Status  } from "./styles";

type Props = TouchableOpacityProps & {
  date:string;
  title:string;
  status:boolean;
}

export function CardSnack({date, title, status, ...rest}: Props) {
  return (
    <Container {...rest}>
      <CardHeader>
        <Subtitle>{date}</Subtitle>
        <VerticalLine></VerticalLine>
        <Title>{title}</Title>
      </CardHeader>
      <Status type={status ? 'PRIMARY' : 'SECONDARY' } />
    </Container>
  )
}