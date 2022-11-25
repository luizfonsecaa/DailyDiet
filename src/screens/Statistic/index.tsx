import { CardStatistic } from "@components/CardStatistic";
import { HeaderStatistic } from "@components/HeaderStatistic";
import { Text } from "react-native";
import { Container, ContainerStatistic, Page, Title } from "./styles";
import { useTheme } from 'styled-components/native'
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import StorageMeals from '@storage/Meals'
export default function Statistic() {
  const { COLORS } = useTheme()
  
  const [totalMeals, setTotalMeals] = useState(0)
  const [totalMealsInsedeDiet, setTotalMealsInsedeDiet] = useState(0)
  const [totaltotalOutsideDiet, setTotaltotalOutsideDiet] = useState(0)


  useFocusEffect(useCallback(()=>{

    setTotalMeals(StorageMeals.totalMeals)
    setTotalMealsInsedeDiet(StorageMeals.totalInsedeDiet)
    setTotaltotalOutsideDiet(StorageMeals.totalOutsideDiet)

  }, []))

  return (
    <Container>
      <HeaderStatistic />
      <Page>
        <Title>Estatísticas gerais</Title>
        <CardStatistic 
          title={totalMealsInsedeDiet}
          subtitle="melhor sequência de pratos dentro da dieta"
          color={COLORS.GRAY_7}
        />
        <CardStatistic 
          title={totalMeals}
          subtitle="refeições registradas"
          color={COLORS.GRAY_7}
        />

        <ContainerStatistic >
        <CardStatistic 
          size={48}
          title={totalMealsInsedeDiet}
          subtitle="refeições dentro da dieta"
          color={COLORS.GREEN_LIGHT}
        />
        <CardStatistic 
          size={48}
          title={totaltotalOutsideDiet}
          subtitle="refeições fora da dieta"
          color={COLORS.RED_LIGHT}
        />

        </ContainerStatistic>
      </Page>
    </Container>
  )
}