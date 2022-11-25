import { groupGetAll } from '@storage/group/groupGetAll';
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig';
import AsyncStorage from "@react-native-async-storage/async-storage";



export async function groupRemoveByName(groupDeleted:string) {
  try {
    const storadGroups = await groupGetAll()

    const groups = storadGroups.filter(group => group !== groupDeleted)

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))

    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)

  } catch (error) {
    throw error
  }
}