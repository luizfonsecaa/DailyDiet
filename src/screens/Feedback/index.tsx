
import { Container, Logo, Subtitle, Title } from "./styles";
import FeedbackPositive from '@assets/feedbackPositive.png'
import FeedbackNegative from '@assets/feedbackNegative.png'
import { ButtonIcon } from "@components/ButtonIcon";
import { useRoute, useNavigation } from '@react-navigation/native';


type RouteParams = {
  isDiet:boolean;
}

export function Feedback() {
  const route = useRoute();
  const navigation = useNavigation()
  const { isDiet } = route.params as RouteParams

  function handleGoHome(){
    navigation.navigate('home')
  }

  return(
    <Container>
      <Title isDiet={isDiet}> {isDiet ? 'Continue assim!' : 'Que pena!'}</Title>
      <Subtitle>
        {
          isDiet 
          ? 'Você continua dentro da dieta. Muito bem!'
          : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'
        }
      </Subtitle>
      <Logo source={ isDiet ? FeedbackPositive : FeedbackNegative } />
      <ButtonIcon 
        title="Ir para a página inicial"
        onPress={()=> handleGoHome()}
      />
    </Container>
  )
}