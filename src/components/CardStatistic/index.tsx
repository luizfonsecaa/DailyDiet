import { Container, SubTitle, Title } from "./styles";

type Props = {
  title: number;
  subtitle:string;
  color:string;
  size?: number
}

export function CardStatistic({ title, subtitle, color, size }: Props) {
  return (
    <Container color={color} size={size}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  )
}