import { useCallback, useState } from 'react';
import { TouchableOpacityProps } from 'react-native'
import StorageMeals from '@storage/Meals'
import { Container, SubTitle, Title, IconArrow } from "./styles";
import { useFocusEffect } from '@react-navigation/native';

export function HomeStatistic(rest: TouchableOpacityProps) {
  const [data, setData] = useState(0)
  const [isDiet, setIsDiet] = useState(true) 

  useFocusEffect(useCallback(()=>{
    setData(StorageMeals.mealsInsideDiet)
    setIsDiet(StorageMeals.isDiet)
  }, []))

  return (
    <Container {...rest}  isDiet={isDiet}>
      <IconArrow />
      <Title>{data}%</Title>
      <SubTitle> das refeiçoes dentro da dieta</SubTitle>
    </Container>
  )
}