import { Container, Logo, UserLogo } from "./styles";
import LogoImg from '@assets/logo.png'
import User from '@assets/user.jpeg'
export function Header() {
  return (
    <Container>
      <Logo source={LogoImg} />
      <UserLogo source={User} />
    </Container>
  )
}