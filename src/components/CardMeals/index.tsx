import React from "react";
import { useNavigation } from '@react-navigation/native'
import { View } from "react-native";
import { Button, Container, Content, Header, Icon, Title, ColorbackGround, SpaceContet } from "./styles";

type Props = {
  children: React.ReactNode
  title: string; 
  color: ColorbackGround;
  space?: SpaceContet;
}

export function CardMeals({ children, title, color, space }: Props) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }
  return (
    <Container>
      <Header color={color}>
        <Button onPress={() => {handleGoBack()}}>
          <Icon/>
        </Button>
        <Title>{title}</Title>
      </Header>
      <Content space={space}>
        {children}
      </Content>
    </Container>
  )
}