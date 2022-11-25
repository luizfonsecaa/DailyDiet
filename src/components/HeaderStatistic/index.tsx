import { Button, Container, Icon, SubTitle, Title } from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import StorageMeals from '@storage/Meals'

export function HeaderStatistic() {
  const navigation = useNavigation()

  const [data, setData] = useState(0)
  const [isDiet, setIsDiet] = useState(true) 
  function handleGoBack() {
    navigation.goBack()
  }

  useFocusEffect(useCallback(()=>{
    setData(StorageMeals.mealsInsideDiet)
    setIsDiet(StorageMeals.isDiet)
  }, []))

  return (
    <Container isDiet={isDiet}>
      <Button onPress={()=>{handleGoBack()}}>
        <Icon/>
      </Button> 
      <Title>{data}%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  )
}