import { ButtonIcon } from "@components/ButtonIcon";
import { Modal } from "react-native";
import { Container, ModalView, Title, ModalAction } from "./styles";
import StorageMeals from '@storage/Meals'
import { useNavigation, useRoute } from "@react-navigation/native";

type Props = {
  modalVisible:boolean
  closeModal: (status:boolean) => void 
}

type RouteParams = {
  id:string;
}


export function ModalContent({ modalVisible, closeModal}: Props) {
  const navigation = useNavigation()
  const route = useRoute();
  const { id } = route.params as RouteParams

  async function handleDelete() {
    await StorageMeals.DeleteOne(id)
    navigation.navigate('home')
  }

  return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <Container>
          <ModalView>
            <Title>Deseja realmente excluir o registro da refeição?</Title>
            <ModalAction>
              <ButtonIcon dark={false} title="Cancelar" onPress={() => closeModal(false)}/>
              <ButtonIcon title="Sim, excluir" onPress={handleDelete} />
            </ModalAction>
          </ModalView>
        </Container>
      </Modal>
  );
};
